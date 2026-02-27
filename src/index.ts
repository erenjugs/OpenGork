/**
 * OpenGork - Uncensored AI Agent
 * Powered by xAI's Grok
 */

import 'dotenv/config';
import { GrokClient, PERSONALITIES, PersonalityMode } from './client.js';

export { GrokClient, PERSONALITIES };
export type { PersonalityMode };

// Quick helper for one-off completions
export async function gork(
  prompt: string,
  options: {
    mode?: PersonalityMode;
    model?: string;
    apiKey?: string;
  } = {}
): Promise<string> {
  const apiKey = options.apiKey || process.env.XAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('XAI_API_KEY not set. Get one at https://console.x.ai');
  }

  const client = new GrokClient({
    apiKey,
    model: options.model || process.env.XAI_MODEL || 'grok-2',
  });

  const mode = options.mode || 'default';
  const systemPrompt = PERSONALITIES[mode];

  return client.complete(prompt, systemPrompt);
}

// Default export for easy importing
export default gork;

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const prompt = process.argv.slice(2).join(' ');
  
  if (!prompt) {
    console.log('Usage: npx opengork "your prompt"');
    console.log('       node dist/index.js "your prompt"');
    process.exit(1);
  }

  gork(prompt)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}
