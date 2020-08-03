webpackHotUpdate("static/development/pages/polygon-vertex.js",{

/***/ "./pages/polygon-vertex.js":
/*!*********************************!*\
  !*** ./pages/polygon-vertex.js ***!
  \*********************************/
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
/* harmony import */ var _utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/PolygonVertex */ "./utils/PolygonVertex.js");







var _jsxFileName = "/home/safal/neoito/online-tools/pages/polygon-vertex.js";
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
      centerx: 0,
      centery: 0,
      number: 4,
      radius: 50,
      angle: "",
      vertex: [],
      visibile: "none"
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChangex", function (e) {
      _this.setState({
        centerx: e.target.value,
        vertex: Object(_utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygon"])({
          r: _this.state.radius,
          a: _this.state.angle,
          cx: e.target.value,
          cy: _this.state.centery,
          round: _this.state.round,
          n: _this.state.number
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChangey", function (e) {
      _this.setState({
        centery: e.target.value,
        vertex: Object(_utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygon"])({
          r: _this.state.radius,
          a: _this.state.angle,
          cy: e.target.value,
          cx: _this.state.centerx,
          round: _this.state.round,
          n: _this.state.number
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChangeside", function (e) {
      _this.setState({
        number: e.target.value
      });

      if (e.target.value > 2) {
        _this.setState({
          vertex: Object(_utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygon"])({
            n: e.target.value,
            r: _this.state.radius,
            a: _this.state.angle,
            cx: _this.state.centerx,
            cy: _this.state.centery,
            round: _this.state.round
          })
        });
      } else if (e.target.value && e.target.value >= 0) {
        alert("Number of sides must be a number greater than 2");
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clear", function (e) {
      _this.setState({
        vertex: []
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChangeradius", function (e) {
      _this.setState({
        radius: e.target.value
      });

      if (e.target.value > 0) {
        _this.setState({
          vertex: Object(_utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygon"])({
            n: _this.state.number,
            r: e.target.value,
            a: _this.state.angle,
            cx: _this.state.centerx,
            cy: _this.state.centery,
            round: _this.state.round
          })
        });
      } else {
        alert("Radius  must be greater than zero");
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTextInputChangestartangle", function (e) {
      _this.setState({
        angle: e.target.value,
        vertex: Object(_utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygon"])({
          n: _this.state.number,
          r: _this.state.radius,
          a: e.target.value,
          cx: _this.state.centerx,
          cy: _this.state.centery,
          round: _this.state.round
        })
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StringToHexConvertor, [{
    key: "render",
    value: function render() {
      return __jsx(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        className: "main-content-container px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        noGutters: true,
        className: "page-header py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(_components_common_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Polygon Vertex Calculator",
        subtitle: "Find the polygon vertex's here ",
        md: "12",
        className: "ml-sm-auto mr-sm-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        small: true,
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        form: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "8",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Center X"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "x",
        onChange: this.handleTextInputChangex,
        placeholder: "X-axis",
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "8",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "y",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Center Y"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "y",
        onChange: this.handleTextInputChangey,
        placeholder: "Y-axis",
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "8",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "vertex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Number of sides"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "vertex",
        onChange: this.handleTextInputChangeside,
        placeholder: "Number of side's",
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "8",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "radius",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Radius"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "radius",
        onChange: this.handleTextInputChangeradius,
        placeholder: "Radius",
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "8",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "angle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Start angle (degrees)"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
        id: "angle",
        onChange: this.handleTextInputChangestartangle,
        placeholder: "Angle in Degree",
        className: "mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "6",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        small: true,
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, this.state.vertex.length > 0 ? __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        className: "p-0 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("table", {
        className: "table mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("thead", {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx("th", {
        scope: "col",
        className: "border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "X-axis"), __jsx("th", {
        scope: "col",
        className: "border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Y-axis"))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, this.state.vertex.map(function (item) {
        return __jsx("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, __jsx("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, item.x), __jsx("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, item.y));
      })))) : null))))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "How it Works"), __jsx("pre", {
        className: "code-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx("code", {
        className: "javascript p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, _utils_PolygonVertex__WEBPACK_IMPORTED_MODULE_11__["polygoncode"]))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("strong", {
        className: "text-muted d-block mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "About the calculator"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "This calculator takes the parameters of a regular polygon and calculates its coordinates. It produces both the coordinates of the vertices and the coordinates of the line segments making up the sides of the polygon. It is useful to blind users and those who produce material for the sight-impaired. The programs that emboss shapes on pages for the blind need the coordinates of the lines that make up the shape. This page was designed to make it easy to produce the data needed by those programs (such as SVG Draw) to 'draw' regular polygons."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Click the 'Calculate' button to refresh the results. Note that the y coordinates are positive downwards, to conform to the convention in most computer software. Positive x is to the right. The sides output is a table containing the start and end x,y coordinates of each side of the polygon, going counter clockwise from the first one. Below that is the same data in CSV format. The vertex output is a table containing the x and y coordinates of each vertex of the polygon, going counter clockwise from the first one. Below that is the same data in CSV format."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Center X and center Y are the coordinates of the center point of the polygon. Set initially to 0, 0. Note that the y coordinate is positive downwards, to conform to the convention in most computer software. Positive x is to the right."), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "The number of sides. Must be greater than 2. Set initially to 4."), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "The radius is the distance from the center to a vertex. Set initially to 50."), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Start angle is the position of the first vertex. This angle is in degrees and is the angle starting at 3 o'clock going counter clockwise. So for example if you want the first vertex to be at 12 o'clock, set this to 90. Set initially to blank (auto). If you leave this blank it will be set automatically: If the number of sides is odd, (e.g. a pentagon), the first vertex will be at 12 o'clock. If even, e.g. an octagon, the top and bottom sides will be horizontal on the page."))))))))));
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
//# sourceMappingURL=polygon-vertex.js.410ce2025b59ff5d2dc3.hot-update.js.map