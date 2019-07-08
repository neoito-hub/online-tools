webpackHotUpdate("static/development/pages/string-to-morse.js",{

/***/ "./utils/stringToMorse.js":
/*!********************************!*\
  !*** ./utils/stringToMorse.js ***!
  \********************************/
/*! exports provided: StringToMorse, StringToMorseCode, MORSE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToMorse", function() { return StringToMorse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToMorseCode", function() { return StringToMorseCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORSE_MAP", function() { return MORSE_MAP; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");


/**
 *
 * @param {*} string
 */
function StringToMorse(str) {
  var output = "";

  Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(str).forEach(function (c) {
    output = output + " " + (MORSE_MAP[c.toUpperCase()] || "");
  });

  return output;
} // build output will uglify the above code so making it a string

var StringToMorseCode = "\n/**\n *\n * @param {*} string\n */\nfunction StringToMorse(str) {\n  let output = \"\";\n  [...str].forEach(c => {\n    output = output + \" \" + (MORSE_MAP[c.toUpperCase()] || \"\");\n  });\n  return output;\n}\n// this list of international morse codes\nconst MORSE_MAP = {A: \".-\",B: \"-...\",C: \"-.-.\",D: \"-..\",E: \".\",F: \"..-.\",G: \"--.\",H: \"....\",I: \"..\",J: \".---\",K: \"-.-\",L: \".-..\",M: \"--\",N: \"-.\",O: \"---\",P: \".--.\",Q: \"--.-\",R: \".-.\",S: \"...\",T: \"-\",U: \"..-\",V: \"...-\",W: \".--\",X: \"-..-\",Y: \"-.--\",Z: \"--..\",1: \".----\",2: \"..---\",3: \"...--\",4: \"....-\",5: \".....\",6: \"-....\",7: \"--...\",8: \"---..\",9: \"----.\",0: \"-----\",\".\": \".-.-.-\",\",\": \"--..--\",\":\": \"---...\",\"?\": \"..--..\",\"'\": \".----.\",\"-\": \"-....-\",\"/\": \"-..-.\",\"(\": \"-.--.\",\")\": \"-.--.-\",'\"': \".-..-.\",\"@\": \".--.-.\",\"=\": \"-...-\",\"&\": \".-...\",\"+\": \".-.-.\",\"!\": \"-.-.--\"};\n";
var MORSE_MAP = {
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

/***/ })

})
//# sourceMappingURL=string-to-morse.js.b7d32d0cb72dff9b3327.hot-update.js.map