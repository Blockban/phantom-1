import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../layout/Navigation';
import { HeroLogo } from './HeroLogo';
import { HeroContent } from './HeroContent';
import { CosmicBackground } from '../effects/CosmicBackground';
import { CosmicParticles } from '../effects/CosmicParticles';
import { CosmicExplosion } from '../effects/CosmicExplosion';

export function Hero() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showExplosion, setShowExplosion] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [showParticles, setShowParticles] = React.useState(false);

  const handleLoadingComplete = () => {
    setShowExplosion(true);
    setIsLoading(false);
  };

  const handleExplosionComplete = () => {
    setShowContent(true);
    setShowParticles(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background effects */}
      <CosmicBackground />
      <AnimatePresence>
        {showParticles && <CosmicParticles show={showParticles} />}
      </AnimatePresence>

      {/* Navigation */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div className="text-center max-w-3xl mx-auto px-4 flex flex-col items-center">
          <HeroLogo 
            isLoading={isLoading} 
            onLoadingComplete={handleLoadingComplete}
          />
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HeroContent showContent={showContent} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Explosion effect */}
      <AnimatePresence>
        {showExplosion && (
          <CosmicExplosion 
            show={showExplosion} 
            onComplete={handleExplosionComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}