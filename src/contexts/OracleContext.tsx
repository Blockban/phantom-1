import React, { createContext, useContext, useState } from 'react';
import type { Oracle } from '../types/oracle';
import { oracles } from '../config/oracles';

interface OracleContextType {
  oracles: Oracle[];
  currentOracle: Oracle;
  setCurrentOracle: (oracle: Oracle) => void;
}

const OracleContext = createContext<OracleContextType | undefined>(undefined);

export function OracleProvider({ children }: { children: React.ReactNode }) {
  const [currentOracle, setCurrentOracle] = useState<Oracle>(oracles[0]);

  const value = {
    oracles,
    currentOracle,
    setCurrentOracle,
  };

  return (
    <OracleContext.Provider value={value}>
      {children}
    </OracleContext.Provider>
  );
}

export function useOracleContext() {
  const context = useContext(OracleContext);
  if (!context) {
    throw new Error('useOracleContext must be used within an OracleProvider');
  }
  return context;
}