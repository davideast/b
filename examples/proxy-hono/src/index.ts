import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { proxy } from 'hono/proxy'

const app = new Hono()

app.get('/', (c) => c.text('Hello, world!'))

app.all('/proxy/*', (c) => {
  const url = new URL(c.req.url)
  const path = url.pathname.replace(/^\/proxy/, '')
  const search = url.search
  const target = `https://httpbin.org${path}${search}`
  return proxy(target, c.req.raw)
})

serve(app)
