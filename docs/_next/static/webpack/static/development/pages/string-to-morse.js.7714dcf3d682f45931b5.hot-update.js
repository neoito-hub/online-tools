webpackHotUpdate("static/development/pages/string-to-morse.js",{

/***/ "./pages/string-to-morse.js":
/*!**********************************!*\
  !*** ./pages/string-to-morse.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _components_common_PageTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/PageTitle */ "./components/common/PageTitle.js");
/* harmony import */ var _utils_stringToMorse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/stringToMorse */ "./utils/stringToMorse.js");
/* harmony import */ var _components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/MainLayout */ "./components/layout/MainLayout.js");
/* harmony import */ var _components_common_ListMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/common/ListMap */ "./components/common/ListMap.js");







var _jsxFileName = "/Users/mac/Documents/next-apps/pages/string-to-morse.js";







var StringToMorseConvertor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StringToMorseConvertor, _React$Component);

  function StringToMorseConvertor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StringToMorseConvertor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StringToMorseConvertor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "IMC", Object(_utils_stringToMorse__WEBPACK_IMPORTED_MODULE_10__["IMC_LIST"])());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      input: "",
      output: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleTextInputChange", function (e) {
      _this.setState({
        input: e.target.value,
        output: Object(_utils_stringToMorse__WEBPACK_IMPORTED_MODULE_10__["StringToMorse"])(e.target.value)
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StringToMorseConvertor, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          input = _this$state.input,
          output = _this$state.output;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        fluid: true,
        className: "main-content-container px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        className: "page-header py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_PageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "String To Morse Code Convertor",
        subtitle: "Morse encoder",
        md: "12",
        className: "ml-sm-auto mr-sm-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        small: true,
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        form: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "feDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "String"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["FormTextarea"], {
        id: "feDescription",
        placeholder: "Save the world! ",
        rows: "5",
        onChange: this.handleTextInputChange,
        value: input,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "feDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Morse Code"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["FormTextarea"], {
        id: "feDescription",
        placeholder: "Your text here... ?",
        rows: "5",
        value: output,
        onChange: function onChange() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "How it Works"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", {
        className: "code-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("code", {
        className: "javascript p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, _utils_stringToMorse__WEBPACK_IMPORTED_MODULE_10__["StringToMorseCode"]))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_ListMap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "International Morse code",
        list: this.IMC.slice(0, Math.ceil(this.IMC.length / 3)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_ListMap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "International Morse code",
        list: this.IMC.slice(Math.ceil(this.IMC.length / 3), Math.ceil(this.IMC.length / 3 * 2)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_ListMap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "International Morse code",
        list: this.IMC.slice(Math.ceil(this.IMC.length / 3 * 2), this.IMC.length),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "About Morse Code"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Morse code is a character encoding scheme used in telecommunication that encodes text characters as standardized sequences of two different signal durations called dots and dashes or dits and dahs.[2][3] Morse code is named for Samuel F. B. Morse, an inventor of the telegraph."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "The International Morse Code encodes the 26 English letters A through Z, some non-English letters, the Arabic numerals and a small set of punctuation and procedural signals (prosigns). There is no distinction between upper and lower case letters. Each Morse code symbol is formed by a sequence of dots and dashes. The dot duration is the basic unit of time measurement in Morse code transmission. The duration of a dash is three times the duration of a dot. Each dot or dash within a character is followed by period of signal absence, called a space, equal to the dot duration. The letters of a word are separated by a space of duration equal to three dots, and the words are separated by a space equal to seven dots. To increase the efficiency of encoding, Morse code was designed so that the length of each symbol is approximately inverse to the frequency of occurrence in text of the English language character that it represents. Thus the most common letter in English, the letter \"E\", has the shortest code: a single dot. Because the Morse code elements are specified by proportion rather than specific time durations, the code is usually transmitted at the highest rate that the receiver is capable of decoding. The Morse code transmission rate (speed) is specified in groups per minute, commonly referred to as words per minute."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Morse code can be memorized, and Morse code signalling in a form perceptible to the human senses, such as sound waves or visible light, can be directly interpreted by persons trained in the skill.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/Morse_code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Morse code Wiki"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://morsecode.scphillips.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "More info")))))))));
    }
  }]);

  return StringToMorseConvertor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StringToMorseConvertor);

/***/ })

})
//# sourceMappingURL=string-to-morse.js.7714dcf3d682f45931b5.hot-update.js.map