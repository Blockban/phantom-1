import { LogoContainer } from './LogoContainer';
import { LogoGlow } from './LogoGlow';
import { LogoImage } from './LogoImage';

interface HeroLogoProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export function HeroLogo({ isLoading, onLoadingComplete }: HeroLogoProps) {
  return (
    <LogoContainer onComplete={onLoadingComplete}>
      <div className="w-full h-full relative">
        <LogoGlow />
        <LogoImage />
      </div>
    </LogoContainer>
  );
}