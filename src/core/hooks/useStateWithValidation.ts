import { useState, useCallback } from 'react';

/**
 * useStateWithValidation is a custom hook that provides state management with validation.
 *
 * @param {Function} validationFunc - The function used for validating the state value.
 * @param {*} initialValue - The initial value of the state.
 *
 * @returns {Array} - An array containing the state value, the onChange function, and a boolean indicating the validity of the state value.
 */
export default function useStateWithValidation(validationFunc, initialValue) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  /**
   * onChange is a callback function that handles the state value changes.
   *
   * @param {*} nextState - The next state value or a function that receives the current state and returns the next state.
   */
  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === 'function' ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [state, validationFunc],
  );

  return [state, onChange, isValid];
}
// usage example
// import useStateWithValidation from "./useStateWithValidation"

// export default function StateWithValidationComponent() {
//   const [username, setUsername, isValid] = useStateWithValidation(
//     name => name.length > 5,
//     ""
//   )

//   return (
//     <>
//       <div>Valid: {isValid.toString()}</div>
//       <input
//         type="text"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//     </>
//   )
// }
