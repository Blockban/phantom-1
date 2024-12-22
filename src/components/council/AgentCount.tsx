import { motion } from 'framer-motion';
import { useOracle } from '../../hooks/oracle';

export function AgentCount() {
  const { getOracleCount } = useOracle();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-1.5"
    >
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      <span className="text-xs text-white/70">
        {getOracleCount()} Active Agents
      </span>
    </motion.div>
  );
}