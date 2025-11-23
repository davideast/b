import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { proxy } from 'hono/proxy'
import 'isomorphic-fetch'

const app = new Hono()

app.all('/proxy/*', (c) => {
  const url = new URL(c.req.url)
  const path = url.pathname.replace(/^\/proxy/, '')
  const search = url.search
  const target = `https://httpbin.org${path}${search}`
  return proxy(target, c.req.raw)
})

let server: any

beforeAll(() => {
  server = serve({
    fetch: app.fetch,
    port: 3001,
  })
})

afterAll(() => {
  server.close()
})

describe('Proxy', () => {
  it('should proxy the request', async () => {
    const res = await fetch('http://localhost:3001/proxy/get?foo=bar')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.url).toBe('https://httpbin.org/get?foo=bar')
  })
})
