webpackHotUpdate("static/development/pages/string-to-hex.js",{

/***/ "./components/layout/MainNavbar/MainNavbar.js":
/*!****************************************************!*\
  !*** ./components/layout/MainNavbar/MainNavbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavbarToggle */ "./components/layout/MainNavbar/NavbarToggle.js");
var _jsxFileName = "/home/safal/neoito/online-tools/components/layout/MainNavbar/MainNavbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MainNavbar = function MainNavbar(_ref) {
  var layout = _ref.layout,
      stickyTop = _ref.stickyTop;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("main-navbar", "bg-white", stickyTop && "sticky-top");

  var handleEditClick = function handleEditClick() {
    window.open(true ? "https://github.com/neoito-hub/online-tools/blob/master/pages/".concat(document.URL.split("/")[document.URL.split("/").length - 1], ".js") : undefined, "_blank");
  };

  return __jsx("div", {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/static/images/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    type: "light",
    className: "align-items-stretch flex-md-nowrap p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_NavbarToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: "d-none d-md-inline-block ",
    onClick: handleEditClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("i", {
    className: "material-icons mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uE150"), "Edit in github"))))));
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
MainNavbar.defaultProps = {
  stickyTop: true
};
/* harmony default export */ __webpack_exports__["default"] = (MainNavbar);

/***/ })

})
//# sourceMappingURL=string-to-hex.js.cae894a87dce51bfb5c8.hot-update.js.map