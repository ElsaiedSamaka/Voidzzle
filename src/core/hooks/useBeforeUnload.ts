import { useEffect } from 'react';

export function useBeforeUnload(
  callback: (e: BeforeUnloadEvent) => void,
  deps?: React.DependencyList | undefined,
) {
  useEffect(() => {
    window.addEventListener('beforeunload', callback);
    return () => {
      window.removeEventListener('beforeunload', callback);
    };
  }, [deps, callback]);
}
