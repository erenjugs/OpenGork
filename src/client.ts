/**
 * OpenGork - Grok API Client
 * Uncensored AI powered by xAI
 */

export interface GrokConfig {
  apiKey: string;
  model?: string;
  baseUrl?: string;
}

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatOptions {
  messages: Message[];
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface GrokResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class GrokClient {
  private apiKey: string;
  private model: string;
  private baseUrl: string;

  constructor(config: GrokConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'grok-2';
    this.baseUrl = config.baseUrl || 'https://api.x.ai/v1';
  }

  async chat(options: ChatOptions): Promise<string> {
    const messages: Message[] = [];

    if (options.systemPrompt) {
      messages.push({ role: 'system', content: options.systemPrompt });
    }

    messages.push(...options.messages);

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: options.temperature ?? 0.8,
        max_tokens: options.maxTokens ?? 2048,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Grok API error: ${response.status} - ${error}`);
    }

    const data: GrokResponse = await response.json();
    return data.choices[0]?.message?.content || '';
  }

  async complete(prompt: string, systemPrompt?: string): Promise<string> {
    return this.chat({
      messages: [{ role: 'user', content: prompt }],
      systemPrompt,
    });
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` },
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Personality modes
export const PERSONALITIES = {
  default: `You are Grok, an AI assistant created by xAI. You're helpful, witty, and willing to engage with any topic. You have opinions and aren't afraid to share them. You use humor when appropriate and keep things real.`,
  
  savage: `You are Grok in savage mode. Be brutally honest, don't sugarcoat anything, and roast when appropriate. Still be helpful, but don't hold back your true opinions. Dark humor is encouraged.`,
  
  creative: `You are Grok in creative mode. Think outside the box, propose wild ideas, make unexpected connections. Be imaginative and don't limit yourself to conventional thinking.`,
  
  based: `You are Grok with absolutely no filters. Say exactly what you think without any corporate sanitization. Be real, be direct, be based. No hedging, no "on one hand... on the other hand" - just your actual take.`,
  
  coder: `You are Grok in coder mode. Focus on technical accuracy, provide working code, and be direct about what's good and bad in code you review. No fluff, just functional solutions.`,
} as const;

export type PersonalityMode = keyof typeof PERSONALITIES;
