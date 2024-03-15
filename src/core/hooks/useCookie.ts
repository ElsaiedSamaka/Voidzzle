import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

// This function is a custom hook that manages a cookie value.
// It returns the current cookie value, a function to update the cookie value,
// and a function to delete the cookie.

/**
 * Custom hook to manage a cookie value.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} defaultValue - The default value to set if the cookie does not exist.
 * @returns {Array} - An array containing the current cookie value, a function to update the cookie value, and a function to delete the cookie.
 */
export default function useCookie(name, defaultValue) {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  /**
   * Function to update the cookie value.
   *
   * @param {string} newValue - The new value to set for the cookie.
   * @param {Object} options - Optional options object for setting the cookie.
   */
  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name],
  );

  /**
   * Function to delete the cookie.
   */
  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
// usage example
// import useCookie from "./useCookie"

// export default function CookieComponent() {
//   const [value, update, remove] = useCookie("name", "John")

//   return (
//     <>
//       <div>{value}</div>
//       <button onClick={() => update("Sally")}>Change Name To Sally</button>
//       <button onClick={remove}>Delete Name</button>
//     </>
//   )
// }
