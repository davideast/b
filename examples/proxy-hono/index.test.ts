import { app } from './index';

describe('Proxy Server', () => {
  // Store the original fetch
  const originalFetch = global.fetch;

  afterEach(() => {
    // Restore the original fetch after each test
    global.fetch = originalFetch;
  });

  it('should proxy requests to example.com', async () => {
    // Mock the global fetch
    const mockResponse = new Response('<html><body><h1>Example Domain</h1></body></html>', {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
    });
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await app.request('http://localhost/');
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Example Domain');

    // Check if fetch was called correctly
    const fetchCall = (global.fetch as jest.Mock).mock.calls[0];
    const request = fetchCall[0] as Request;
    expect(request.url).toBe('https://example.com/');
  });
});
