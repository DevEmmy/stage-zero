# Stage Zero - Express API Server

A Node.js/Express API server built with TypeScript that provides user information and random cat facts.

## Features

- RESTful API endpoint `/me` that returns user data and a random cat fact
- Rate limiting (100 requests per 15 minutes)
- Request logging with Morgan
- CORS enabled
- TypeScript support with ts-node

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stage-zero
```

2. Install dependencies:
```bash
npm install
```

## Dependencies

### Production Dependencies
- **express** (^5.1.0) - Web framework for Node.js
- **axios** (^1.12.2) - HTTP client for making requests
- **cors** (^2.8.5) - Cross-Origin Resource Sharing middleware
- **dotenv** (^17.2.3) - Environment variable loader
- **express-rate-limit** (^8.1.0) - Rate limiting middleware
- **morgan** (^1.10.1) - HTTP request logger middleware

### Type Definitions
- **@types/express** (^5.0.4) - TypeScript definitions for Express
- **@types/cors** (^2.8.19) - TypeScript definitions for CORS
- **@types/dotenv** (^6.1.1) - TypeScript definitions for dotenv
- **@types/morgan** (^1.9.10) - TypeScript definitions for Morgan

### Development Dependencies
- **ts-node** (^10.9.2) - TypeScript execution environment for Node.js

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
```

The server will default to port 3000 if `PORT` is not specified.

## Running Locally

1. Create a `.env` file (optional, defaults to port 3000):
```bash
echo PORT=3000 > .env
```

2. Start the development server:
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### GET /me

Returns user information and a random cat fact.

**Response:**
```json
{
  "status": "success",
  "user": {
    "name": "Emmanuel Olaosebikan",
    "email": "eolaosebikan60@gmail.com",
    "stack": "Node.js (Typescript)/Express.js"
  },
  "fact": "A random cat fact from catfact.ninja",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Example:**
```bash
curl http://localhost:3000/me
```

## Project Structure

```
stage-zero/
├── index.ts              # Main server file
├── myData.ts            # User data export
├── fetchCatFact.ts      # Cat fact fetching utility
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```