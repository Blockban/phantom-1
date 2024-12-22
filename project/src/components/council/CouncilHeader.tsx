import React from 'react';
import { motion } from 'framer-motion';
import { useOracleContext } from '../../contexts/OracleContext';
import { OracleSelector } from './OracleSelector';
import { Navigation } from '../layout/Navigation';
import { OracleProfile } from './OracleProfile';
import { AgentCount } from './AgentCount';

export function CouncilHeader() {
  return (
    <>
      <Navigation />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-4 mb-6"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <OracleProfile />
              <div className="h-8 w-[1px] bg-purple-500/20" />
              <AgentCount />
            </div>
            <OracleSelector />
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-4" />
        </div>
      </motion.div>
    </>
  );
}