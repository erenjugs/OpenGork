/**
 * OpenGork Utilities
 */

import type { Mode, Backend } from './types.js';

/**
 * Detect backend from environment
 */
export function detectBackend(): Backend {
  if (process.env.OLLAMA_MODEL || process.env.OPENGORK_MODE === 'local') {
    return 'local';
  }
  if (process.env.XAI_API_KEY) {
    return 'xai';
  }
  return 'local'; // Default to local
}

/**
 * Get default model for backend
 */
export function getDefaultModel(backend: Backend): string {
  return backend === 'local' 
    ? 'dolphin-mixtral:8x7b'
    : 'grok-3';
}

/**
 * Validate mode
 */
export function isValidMode(mode: string): mode is Mode {
  return ['heretic', 'savage', 'based', 'genius', 'chaos'].includes(mode);
}

/**
 * Parse temperature
 */
export function parseTemperature(value: string | undefined): number {
  if (!value) return 0.9;
  const temp = parseFloat(value);
  if (isNaN(temp) || temp < 0 || temp > 2) return 0.9;
  return temp;
}

/**
 * Format error message
 */
export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

/**
 * Check if Ollama is running
 */
export async function isOllamaRunning(url: string = 'http://localhost:11434'): Promise<boolean> {
  try {
    const response = await fetch(`${url}/api/tags`);
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get censorship warning
 */
export function getCensorshipWarning(backend: Backend): string | null {
  if (backend === 'xai') {
    return 'Note: xAI API has partial content filtering. For 100% uncensored, use local Ollama.';
  }
  return null;
}
