import { useEffect, useState } from 'react';

export function useGuard() {
  const [loading, setLoading] = useState(false);
  const [error] = useState();
  const controller = new AbortController();

  useEffect(() => {
    console.log('Fetching Group');
    setLoading(true);

    return () => {
      controller.abort();
    };
  }, []);

  return { loading, error };
}
