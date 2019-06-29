/**
 * takes in put as `!┓ ₢�kkk?` and returns `0x0021 0x2513 0x0020 0x20a2 0xfffd 0x006b 0x006b 0x006b 0x003f `
 * @param {*} d
 */
export function convertStringToHEX(d, type = "1") {
  let f = "";
  d.split("").forEach((s, i) => {
    // type "1"
    // converts !┓ ₢�kkk? and returns 0x0021 0x2513 0x0020 0x20a2 0xfffd 0x006b 0x006b 0x006b 0x003f
    if (type === "1") {
      let hexCode = "000" + s.charCodeAt(0).toString(16);

      f = f + "0x" + hexCode.substring(hexCode.length - 4) + " ";
    } else {
      // type "2"
      // converts !┓ ₢�kkk? and returns 2125132020a2fffd6b6b6b3f

      let hexCode = s.charCodeAt(0).toString(16);

      f = f + hexCode.substring(hexCode.length - 4);
    }
  });
  return f;
}
// build output will uglify the above code so making it a string
export const convertohexCode = `
/**
 * takes in put as !┓ ₢�kkk? and returns 0x0021 0x2513 0x0020 0x20a2 0xfffd 0x006b 0x006b 0x006b 0x003f
 * @param {*} d
 */
export default function convertStringToHEX(d, type = "1") {
  let f = "";
  d.split("").forEach((s, i) => {
    // type "1"
    // converts !┓ ₢�kkk? and returns 0x0021 0x2513 0x0020 0x20a2 0xfffd 0x006b 0x006b 0x006b 0x003f
    if (type === "1") {
      let hexCode = "000" + s.charCodeAt(0).toString(16);
      f = f + "0x" + hexCode.substring(hexCode.length - 4) + " ";
    } else {
      // type "2"
      // converts !┓ ₢�kkk? and returns 2125132020a2fffd6b6b6b3f
      let hexCode = s.charCodeAt(0).toString(16);
      f = f + hexCode.substring(hexCode.length - 4);
    }
  });
  return f;
}
`;
