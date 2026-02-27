/**
 * OpenGork Type Definitions
 */

export type Backend = 'local' | 'xai';

export type Mode = 'heretic' | 'savage' | 'based' | 'genius' | 'chaos';

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenGorkConfig {
  backend: Backend;
  model: string;
  apiKey?: string;
  baseUrl: string;
  temperature: number;
}

export interface ChatRequest {
  prompt: string;
  mode?: Mode;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatResponse {
  content: string;
  model: string;
  backend: Backend;
  tokens?: number;
}

export interface OllamaResponse {
  message: {
    role: string;
    content: string;
  };
  done: boolean;
}

export interface XaiResponse {
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

export interface ModelInfo {
  name: string;
  size?: string;
  description: string;
  censorship: 'none' | 'minimal' | 'partial';
}
