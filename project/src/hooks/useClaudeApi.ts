import { useState, useEffect } from 'react';
import { ENV } from '../config/environment';
import { getItem, setItem } from '../lib/storage/local';
import { STORAGE_KEYS } from '../lib/storage/keys';

export function useClaudeApi() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // First try localStorage
      let key = getItem<string | null>(STORAGE_KEYS.CLAUDE_API_KEY, null);
      
      // Then try environment variable
      if (!key && ENV.CLAUDE_API_KEY) {
        key = ENV.CLAUDE_API_KEY;
        setItem(STORAGE_KEYS.CLAUDE_API_KEY, key);
      }

      if (key) {
        setApiKey(key);
      } else {
        setError('Claude API key not found');
      }
    } catch (err) {
      setError('Failed to get Claude API key');
      console.error('Claude API key error:', err);
    }
  }, []);

  const updateApiKey = (newKey: string) => {
    try {
      setItem(STORAGE_KEYS.CLAUDE_API_KEY, newKey);
      setApiKey(newKey);
      setError(null);
    } catch (err) {
      setError('Failed to update Claude API key');
      console.error('Update API key error:', err);
    }
  };

  return {
    apiKey,
    error,
    updateApiKey,
  };
}