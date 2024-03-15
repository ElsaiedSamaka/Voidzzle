import { useState, useEffect } from 'react';

/**
 * Custom hook that retrieves the current geolocation.
 *
 * @param options - The options for retrieving the geolocation.
 * @returns An object containing the loading state, error state, and geolocation data.
 */
export default function useGeolocation(options) {
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(); // State for error state
  const [data, setData] = useState({}); // State for geolocation data

  useEffect(() => {
    // Success handler for retrieving geolocation
    const successHandler = (e) => {
      setLoading(false); // Set loading state to false
      setError(null); // Clear error state
      setData(e.coords); // Update geolocation data
    };

    // Error handler for retrieving geolocation
    const errorHandler = (e) => {
      setError(e); // Set error state
      setLoading(false); // Set loading state to false
    };

    // Retrieve current geolocation
    navigator.geolocation.getCurrentPosition(
      successHandler, // Success handler
      errorHandler, // Error handler
      options, // Geolocation options
    );

    // Watch for changes in geolocation
    const id = navigator.geolocation.watchPosition(
      successHandler, // Success handler
      errorHandler, // Error handler
      options, // Geolocation options
    );

    // Clear geolocation watch when component unmounts
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
// usage example
// import useGeolocation from "./useGeolocation";

// export default function GeolocationComponent() {
//   const {
//     loading,
//     error,
//     data: { latitude, longitude },
//   } = useGeolocation();

//   return (
//     <>
//       <div>Loading: {loading.toString()}</div>
//       <div>Error: {error?.message}</div>
//       <div>
//         {latitude} x {longitude}
//       </div>
//     </>
//   );
// }
