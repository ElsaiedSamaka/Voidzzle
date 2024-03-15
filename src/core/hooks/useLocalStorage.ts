import { useCallback, useState, useEffect } from 'react';

/**
 * Returns a custom hook that allows storing and retrieving data from local storage.
 * @param {string} key - The key used to store the data in local storage.
 * @param {any} defaultValue - The default value to use if no value is found in local storage.
 * @returns {Function} - A function that can be used as a hook to store and retrieve data from local storage.
 */
export function useLocalStorage(key, defaultValue) {
  /**
   * Retrieves the value from local storage using the provided key.
   * @returns {any} - The value retrieved from local storage, or the default value if no value is found.
   */
  const getValue = () => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  /**
   * Stores the provided value in local storage using the provided key.
   * @param {any} value - The value to store in local storage.
   */
  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [getValue, setValue];
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
// usage example
// import { useSessionStorage, useLocalStorage } from "./useStorage";

// export default function StorageComponent() {
//   const [name, setName, removeName] = useSessionStorage("name", "Kyle");
//   const [age, setAge, removeAge] = useLocalStorage("age", 26);

//   return (
//     <div>
//       <div>
//         {name} - {age}
//       </div>
//       <button onClick={() => setName("John")}>Set Name</button>
//       <button onClick={() => setAge(40)}>Set Age</button>
//       <button onClick={removeName}>Remove Name</button>
//       <button onClick={removeAge}>Remove Age</button>
//     </div>
//   );
// }
