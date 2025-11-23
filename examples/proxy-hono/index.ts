import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { proxy } from 'hono/proxy'

const app = new Hono()

app.get('*', (c) => {
  const url = new URL(c.req.url)
  const target = new URL('https://example.com')
  target.pathname = url.pathname
  target.search = url.search

  return proxy(target.toString(), {
    headers: c.req.header(),
  })
})

serve(app, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
