import { motion } from 'framer-motion';
import { useOracleContext } from '../../../../contexts/OracleContext';
import { OracleImage } from '../../../ui/OracleImage';

export function OracleAvatar() {
  const { currentOracle } = useOracleContext();

  return (
    <motion.div 
      className="relative w-8 h-8 flex-shrink-0"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg blur-sm" />
      <div className="relative rounded-lg overflow-hidden border border-purple-500/20">
        <OracleImage
          type={currentOracle.type}
          alt={currentOracle.title}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
}