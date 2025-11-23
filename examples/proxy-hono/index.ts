import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

const PROXY_TARGET = 'https://httpbin.org'

app.all('*', (c) => {
  const url = new URL(c.req.url)
  const targetUrl = new URL(PROXY_TARGET)

  targetUrl.pathname = url.pathname
  targetUrl.search = url.search

  const newRequest = new Request(targetUrl, c.req.raw)

  return fetch(newRequest)
})

serve(app, (info) => {
    console.log(`Proxying to ${PROXY_TARGET} on http://localhost:${info.port}`)
})
