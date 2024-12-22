interface LogoContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LogoContainer({ children, className = '' }: LogoContainerProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {children}
    </div>
  );
}