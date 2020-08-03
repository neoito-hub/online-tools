/**
 * Clear only the values of an object while keeping all the keys of the object
 *
 * @param {Object} obj
 * @returns {Object} Returns after clearing all the values of the object
 * @example
 *
 * deepCleanObject({ a: 'something', b: [{ id: '1001', type: 'Regular' }] })
 * // => { a: '', b: [{ id: '', type: ''}] }
 *
 * deepCleanObject("something")
 * // => "something"
 *
 * deepCleanObject(1)
 * // => 1
 */
export function deepCleanObject(obj) {
  obj && typeof obj === 'object' &&  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => deepCleanObject(item))
    } else if (typeof obj[key] !== 'function' && obj[key] instanceof Object) {
      deepCleanObject(obj[key])
    } else {
      obj[key] = ''
    }
  })

  return obj
}

// build output will uglify the above code so making it a string
export const deepCleanObjectCode = `
/**
 * Clear only the values of an object while keeping all the keys of the object
 *
 * @param {Object} obj
 * @returns {Object} Returns after clearing all the values of the object
 * @example
 *
 * deepCleanObject({ a: 'something', b: [{ id: '1001', type: 'Regular' }] })
 * // => { a: '', b: [{ id: '', type: ''}] }
 *
 * deepCleanObject("something")
 * // => "something"
 *
 * deepCleanObject(1)
 * // => 1
 */
export function deepCleanObject(obj) {
  obj && typeof obj === 'object' &&  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => deepCleanObject(item))
    } else if (typeof obj[key] !== 'function' && obj[key] instanceof Object) {
      deepCleanObject(obj[key])
    } else {
      obj[key] = ''
    }
  })

  return obj
}
`;
