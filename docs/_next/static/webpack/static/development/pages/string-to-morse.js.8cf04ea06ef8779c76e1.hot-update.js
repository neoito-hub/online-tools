webpackHotUpdate("static/development/pages/string-to-morse.js",{

/***/ "./utils/stringToMorse.js":
/*!********************************!*\
  !*** ./utils/stringToMorse.js ***!
  \********************************/
/*! exports provided: StringToMorse, StringToMorseCode, IMC_LIST, MORSE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToMorse", function() { return StringToMorse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToMorseCode", function() { return StringToMorseCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMC_LIST", function() { return IMC_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORSE_MAP", function() { return MORSE_MAP; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");



/**
 *
 * @param {*} string
 */
function StringToMorse(str) {
  var output = "";

  Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(str).forEach(function (c) {
    output = output + " " + (MORSE_MAP[c.toUpperCase()] || "");
  });

  return output;
} // build output will uglify the above code so making it a string

var StringToMorseCode = "\n/**\n *\n * @param {*} string\n */\nfunction StringToMorse(str) {\n  let output = \"\";\n  [...str].forEach(c => {\n    output = output + \" \" + (MORSE_MAP[c.toUpperCase()] || \"\");\n  });\n  return output;\n}\n// this list of international morse codes\nconst MORSE_MAP = {A: \".-\",B: \"-...\",C: \"-.-.\",D: \"-..\",E: \".\",F: \"..-.\",G: \"--.\",H: \"....\",I: \"..\",J: \".---\",K: \"-.-\",L: \".-..\",M: \"--\",N: \"-.\",O: \"---\",P: \".--.\",Q: \"--.-\",R: \".-.\",S: \"...\",T: \"-\",U: \"..-\",V: \"...-\",W: \".--\",X: \"-..-\",Y: \"-.--\",Z: \"--..\",1: \".----\",2: \"..---\",3: \"...--\",4: \"....-\",5: \".....\",6: \"-....\",7: \"--...\",8: \"---..\",9: \"----.\",0: \"-----\",\".\": \".-.-.-\",\",\": \"--..--\",\":\": \"---...\",\"?\": \"..--..\",\"'\": \".----.\",\"-\": \"-....-\",\"/\": \"-..-.\",\"(\": \"-.--.\",\")\": \"-.--.-\",'\"': \".-..-.\",\"@\": \".--.-.\",\"=\": \"-...-\",\"&\": \".-...\",\"+\": \".-.-.\",\"!\": \"-.-.--\"};\n";
function IMC_LIST() {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(MORSE_MAP).map(function (k) {
    return {
      title: k,
      value: MORSE_MAP[k]
    };
  });
}
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
//# sourceMappingURL=string-to-morse.js.8cf04ea06ef8779c76e1.hot-update.js.map