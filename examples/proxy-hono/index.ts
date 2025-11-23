import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

const PROXY_TARGET = 'https://jsonplaceholder.typicode.com';

app.all('*', async (c) => {
  const url = new URL(c.req.url);
  const targetUrl = new URL(PROXY_TARGET + url.pathname + url.search);

  // Copy headers, excluding 'host'
  const headers = new Headers(c.req.headers);
  headers.delete('host');

  const response = await fetch(targetUrl.toString(), {
    method: c.req.method,
    headers: headers,
    // Only forward a body for methods that support it
    body: (c.req.method === 'GET' || c.req.method === 'HEAD') ? null : c.req.body,
    redirect: 'manual',
  });

  return response;
});


const port = 3000;
console.log(`Proxy server is running on port ${port}, forwarding to ${PROXY_TARGET}`);

serve({
  fetch: app.fetch,
  port,
});
