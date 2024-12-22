import { LogoContainer } from './LogoContainer';
import { LogoGlow } from './LogoGlow';
import { LogoImage } from './LogoImage';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'hero';
}

export function Logo({ className = '', variant = 'hero' }: LogoProps) {
  return (
    <LogoContainer className={className}>
      <LogoGlow />
      <LogoImage variant={variant} />
    </LogoContainer>
  );
}