# SpeakX-Project
# Project: questSearch

## Description
The `questSearch` project is a robust search tool where users can perform efficient queries. The application fetches data from a database, with the database connection details managed via an `.env` file.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 12)
- **npm** or **yarn** (Node.js package managers)
- **Docker** (for containerization, optional)

---

## Installation

Clone the repository and navigate into the project directory:

```bash
# Clone the repository
git clone https://github.com/Chirag12216570/SpeakX-Project.git

# Navigate to the project directory
cd SpeakX-Project

# Install dependencies
npm install
```

---

## Configuration

### Database Setup

Update the `.env` file with your database connection details. For example:

```
DATABASE_HOST=your-database-host
DATABASE_PORT=your-database-port
DATABASE_NAME=your-database-name
DATABASE_USER=your-database-user
DATABASE_PASSWORD=your-database-password
```

Ensure the database is set up and contains the required tables and data for the application to function properly.

---

## Usage

### Run the project

To run the project, execute the following:

```bash
# Compile the project
npm run compile

# Run the application
npm start
```

### Search Functionality

Users can perform searches by accessing the application through the provided endpoint or UI, depending on the implementation.

---

## Scripts

The project includes several npm scripts defined in `package.json`. Below are the most relevant ones:

- `npm run check` - Lint all files.
- `npm run fix` - Automatically fix linting errors.
- `npm run compile` - Compile TypeScript files.
- `npm start` - Start the application.
- `npm test` - Run tests.
- `npm run coverage` - Check and generate coverage reports.
- `npm run prepare` - Prepare the project for deployment.
- `npm run build:cjs` - Build for CommonJS format.

---

## Testing

To run the tests:

```bash
npm test
```

For browser-specific tests:

```bash
npm run test:browser
```

For TypeScript-specific tests:

```bash
npm run test:typescript
```

---

## Docker Support

To containerize the application:

1. Build the Docker image:

   ```bash
   docker build -t envoy-server .
   ```

2. Run the Docker container with updated ports:

   ```bash
   docker run -d --name envoy-server -p 5050:5050 -p 7070:7070 envoy-server
   ```

3. For interactive mode:

   ```bash
   docker run -it --rm envoy-server /bin/bash
   ```

---

## Contribution

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes.
4. Push the branch and create a pull request.

---



