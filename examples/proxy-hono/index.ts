import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

const TARGET = 'https://hono.dev'

app.all('*', (c) => {
  const url = new URL(c.req.url)
  const targetUrl = new URL(TARGET + url.pathname + url.search)

  return fetch(targetUrl.toString(), c.req.raw)
})

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`)
})

export default app
