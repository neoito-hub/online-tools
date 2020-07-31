/**
 *
 * @param {Object} obj
 */
export function deepCleanObject(obj) {
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      // If value is an array, empty the array
      obj[key] = [];
    } else if (obj[key] instanceof Object) {
      // If value is an Object, call the function recursively
      deepCleanObject(obj[key]);
    } else {
      obj[key] = "";
    }
  });
  return obj;
}

// build output will uglify the above code so making it a string
export const deepCleanObjectCode = `
/**
 *
 * @param {Object} obj
 */
function deepCleanObject(obj) {
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      // If value is an array, empty the array
      obj[key] = [];
    } else if (obj[key] instanceof Object) {
      // If value is an Object, call the function recursively
      deepCleanObject(obj[key]);
    } else {
      obj[key] = "";
    }
  });
  return obj;
}
`;
