/**
 *
 * @param {*} string
 */
export function StringToMorse(str) {
  let output = "";
  [...str].forEach(c => {
    output = output + " " + (MORSE_MAP[c.toUpperCase()] || "");
  });
  return output;
}
// build output will uglify the above code so making it a string
export const StringToMorseCode = `
/**
 *
 * @param {*} string
 */
function StringToMorse(str) {
  let output = "";
  [...str].forEach(c => {
    output = output + " " + (MORSE_MAP[c.toUpperCase()] || "");
  });
  return output;
}
// this list of international morse codes
const MORSE_MAP = {A: ".-",B: "-...",C: "-.-.",D: "-..",E: ".",F: "..-.",G: "--.",H: "....",I: "..",J: ".---",K: "-.-",L: ".-..",M: "--",N: "-.",O: "---",P: ".--.",Q: "--.-",R: ".-.",S: "...",T: "-",U: "..-",V: "...-",W: ".--",X: "-..-",Y: "-.--",Z: "--..",1: ".----",2: "..---",3: "...--",4: "....-",5: ".....",6: "-....",7: "--...",8: "---..",9: "----.",0: "-----",".": ".-.-.-",",": "--..--",":": "---...","?": "..--..","'": ".----.","-": "-....-","/": "-..-.","(": "-.--.",")": "-.--.-",'"': ".-..-.","@": ".--.-.","=": "-...-","&": ".-...","+": ".-.-.","!": "-.-.--"};
`;
export function IMC_LIST() {
  return Object.keys(MORSE_MAP).map(k => {
    return { title: k, value: MORSE_MAP[k] };
  });
}
export const MORSE_MAP = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  "?": "..--..",
  "'": ".----.",
  "-": "-....-",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  '"': ".-..-.",
  "@": ".--.-.",
  "=": "-...-",
  "&": ".-...",
  "+": ".-.-.",
  "!": "-.-.--"
};
