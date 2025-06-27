# Build script with security best practices for Windows
param(
    [switch]$SkipAudit,
    [switch]$SkipScan
)

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if Docker is running
try {
    docker info | Out-Null
} catch {
    Write-Error "Docker is not running. Please start Docker and try again."
    exit 1
}

# Check for security vulnerabilities in dependencies
if (-not $SkipAudit) {
    Write-Status "Checking for security vulnerabilities..."
    if (Get-Command npm -ErrorAction SilentlyContinue) {
        try {
            npm audit --audit-level=moderate
            Write-Status "No critical security vulnerabilities found."
        } catch {
            Write-Warning "Security vulnerabilities found. Consider running 'npm audit fix'"
        }
    }
}

# Build the Docker image
Write-Status "Building Docker image..."
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
docker build `
    --target production `
    --tag become-devops-frontend:latest `
    --tag become-devops-frontend:$timestamp `
    --build-arg BUILDKIT_INLINE_CACHE=1 `
    .

if ($LASTEXITCODE -ne 0) {
    Write-Error "Docker build failed."
    exit 1
}

# Security scan with Trivy (if available)
if (-not $SkipScan) {
    if (Get-Command trivy -ErrorAction SilentlyContinue) {
        Write-Status "Running security scan with Trivy..."
        trivy image --severity HIGH,CRITICAL become-devops-frontend:latest
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Security vulnerabilities found in the image. Review the scan results."
        }
    } else {
        Write-Warning "Trivy not found. Install it for security scanning: https://aquasecurity.github.io/trivy/"
    }
}

# Check image size
Write-Status "Checking image size..."
$imageSize = docker images become-devops-frontend:latest --format "table {{.Size}}" | Select-Object -Last 1
Write-Status "Image size: $imageSize"

# Run container for testing
Write-Status "Testing container..."
$containerId = docker run -d --rm -p 8080:8080 --name test-frontend become-devops-frontend:latest

# Wait for container to start
Start-Sleep -Seconds 5

# Test if the application is responding
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/" -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Status "Application is running successfully!"
    } else {
        throw "Unexpected status code: $($response.StatusCode)"
    }
} catch {
    Write-Error "Application failed to start properly."
    docker logs $containerId
    docker stop $containerId
    exit 1
}

# Stop test container
docker stop $containerId

Write-Status "Build completed successfully!"
Write-Status "To run the application: docker-compose up -d"
Write-Status "To run manually: docker run -p 8080:8080 become-devops-frontend:latest" 