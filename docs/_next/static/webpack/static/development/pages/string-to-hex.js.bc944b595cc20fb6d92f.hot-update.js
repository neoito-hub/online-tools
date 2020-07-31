webpackHotUpdate("static/development/pages/string-to-hex.js",{

/***/ "./pages/string-to-hex.js":
/*!********************************!*\
  !*** ./pages/string-to-hex.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/MainLayout */ "./components/layout/MainLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _components_common_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/PageTitle */ "./components/common/PageTitle.js");
/* harmony import */ var _utils_stringToHex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/stringToHex */ "./utils/stringToHex.js");







var _jsxFileName = "/home/safal/neoito/online-tools/pages/string-to-hex.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var StringToHexConvertor = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StringToHexConvertor, _React$Component);

  var _super = _createSuper(StringToHexConvertor);

  function StringToHexConvertor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StringToHexConvertor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      text: "",
      hexValue: "",
      option: "1",
      separator: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getCurrentSeparator", function (o) {
      var _this$state = _this.state,
          option = _this$state.option,
          separator = _this$state.separator;

      switch (o || option) {
        case "1":
          return "0x";

        case "2":
          return "%u";

        case "3":
          return "";

        case "4":
          return separator;

        default:
          break;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChange", function (e) {
      _this.setState({
        text: e.target.value,
        hexValue: Object(_utils_stringToHex__WEBPACK_IMPORTED_MODULE_11__["convertStringToHEX"])(e.target.value, _this.getCurrentSeparator())
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSeparatorChange", function (e) {
      var text = _this.state.text;

      _this.setState({
        separator: e.target.value,
        hexValue: Object(_utils_stringToHex__WEBPACK_IMPORTED_MODULE_11__["convertStringToHEX"])(text, e.target.value)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleOptionChange", function (o) {
      _this.setState({
        option: o,
        text: _this.state.text,
        hexValue: Object(_utils_stringToHex__WEBPACK_IMPORTED_MODULE_11__["convertStringToHEX"])(_this.state.text, _this.getCurrentSeparator(o))
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StringToHexConvertor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          text = _this$state2.text,
          hexValue = _this$state2.hexValue,
          option = _this$state2.option,
          separator = _this$state2.separator;
      return __jsx(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        className: "main-content-container px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        noGutters: true,
        className: "page-header py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_components_common_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "String To Hex Convertor",
        subtitle: "Character to Unicode Binary ",
        md: "12",
        className: "ml-sm-auto mr-sm-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        small: true,
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        form: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "feDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Text"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormTextarea"], {
        id: "feDescription",
        placeholder: "Your text here... !\u2513 \u20A2\uFFFDkkk?",
        rows: "5",
        onChange: this.handleTextInputChange,
        value: text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "feDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Hex"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormTextarea"], {
        id: "feDescription",
        placeholder: "0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f ",
        rows: "5",
        value: hexValue,
        onChange: function onChange() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "mb-3 block-options",
        md: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Separator"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormRadio"], {
        name: "option",
        checked: option === "1",
        onChange: function onChange() {
          return _this2.handleOptionChange("1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "0X"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormRadio"], {
        name: "option",
        checked: option === "2",
        onChange: function onChange() {
          return _this2.handleOptionChange("2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "%u"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormRadio"], {
        name: "option",
        checked: option === "3",
        onChange: function onChange() {
          return _this2.handleOptionChange("3");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "none"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormRadio"], {
        name: "option",
        checked: option === "4",
        onChange: function onChange() {
          return _this2.handleOptionChange("4");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "custom")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, option === "4" ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "customSeparator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Custom Separator"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "customSeparator",
        placeholder: "separator(eg:%u)",
        value: separator,
        onChange: this.handleSeparatorChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })) : ""), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "How it Works"), __jsx("pre", {
        className: "code-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("code", {
        className: "javascript p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, _utils_stringToHex__WEBPACK_IMPORTED_MODULE_11__["convertohexCode"]))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "About Unicode"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Unicode serves as a standard for computers to display character data from any language. There are many variations of the Unicode standard, including UTF-7, UTF-8, UTF-16, UCS-2, as well as Big Endian / Little Endian byte order variations."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Traditionally, the ASCII standard used 1 byte to store 1 character, resulting in 256 combinations. Unlike the ASCII standard, Unicode character data utilizes multiple bytes per character. This increases the number of possible characters, and this may vary depending on what variation of the Unicode standard is in use."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Unicode now replaces ASCII, ISO 8859 and EUC at all levels. It enables users to handle not only practically any script and language used on this planet, it also supports a comprehensive set of mathematical and technical symbols to simplify scientific information exchange.", __jsx("a", {
        href: "https://www.cl.cam.ac.uk/~mgk25/unicode.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "UTF-8 and Unicode FAQ for Unix/Linux")))))))));
    }
  }]);

  return StringToHexConvertor;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

StringToHexConvertor.getInitialProps = function () {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (StringToHexConvertor);

/***/ })

})
//# sourceMappingURL=string-to-hex.js.bc944b595cc20fb6d92f.hot-update.js.map