# Hono Proxy Example

This example demonstrates how to create a simple proxy server using Hono.

## Setup

1.  Navigate to this directory:
    ```bash
    cd examples/proxy-hono
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the server

To start the server, run the following command:

```bash
npm start
```

The server will be running on `http://localhost:3000`.

## Usage

You can test the proxy by sending requests to `http://localhost:3000/proxy`. For example, to make a GET request to `https://httpbin.org/get`, you can use the following `curl` command:

```bash
curl http://localhost:3000/proxy/get
```

This will proxy the request to `https://httpbin.org/get` and return the response.
