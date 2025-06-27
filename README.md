# E-Learning Platform

A modern, responsive e-learning platform built with Vue.js 3, TypeScript, and Tailwind CSS. This application provides a comprehensive learning experience with course management, authentication, and category-based course organization.


## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd become-devops-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t elearning-app .
```

### Run Docker Container

```bash
docker run -p 3000:80 elearning-app
```

The application will be available at `http://localhost:3000`

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  elearning:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```
