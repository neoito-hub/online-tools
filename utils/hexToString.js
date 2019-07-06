/**
 *
 * @param {*} string
 * @param {*} separator
 */
export function convertHexToString(str, separator) {
  // converts  0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f  and returns !┓ ₢�kkk?
  let j;
  let hexes;
  if (separator) {
    hexes = str.split(separator);
  } else {
    hexes = str.match(/.{1,4}/g) || [];
  }
  let parsedOutput = "";
  for (j = 0; j < hexes.length; j++) {
    parsedOutput += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return parsedOutput;
}
// build output will uglify the above code so making it a string
export const convertoStringCode = `
/**
 *
 * @param {*} string
 * @param {*} separator
 */
export function convertHexToString(str, separator) {
  // converts  0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f  and returns !┓ ₢�kkk?
  let j;
  let hexes;
  if (separator) {
    hexes = str.split(separator);
  } else {
    hexes = str.match(/.{1,4}/g) || [];
  }
  let parsedOutput = "";
  for (j = 0; j < hexes.length; j++) {
    parsedOutput += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return parsedOutput;
}
`;
