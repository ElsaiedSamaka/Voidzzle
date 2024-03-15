import { useCallback, useRef, useState } from 'react';

/**
 * useStateWithHistory is a custom hook that allows you to manage a state value
 * with a history of previous values. It also provides functions to navigate
 * through the history.
 *
 * @param defaultValue - The initial value of the state.
 * @param capacity - The maximum number of history items to store (default: 10).
 * @returns An array containing the current value, a function to set the value,
 *    and an object with the history, current pointer, and navigation functions.
 */
export default function useStateWithHistory(
  defaultValue,
  { capacity = 10 } = {},
) {
  // Set up the initial state value
  const [value, setValue] = useState(defaultValue);

  // Create a reference to store the history of values
  const historyRef = useRef([value]);

  // Create a reference to store the current position in the history
  const pointerRef = useRef(0);

  // Function to set the value and update the history
  const set = useCallback(
    (v) => {
      // Resolve the value if it's a function
      const resolvedValue = typeof v === 'function' ? v(value) : v;

      // Check if the new value is different from the current history value
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        // Remove any future history items if the pointer is not at the end
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }

        // Add the new value to the history
        historyRef.current.push(resolvedValue);

        // Remove the oldest history item if the capacity is exceeded
        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }

        // Update the pointer to the current position in the history
        pointerRef.current = historyRef.current.length - 1;
      }

      // Set the new value
      setValue(resolvedValue);
    },
    [capacity, value],
  );

  // Function to navigate back in the history
  const back = useCallback(() => {
    // Check if the pointer is already at the beginning of the history
    if (pointerRef.current <= 0) return;

    // Decrement the pointer
    pointerRef.current--;

    // Set the value to the previous history item
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  // Function to navigate forward in the history
  const forward = useCallback(() => {
    // Check if the pointer is already at the end of the history
    if (pointerRef.current >= historyRef.current.length - 1) return;

    // Increment the pointer
    pointerRef.current++;

    // Set the value to the next history item
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  // Function to navigate to a specific position in the history
  const go = useCallback((index) => {
    // Check if the index is within the bounds of the history
    if (index < 0 || index > historyRef.current.length - 1) return;

    // Set the pointer to the specified index
    pointerRef.current = index;

    // Set the value to the corresponding history item
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  // Return the current value, set function, and navigation object
  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}
// usage example
// import { useState } from "react"
// import useStateWithHistory from "./useStateWithHistory"

// export default function StateWithHistoryComponent() {
//   const [count, setCount, { history, pointer, back, forward, go }] =
//     useStateWithHistory(1)
//   const [name, setName] = useState("Kyle")

//   return (
//     <div>
//       <div>{count}</div>
//       <div>{history.join(", ")}</div>
//       <div>Pointer - {pointer}</div>
//       <div>{name}</div>
//       <button onClick={() => setCount(currentCount => currentCount * 2)}>
//         Double
//       </button>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>
//         Increment
//       </button>
//       <button onClick={back}>Back</button>
//       <button onClick={forward}>Forward</button>
//       <button onClick={() => go(2)}>Go To Index 2</button>
//       <button onClick={() => setName("John")}>Change Name</button>
//     </div>
//   )
// }
