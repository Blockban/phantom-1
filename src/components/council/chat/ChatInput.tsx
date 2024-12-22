import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { useOracleContext } from '../../../contexts/OracleContext';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const { currentOracle } = useOracleContext();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSend(input.trim());
    setInput('');
  }, [input, isLoading, onSend]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  }, [handleSubmit]);

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="relative mt-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative flex items-center gap-2 p-4 bg-black/40 border-t border-purple-500/20 backdrop-blur-sm">
        <div className="hidden sm:flex w-8 h-8 rounded-full bg-purple-900/20 items-center justify-center">
          <Sparkles className="w-4 h-4 text-purple-400" />
        </div>

        <div className="relative flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask ${currentOracle.title}...`}
            className="w-full px-4 py-2 bg-white/5 rounded-lg text-white/90 placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-purple-500/50 text-sm resize-none"
            disabled={isLoading}
            rows={1}
            style={{ minHeight: '40px', maxHeight: '120px' }}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isLoading || !input.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-purple-500/10 text-purple-400 hover:text-purple-300 disabled:opacity-50 disabled:hover:text-purple-400 transition-colors"
        >
          <Send size={18} />
        </motion.button>
      </div>
    </motion.form>
  );
}