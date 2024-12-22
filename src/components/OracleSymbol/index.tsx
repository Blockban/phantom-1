import React from 'react';
import { oracleIcons, oracleThemes } from '../../config/oracles';
import type { OracleType } from '../../types/oracle';

interface OracleSymbolProps {
  type: OracleType;
  className?: string;
}

export function OracleSymbol({ type, className = '' }: OracleSymbolProps) {
  const Icon = oracleIcons[type];
  const theme = oracleThemes[type];
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} 
          blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} 
      />
      <div className="relative h-full w-full bg-black/50 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
        <Icon className="w-4/5 h-4/5 text-white group-hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );
}