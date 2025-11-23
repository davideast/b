# Hono Proxy Example

This example demonstrates how to create a simple proxy server using Hono.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the server:**
   ```bash
   npm start
   ```

The server will start on port 3000 and proxy all requests to `https://httpbin.org`. For example, a request to `http://localhost:3000/get` will be forwarded to `https://httpbin.org/get`.
