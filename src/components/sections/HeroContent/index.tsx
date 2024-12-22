import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
        className="relative z-[60]"
      >
        <motion.button
          onClick={() => navigate('/council')}
          className="relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="flex items-center gap-4 text-white/90 tracking-[0.3em] text-sm font-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-purple-400/50"
            >
              ᚛
            </motion.span>
            ENTER THE COUNCIL
            <motion.span
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-purple-400/50"
            >
              ᚜
            </motion.span>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}