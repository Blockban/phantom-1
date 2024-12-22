import { motion } from 'framer-motion';

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {/* X (Twitter) */}
      <motion.div className="relative group">
        {/* Portal hover effect */}
        <div className="absolute inset-0 -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-xl" />
        </div>

        {/* Portal lines */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-full">
            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-[1px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
          </div>
        </div>

        <motion.a
          href="https://twitter.com/mystic_council"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative block w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
        >
          <img
            src="/assets/x-social.png"
            alt="X (Twitter)"
            className="w-full h-full"
          />
        </motion.a>
      </motion.div>

      {/* Solscan */}
      <motion.div className="relative group">
        {/* Portal hover effect */}
        <div className="absolute inset-0 -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-xl" />
        </div>

        {/* Portal lines */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-full">
            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-[1px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
              </div>
            </div>
          </div>
        </div>

        <motion.a
          href="https://solscan.io"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative block w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
        >
          <img
            src="/assets/solscan-logo.png"
            alt="Solscan"
            className="w-full h-full"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}