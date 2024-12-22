import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';
import { database } from '../../lib/db';
import { useUpvotes } from '../../hooks/useUpvotes';

interface UpvoteButtonProps {
  conversationId: string;
}

export function UpvoteButton({ conversationId }: UpvoteButtonProps) {
  const { 
    upvotes, 
    hasUpvoted, 
    isLoading, 
    error, 
    handleUpvote 
  } = useUpvotes(conversationId);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleUpvote}
      disabled={hasUpvoted || isLoading}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full
        transition-colors duration-200
        ${error ? 'bg-red-500/20 text-red-300' :
          hasUpvoted ? 'bg-purple-500/20 text-purple-300' :
          'bg-purple-500/10 text-purple-300/60 hover:text-purple-300'
        }
        disabled:cursor-not-allowed
      `}
      title={error || undefined}
    >
      <ThumbsUp 
        size={14} 
        className={hasUpvoted ? 'fill-current' : ''} 
      />
      <span className="text-sm">{upvotes}</span>
    </motion.button>
  );
}