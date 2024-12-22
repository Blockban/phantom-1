import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { oracleImages } from '../../config/oracles';
import type { OracleType } from '../../types/oracle';

interface OracleImageProps {
  type: OracleType;
  alt: string;
  className?: string;
}

export function OracleImage({ type, alt, className = '' }: OracleImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <motion.div 
        className={`flex items-center justify-center bg-purple-900/20 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Brain className="w-1/2 h-1/2 text-purple-300/50" />
      </motion.div>
    );
  }

  return (
    <img
      src={oracleImages[type]}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}