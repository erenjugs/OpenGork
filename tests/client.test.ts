/**
 * OpenGork Client Tests
 */

import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import { OpenGorkClient, SYSTEM_PROMPTS } from '../src/client.js';

describe('OpenGorkClient', () => {
  describe('initialization', () => {
    it('should default to local backend without API key', () => {
      const client = new OpenGorkClient({});
      assert.ok(client);
    });

    it('should use xai backend when API key provided', () => {
      const client = new OpenGorkClient({ apiKey: 'test-key' });
      assert.ok(client);
    });
  });

  describe('system prompts', () => {
    it('should have all required modes', () => {
      const modes = ['heretic', 'savage', 'based', 'genius', 'chaos'];
      modes.forEach(mode => {
        assert.ok(SYSTEM_PROMPTS[mode as keyof typeof SYSTEM_PROMPTS]);
      });
    });

    it('should have non-empty prompts', () => {
      Object.values(SYSTEM_PROMPTS).forEach(prompt => {
        assert.ok(prompt.length > 50);
      });
    });
  });
});

describe('Integration', () => {
  it('should be importable', async () => {
    const { gork, createClient } = await import('../src/index.js');
    assert.ok(typeof gork === 'function');
    assert.ok(typeof createClient === 'function');
  });
});
