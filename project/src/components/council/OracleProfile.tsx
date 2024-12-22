import React from 'react';
import { useOracle } from '../../hooks/oracle';
import { useOracleTheme } from '../../hooks/oracle';
import { OracleModal } from './OracleModal';
import { Button } from '../ui/Button';
import { OracleImage } from '../ui/OracleImage';

export function OracleProfile() {
  const { currentOracle } = useOracle();
  const { classes } = useOracleTheme();
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex items-center gap-3 min-w-0">
      <div className="relative w-9 h-9 flex-shrink-0">
        <div className={`absolute inset-0 ${classes.gradient} blur-lg opacity-50`} />
        <div className="relative h-full rounded-lg overflow-hidden">
          <OracleImage
            type={currentOracle.type}
            alt={currentOracle.title}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-light tracking-wider text-white/90 truncate">
            {currentOracle.title}
          </h2>
          <div className="relative z-50 flex-shrink-0">
            <Button
              onClick={() => setShowModal(true)}
              className="!px-2 !py-0.5 text-xs relative z-50"
            >
              Learn more
            </Button>
          </div>
        </div>
        <p className="text-xs text-purple-300/60 truncate">
          {currentOracle.description}
        </p>
      </div>

      <OracleModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        oracle={currentOracle}
      />
    </div>
  );
}