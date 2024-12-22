import { Navigation } from '../../components/layout/Navigation';
import { HeroContent } from '../../components/sections/HeroContent';
import { HeroLogo } from '../../components/sections/HeroLogo';
import { CosmicBackground } from '../../components/effects/CosmicBackground';
import { CosmicParticles } from '../../components/effects/CosmicParticles';
import { CosmicExplosion } from '../../components/effects/CosmicExplosion';
import { RippleEffect } from '../../components/effects/RippleEffect';
import { ShockwaveEffect } from '../../components/effects/ShockwaveEffect';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingState } from '../../hooks/useLoadingState';
import { PageTransition } from '../../components/transitions/PageTransition';

export function Hero() {
  const { 
    isLoading, 
    showExplosion, 
    showContent, 
    showParticles,
    handleLoadingComplete,
    handleExplosionComplete 
  } = useLoadingState();

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden bg-black">
        {/* Background effects */}
        <CosmicBackground />
        <AnimatePresence>
          {showParticles && <CosmicParticles show={showParticles} />}
        </AnimatePresence>

        {/* Ambient effects */}
        <RippleEffect />
        <ShockwaveEffect />

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
          <div className="flex flex-col items-center gap-8">
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
                  <HeroContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Explosion effect */}
        <AnimatePresence>
          {showExplosion && (
            <CosmicExplosion 
              show={true}
              onComplete={handleExplosionComplete}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}