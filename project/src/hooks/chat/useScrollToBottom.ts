import { useEffect, RefObject } from 'react';

export function useScrollToBottom(
  ref: RefObject<HTMLElement>,
  dependencies: any[]
) {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, dependencies);
}