import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.all('*', (c) => {
  const url = new URL(c.req.url)
  url.hostname = 'hono.dev'
  url.protocol = 'https'
  // Create a new request with the new URL but preserving the original request's properties
  return fetch(new Request(url, c.req.raw))
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
