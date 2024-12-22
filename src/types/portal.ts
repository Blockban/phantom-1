export type PortalState = 'closed' | 'opening' | 'open' | 'active';

export type PortalSection = {
  id: string;
  title: string;
  description: string;
  state: PortalState;
};