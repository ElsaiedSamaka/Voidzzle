import { useEffect, useRef } from 'react';

/**
 * Custom hook to track the number of times a component renders.
 * @returns The count of component renders.
 */
export default function useRenderCount() {
  // Initialize a ref to keep track of the render count
  const count = useRef(1);

  // Increment the count on each component render
  useEffect(() => count.current++ as number);

  // Return the current render count
  return count.current;
}
// usage example
// import useRenderCount from "./useRenderCount";
// import useToggle from "../1-useToggle/useToggle";

// export default function RenderCountComponent() {
//   const [boolean, toggle] = useToggle(false);

//   const renderCount = useRenderCount();

//   return (
//     <>
//       <div>{boolean.toString()}</div>
//       <div>{renderCount}</div>
//       <button onClick={toggle}>Toggle</button>
//     </>
//   );
// }
