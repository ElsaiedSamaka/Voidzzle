import { useRef } from 'react';

/**
 * Custom hook that returns the previous value of a given value.
 * @param value - The value whose previous value needs to be tracked.
 * @returns The previous value of the given value.
 */
export default function usePrevious(value) {
  const currentRef = useRef(value); // Create a ref to store the current value
  const previousRef = useRef(); // Create a ref to store the previous value

  // Update the previousRef if the value has changed
  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current; // Return the previous value
}
// usage example
// import { useState } from "react"
// import usePrevious from "./usePrevious"

// export default function PreviousComponent() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState("Kyle")
//   const previousCount = usePrevious(count)

//   return (
//     <div>
//       <div>
//         {count} - {previousCount}
//       </div>
//       <div>{name}</div>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>
//         Increment
//       </button>
//       <button onClick={() => setName("John")}>Change Name</button>
//     </div>
//   )
// }
