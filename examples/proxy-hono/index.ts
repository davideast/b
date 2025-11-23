import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.all('/*', async (c) => {
  const url = new URL(c.req.url);
  url.hostname = 'google.com';
  url.port = '';

  const newRequest = new Request(url, c.req.raw);

  return fetch(newRequest);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
