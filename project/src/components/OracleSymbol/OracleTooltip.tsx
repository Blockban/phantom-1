import React from 'react';
import { oracleThemes } from '../../config/oracles';
import type { OracleType } from '../../types/oracle';

interface OracleTooltipProps {
  type: OracleType;
}

export function OracleTooltip({ type }: OracleTooltipProps) {
  const theme = oracleThemes[type];
  
  return (
    <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 w-48 text-center translate-y-2 group-hover:translate-y-0">
      <div className="glass-panel rounded-lg p-3 transform">
        <h3 className="text-lg font-semibold text-white/90">{theme.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{theme.description}</p>
      </div>
    </div>
  );
}