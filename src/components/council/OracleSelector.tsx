import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOracleContext } from '../../contexts/OracleContext';

export function OracleSelector() {
  const { oracles, currentOracle, setCurrentOracle } = useOracleContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex-shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-purple-900/10 border border-purple-500/20 hover:bg-purple-900/20 transition-colors"
      >
        <span className="text-xs text-white/70">Change Oracle</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 py-2 bg-black/90 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-xl z-50"
          >
            {oracles.map((oracle) => (
              <button
                key={oracle.type}
                onClick={() => {
                  setCurrentOracle(oracle);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-purple-900/20 transition-colors group"
              >
                <p className="text-sm text-white/90 group-hover:text-white transition-colors">
                  {oracle.title}
                </p>
                <p className="text-xs text-white/50">
                  {oracle.description}
                </p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}