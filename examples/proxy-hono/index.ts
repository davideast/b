import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.all('/*', (c) => {
  const url = new URL(c.req.url);
  const proxyUrl = new URL('https://jsonplaceholder.typicode.com' + url.pathname + url.search);
  return fetch(proxyUrl.toString(), c.req.raw)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
