export const API_CONFIG = {
  BASE_URL: 'https://api.openai.com/v1',
  MODEL: 'gpt-4-turbo-preview',
  MAX_TOKENS: 1024,
  TEMPERATURE: 0.7,
  API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
} as const;

export const REQUEST_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_CONFIG.API_KEY}`
  }
} as const;