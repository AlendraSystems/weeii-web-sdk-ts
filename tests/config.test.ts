import { describe, it, expect, beforeEach, vi } from 'vitest';
import { configureWeeii, getConfig } from '../src/config.js';
import { _resetStore } from '../src/store.js';
import { _resetTransport } from '../src/transport.js';

// Reset singletons before each test so configureWeeii is not idempotent-skipped
function resetAll() {
  _resetStore();
  _resetTransport();
  // Reset the private _config in config.ts by reloading the module
  vi.resetModules();
}

beforeEach(() => {
  resetAll();
});

describe('getConfig before configureWeeii', () => {
  it('throws a descriptive error', async () => {
    const { getConfig: freshGetConfig } = await import('../src/config.js');
    expect(() => freshGetConfig()).toThrow('[weeii/sdk]');
  });
});

describe('configureWeeii', () => {
  it('applies defaults for optional fields', async () => {
    const { configureWeeii: freshConfigure, getConfig: freshGetConfig } = await import('../src/config.js');
    // createTransport will fail without a real WS server — mock the transport module
    vi.mock('../src/transport.js', () => ({
      initTransport: vi.fn(),
      getTransport: vi.fn(),
      _resetTransport: vi.fn(),
    }));
    vi.mock('../src/store.js', () => ({
      initStore: vi.fn(),
      getStore: vi.fn(),
      _resetStore: vi.fn(),
    }));
    freshConfigure({ url: 'wss://test.example.com' });
    const cfg = freshGetConfig();
    expect(cfg.url).toBe('wss://test.example.com');
    expect(cfg.env).toBe('production');
    expect(cfg.debug).toBe(false);
    expect(typeof cfg.onAlert).toBe('function');
    expect(typeof cfg.onMessage).toBe('function');
    expect(typeof cfg.onError).toBe('function');
  });

  it('is idempotent — second call is a no-op', async () => {
    vi.mock('../src/transport.js', () => ({
      initTransport: vi.fn(),
      getTransport: vi.fn(),
      _resetTransport: vi.fn(),
    }));
    vi.mock('../src/store.js', () => ({
      initStore: vi.fn(),
      getStore: vi.fn(),
      _resetStore: vi.fn(),
    }));
    const { configureWeeii: freshConfigure, getConfig: freshGetConfig } = await import('../src/config.js');
    freshConfigure({ url: 'wss://first.example.com', env: 'development' });
    freshConfigure({ url: 'wss://second.example.com', env: 'staging' });
    // First call wins
    expect(freshGetConfig().url).toBe('wss://first.example.com');
    expect(freshGetConfig().env).toBe('development');
  });
});
