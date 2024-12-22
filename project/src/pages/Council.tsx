import React from 'react';
import { CouncilHeader } from '../components/council/CouncilHeader';
import { ChatInterface } from '../components/council/ChatInterface';
import { CosmicBackground } from '../components/effects/CosmicBackground';
import { CosmicParticles } from '../components/effects/CosmicParticles';

export function Council() {
  return (
    <div className="min-h-screen bg-black">
      <CosmicBackground />
      <CosmicParticles show={true} />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <CouncilHeader />
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}