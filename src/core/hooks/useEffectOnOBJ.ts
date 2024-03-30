import { useEffect, useRef } from 'react';

function useEffectOnOBJ(effect: any, object: any) {
  const prevObjectRef = useRef();

  useEffect(() => {
    prevObjectRef.current = object;
  }, [object]);

  useEffect(() => {
    const prevObject = prevObjectRef.current;

    // Only invoke the effect if the object's values have changed
    if (
      !prevObject ||
      Object.keys(prevObject).length !== Object.keys(object).length ||
      Object.keys(object).some((key) => object[key] !== prevObject[key])
    ) {
      effect();
    }
  }, [effect, object]);
}

export default useEffectOnOBJ;
