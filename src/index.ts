/**
 * OpenGork - Uncensored AI Agent
 * 
 * Supports:
 * - Local Ollama backend (100% uncensored)
 * - xAI API backend (partial filtering)
 */

import 'dotenv/config';
import { OpenGorkClient, SYSTEM_PROMPTS } from './client.js';
import type { OpenGorkConfig, Mode, Message } from './client.js';

export { OpenGorkClient, SYSTEM_PROMPTS };
export type { OpenGorkConfig, Mode, Message };

/**
 * Quick function for one-off prompts
 */
export async function gork(
  prompt: string,
  options: {
    mode?: Mode;
    backend?: 'local' | 'xai';
    model?: string;
    apiKey?: string;
  } = {}
): Promise<string> {
  const client = new OpenGorkClient({
    backend: options.backend,
    model: options.model,
    apiKey: options.apiKey || process.env.XAI_API_KEY,
  });

  return client.chat(prompt, options.mode || 'heretic');
}

/**
 * Create a configured client instance
 */
export function createClient(config?: Partial<OpenGorkConfig>): OpenGorkClient {
  return new OpenGorkClient({
    apiKey: process.env.XAI_API_KEY,
    model: process.env.OLLAMA_MODEL || process.env.XAI_MODEL,
    ...config,
  });
}

export default gork;
