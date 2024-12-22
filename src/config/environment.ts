import { z } from 'zod';

const envSchema = z.object({
  VITE_OPENAI_API_KEY: z.string().min(1),
  NODE_ENV: z.string(),
  IS_DEV: z.boolean(),
  IS_PROD: z.boolean(),
});

export const ENV = envSchema.parse({
  VITE_OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
});

export function validateEnvironment(): void {
  try {
    envSchema.parse(ENV);
  } catch (error) {
    throw new Error(`Missing required environment variables: VITE_OPENAI_API_KEY`);
  }
}