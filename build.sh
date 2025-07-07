#!/bin/bash

set -euo pipefail


RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' 

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

print_status "Checking for security vulnerabilities..."
if command -v npm > /dev/null 2>&1; then
    if npm audit --audit-level=moderate > /dev/null 2>&1; then
        print_status "No security vulnerabilities found."
    else
        print_warning "Security vulnerabilities found. Consider running 'npm audit fix'"
        npm audit --audit-level=moderate
    fi
fi

print_status "Building Docker image..."
export DOCKER_BUILDKIT=1
docker buildx build \
    --tag become-devops-frontend:latest \
    --tag become-devops-frontend:$(date +%Y%m%d-%H%M%S) \
    --target production \
    --build-arg BUILDKIT_INLINE_CACHE=1 \
    .

if command -v trivy > /dev/null 2>&1; then
    print_status "Running security scan with Trivy..."
    trivy image --severity HIGH,CRITICAL become-devops-frontend:latest || {
        print_warning "Security vulnerabilities found in the image. Review the scan results."
    }
else
    print_warning "Trivy not found. Install it for security scanning: https://aquasecurity.github.io/trivy/"
fi

print_status "Checking image size..."
IMAGE_SIZE=$(docker images become-devops-frontend:latest --format "table {{.Size}}" | tail -n 1)
print_status "Image size: $IMAGE_SIZE"

print_status "Testing container..."
CONTAINER_ID=$(docker run -d --rm -p 8080:8080 --name test-frontend become-devops-frontend:latest)

sleep 5


if curl -f http://localhost:8080/ > /dev/null 2>&1; then
    print_status "Application is running successfully!"
else
    print_error "Application failed to start properly."
    docker logs $CONTAINER_ID
    docker stop $CONTAINER_ID
    exit 1
fi

docker stop $CONTAINER_ID

print_status "Build completed successfully!"
print_status "To run the application: docker-compose up -d"
print_status "To run manually: docker run -p 8080:8080 become-devops-frontend:latest"

