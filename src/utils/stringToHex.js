/**
 *
 * @param {*} d
 * @param {*} separator
 */
export function convertStringToHEX(d, separator) {
  let f = "";
  d.split("").forEach((s, i) => {
    // type "1"
    // converts !┓ ₢�kkk? and returns 0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f

    let hexCode = "000" + s.charCodeAt(0).toString(16);

    f = f + separator + hexCode.slice(-4);
  });
  return f;
}
// build output will uglify the above code so making it a string
export const convertohexCode = `
/**
 *
 * @param {*} d
 * @param {*} separator
 */
export function convertStringToHEX(d, separator) {
  let f = "";
  d.split("").forEach((s, i) => {
    // type "1"
    // converts !┓ ₢�kkk? and returns 0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f

    let hexCode = "000" + s.charCodeAt(0).toString(16);

    f = f + separator + hexCode.slice(-4);
  });
  return f;
}
`;
