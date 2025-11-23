# Hono Proxy Example

This example demonstrates how to create a simple proxy server using Hono. The server forwards all incoming requests to `https://hono.dev`.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

The server will start on a random port. You can now access the proxied content by visiting, for example, `http://localhost:<port>/` in your browser, which will serve the content from `https://hono.dev/`. Any path you visit on the proxy will be forwarded to the target URL.
