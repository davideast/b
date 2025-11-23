import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.all('*', async (c) => {
  const url = new URL(c.req.url);
  const targetUrl = new URL('https://example.com' + url.pathname + url.search);

  const newRequest = new Request(targetUrl.toString(), c.req.raw);

  const response = await fetch(newRequest);

  // Create a new response to avoid streaming issues
  const body = await response.arrayBuffer();
  const headers = new Headers(response.headers);

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
});

let server: ReturnType<typeof serve>;

if (require.main === module) {
  server = serve({
    fetch: app.fetch,
    port: 3000,
  });
  console.log('Proxy server listening on port 3000');
}

export { app, server };
