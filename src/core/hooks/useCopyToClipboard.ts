import { useState } from 'react';
import copy from 'copy-to-clipboard';

/**
 * Custom hook to copy text to clipboard.
 *
 * @returns {Array} An array containing the copyToClipboard function and the copy status.
 */
export default function useCopyToClipboard() {
  const [value, setValue] = useState(); // State to store the text to be copied
  const [success, setSuccess] = useState(); // State to store the copy status

  /**
   * Copy the given text to clipboard.
   *
   * @param {string} text - The text to be copied.
   * @param {object} options - Optional options for copying.
   */
  const copyToClipboard = (text, options) => {
    const result = copy(text, options); // Call the copy function
    if (result) setValue(text); // Update the value state if copy is successful
    setSuccess(result); // Update the success state with the copy result
  };

  return [copyToClipboard, { value, success }]; // Return the copyToClipboard function and the copy status
}
// usage example
// import useCopyToClipboard from "./useCopyToClipboard"

// export default function CopyToClipboardComponent() {
//   const [copyToClipboard, { success }] = useCopyToClipboard()

//   return (
//     <>
//       <button onClick={() => copyToClipboard("This was copied")}>
//         {success ? "Copied" : "Copy Text"}
//       </button>
//       <input type="text" />
//     </>
//   )
// }
