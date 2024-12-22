import { env } from '../env';

export const OPENAI_CONFIG = {
  API_URL: 'https://api.openai.com/v1',
  MODEL: 'gpt-4-turbo-preview',
  MAX_TOKENS: 1024,
  TEMPERATURE: 0.7,
  API_KEY: env.OPENAI_API_KEY,
} as const;

export const REQUEST_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_CONFIG.API_KEY}`,
  }
} as const;