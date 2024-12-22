import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function HeroButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -m-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-fuchsia-500/5 to-purple-500/5 blur-2xl rounded-full" />
      </div>

      {/* Button */}
      <motion.button
        onClick={() => navigate('/council')}
        className="relative group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10" />
            <div className="absolute inset-0 bg-purple-500/5 blur-xl" />
          </div>
        </div>

        {/* Button content */}
        <div className="relative px-16 py-5 border border-purple-500/20">
          {/* Corner accents */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div 
              className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-purple-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-[1px] h-8 bg-gradient-to-t from-purple-500 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-8 h-[1px] bg-gradient-to-l from-purple-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-[1px] h-8 bg-gradient-to-t from-purple-500 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
          </div>

          {/* Text content */}
          <div className="relative flex items-center gap-4 text-white/90 tracking-[0.3em] text-sm font-light">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="absolute -left-2 text-purple-400/50"
            >
              ᚛
            </motion.span>
            ENTER THE COUNCIL
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="absolute -right-2 text-purple-400/50"
            >
              ᚜
            </motion.span>
          </div>

          {/* Hover effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-fuchsia-500/5 to-purple-500/5 animate-pulse" />
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}