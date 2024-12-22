import React from 'react';
import { oracleIcons, oracleThemes } from '../../config/oracles';
import type { OracleType } from '../../types/oracle';

interface OracleIconProps {
  type: OracleType;
}

export function OracleIcon({ type }: OracleIconProps) {
  const Icon = oracleIcons[type];
  const theme = oracleThemes[type];
  
  return (
    <>
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} 
          blur-xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`} 
      />
      <div className="relative glass-panel p-8 rounded-full group-hover:scale-105 transition-transform duration-700">
        <Icon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
      </div>
    </>
  );
}