import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingEye } from './LoadingEye';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={onLoadingComplete}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <LoadingEye />
        </motion.div>
      )}
    </AnimatePresence>
  );
}