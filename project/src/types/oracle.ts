export type OracleType = 'observ3r' | 'archive' | 'nexus' | 'signal' | 'echo';

export interface OracleTheme {
  gradient: string;
  title: string;
  description: string;
  background: string;
}

export interface Oracle {
  type: OracleType;
  title: string;
  description: string;
  theme: OracleTheme;
  personality: string;
  expertise: string[];
  quote: string;
}