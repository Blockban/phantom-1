import { useOracle } from './useOracle';
import type { OracleTheme } from '../../types/oracle';

export function useOracleTheme() {
  const { currentOracle } = useOracle();

  const getThemeClasses = (): { 
    gradient: string;
    background: string;
    border: string;
  } => {
    return {
      gradient: `bg-gradient-to-r ${currentOracle.theme.gradient}`,
      background: currentOracle.theme.background,
      border: 'border-purple-500/20'
    };
  };

  const getTheme = (): OracleTheme => {
    return currentOracle.theme;
  };

  return {
    theme: getTheme(),
    classes: getThemeClasses()
  };
}