import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { proxy } from 'hono/proxy'

const app = new Hono()

app.all('*', (c) => {
  const url = new URL(c.req.url)
  const targetUrl = 'https://httpbin.org' + url.pathname + url.search
  const request = new Request(targetUrl, c.req.raw)
  return proxy(request)
})

serve(app)
