# Hono Proxy Example

This example demonstrates how to create a simple proxy server using Hono.

## Setup

1.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the server

1.  Start the server:
    ```bash
    npm start
    ```

The server will start on port 3000. Any request to `http://localhost:3000` will be proxied to `https://google.com`.
