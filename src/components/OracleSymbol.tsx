import React from 'react';
import { oracleIcons, oracleThemes } from '../config/oracles';
import type { OracleType } from '../types/oracle';

interface OracleSymbolProps {
  type: OracleType;
  className?: string;
}

export function OracleSymbol({ type, className = '' }: OracleSymbolProps) {
  const Icon = oracleIcons[type];
  const theme = oracleThemes[type];
  
  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} 
          blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500`} 
      />
      <div className="relative bg-black/50 p-6 rounded-full backdrop-blur-sm border border-white/10">
        <Icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 text-center">
        <h3 className="text-lg font-semibold text-white">{theme.title}</h3>
        <p className="text-sm text-gray-300">{theme.description}</p>
      </div>
    </div>
  );
}