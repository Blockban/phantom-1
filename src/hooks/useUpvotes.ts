import { useState, useEffect, useCallback } from 'react';
import { database } from '../lib/db';

export function useUpvotes(conversationId: string) {
  const [upvotes, setUpvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial upvote state
  const loadUpvoteState = useCallback(async () => {
    if (!database.isInitialized()) {
      console.warn('Database not initialized yet');
      return;
    }

    try {
      const [count, voted] = await Promise.all([
        database.upvoteService.getUpvoteCount(conversationId),
        database.upvoteService.hasUserUpvoted(conversationId)
      ]);
      
      setUpvotes(count);
      setHasUpvoted(voted);
      setError(null);
    } catch (error) {
      console.error('Failed to load upvote state:', error);
      setError('Failed to load upvotes');
    } finally {
      setIsLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    loadUpvoteState();
  }, [loadUpvoteState]);

  const handleUpvote = useCallback(async () => {
    if (hasUpvoted || isLoading || !database.isInitialized()) return;
    
    try {
      setIsLoading(true);
      setError(null);
      const success = await database.upvoteService.upvoteConversation(conversationId);
      
      if (success) {
        setUpvotes(prev => prev + 1);
        setHasUpvoted(true);
      }
    } catch (error) {
      console.error('Failed to upvote:', error);
      setError('Failed to upvote');
    } finally {
      setIsLoading(false);
    }
  }, [conversationId, hasUpvoted, isLoading]);

  return {
    upvotes,
    hasUpvoted,
    isLoading,
    error,
    handleUpvote,
    refreshUpvotes: loadUpvoteState
  };
}