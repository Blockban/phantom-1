import { useOracleContext } from '../../contexts/OracleContext';
import type { Oracle, OracleType } from '../../types/oracle';

export function useOracle() {
  const context = useOracleContext();
  const { currentOracle, setCurrentOracle, oracles } = context;

  const getOracleByType = (type: OracleType): Oracle | undefined => {
    return oracles.find(oracle => oracle.type === type);
  };

  const getOracleCount = (): number => {
    return oracles.length;
  };

  const isValidOracleType = (type: string): type is OracleType => {
    return oracles.some(oracle => oracle.type === type);
  };

  return {
    currentOracle,
    oracles,
    setCurrentOracle,
    getOracleByType,
    getOracleCount,
    isValidOracleType
  };
}