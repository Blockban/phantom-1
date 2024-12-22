import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MysticButton } from '../ui/MysticButton';

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-8 -mt-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 text-xs tracking-[0.2em] font-light max-w-lg text-center"
      >
        Traverse the boundaries between digital realms and ancient wisdom
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Energy field */}
        <div className="absolute inset-0 -m-8 bg-gradient-to-r from-purple-500/5 via-fuchsia-500/5 to-purple-500/5 blur-xl rounded-full" />
        
        {/* Button */}
        <MysticButton 
          onClick={() => navigate('/council')}
          className="relative"
        >
          Enter the Council
        </MysticButton>
      </motion.div>
    </div>
  );
}