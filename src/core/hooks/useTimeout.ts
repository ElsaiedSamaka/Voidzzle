import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
// usage example
// import { useState } from "react";
// import useTimeout from "./useTimeout";

// export default function TimeoutComponent() {
//   const [count, setCount] = useState(10);
//   const { clear, reset } = useTimeout(() => setCount(0), 1000);

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//       <button onClick={clear}>Clear Timeout</button>
//       <button onClick={reset}>Reset Timeout</button>
//     </div>
//   );
// }
