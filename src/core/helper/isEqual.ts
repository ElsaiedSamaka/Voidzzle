function isEqual(value1, value2) {
  // Check if the values are strictly equal
  if (value1 === value2) {
    return true;
  }

  // Check if the values are objects
  if (typeof value1 === 'object' && typeof value2 === 'object') {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    // Check if the objects have the same number of keys
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Check if all the keys and their corresponding values are equal
    for (const key of keys1) {
      if (!isEqual(value1[key], value2[key])) {
        return false;
      }
    }

    return true;
  }

  // Values are not equal
  return false;
}
export default isEqual;
