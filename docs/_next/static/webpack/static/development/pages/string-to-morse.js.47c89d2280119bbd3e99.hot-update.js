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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_ListMap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "International Morse code",
        list: this.IMC,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "About Unicode"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Unicode serves as a standard for computers to display character data from any language. There are many variations of the Unicode standard, including UTF-7, UTF-8, UTF-16, UCS-2, as well as Big Endian / Little Endian byte order variations."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Traditionally, the ASCII standard used 1 byte to store 1 character, resulting in 256 combinations. Unlike the ASCII standard, Unicode character data utilizes multiple bytes per character. This increases the number of possible characters, and this may vary depending on what variation of the Unicode standard is in use."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Unicode now replaces ASCII, ISO 8859 and EUC at all levels. It enables users to handle not only practically any script and language used on this planet, it also supports a comprehensive set of mathematical and technical symbols to simplify scientific information exchange.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.cl.cam.ac.uk/~mgk25/unicode.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "UTF-8 and Unicode FAQ for Unix/Linux")))))))));
    }
  }]);

  return StringToMorseConvertor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StringToMorseConvertor);

/***/ })

})
//# sourceMappingURL=string-to-morse.js.47c89d2280119bbd3e99.hot-update.js.map