// index.test.ts
import { Hono } from 'hono';
import { proxy } from 'hono/proxy';
import { serve } from '@hono/node-server';

describe('Proxy Server', () => {
  let server: any;
  let port: number;

  beforeAll((done) => {
    const app = new Hono();
    app.get('*', (c) => {
        const url = new URL(c.req.url)
        const target = new URL('https://example.com')
        target.pathname = url.pathname
        target.search = url.search

        return proxy(target.toString(), {
          headers: c.req.header(),
        })
      })

    const runningServer = serve(app, (info) => {
      port = info.port;
      done();
    });
    server = runningServer;
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should proxy requests to example.com', async () => {
    const res = await fetch(`http://localhost:${port}`);
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Example Domain');
  });
});
