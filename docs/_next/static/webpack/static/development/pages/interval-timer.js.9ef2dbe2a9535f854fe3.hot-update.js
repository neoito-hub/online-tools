webpackHotUpdate("static/development/pages/interval-timer.js",{

/***/ "./pages/interval-timer.js":
/*!*********************************!*\
  !*** ./pages/interval-timer.js ***!
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
/* harmony import */ var _static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/css/interval-timer.css */ "./static/css/interval-timer.css");
/* harmony import */ var _static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/safal/neoito/online-tools/pages/interval-timer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

var init = {
  display: "10:00",
  timeElapsed: 0,
  target: 10 * 60,
  // mins* seconds
  breakTime: 2 * 60,
  // mins* seconds
  workMode: true,
  running: false
};

var IntervalTimer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IntervalTimer, _React$Component);

  var _super = _createSuper(IntervalTimer);

  function IntervalTimer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IntervalTimer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", init);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "timer", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleStartTimer", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      }

      var _this$state = _this.state,
          target = _this$state.target,
          breakTime = _this$state.breakTime;

      _this.triggerUpdateTime(target, breakTime);

      _this.timer = setInterval(function () {
        _this.triggerUpdateTime(target, breakTime);
      }, 1000);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleStopTimer", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      }

      var _this$state2 = _this.state,
          target = _this$state2.target,
          workMode = _this$state2.workMode,
          breakTime = _this$state2.breakTime;
      var currenttype = workMode ? target : breakTime;
      var minutes = ~~(currenttype / 60);
      var seconds = currenttype % 60;
      var finalTime = str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

      _this.setState({
        running: false,
        timeElapsed: 0,
        display: finalTime,
        workMode: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleResumeTime", function (v) {
      _this.setState({
        breakTime: v.target.value * 60
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTargetTime", function (v) {
      _this.setState({
        target: v.target.value * 60
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IntervalTimer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startBreak = new Audio("../static/sounds/start-break.wav");
      this.endBreak = new Audio("../static/sounds/end-break.wav");
    }
  }, {
    key: "triggerUpdateTime",
    value: function triggerUpdateTime(target, breakTime) {
      var _this$state3 = this.state,
          timeElapsed = _this$state3.timeElapsed,
          workMode = _this$state3.workMode;
      var currenttype = workMode ? target : breakTime;
      var minutes = ~~((currenttype - timeElapsed) / 60);
      var seconds = (currenttype - timeElapsed) % 60;
      var finalTime = str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

      if (!minutes && !seconds) {
        this.setState({
          timeElapsed: 0,
          display: finalTime,
          workMode: !workMode
        });

        if (workMode) {
          // stop tune
          this.startBreak.play();
        } else {
          this.endBreak.play();
        }
      } else {
        this.setState({
          timeElapsed: timeElapsed + 1,
          display: finalTime,
          running: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          display = _this$state4.display,
          running = _this$state4.running,
          target = _this$state4.target,
          breakTime = _this$state4.breakTime,
          workMode = _this$state4.workMode;
      return __jsx(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        className: "main-content-container px-4 noisy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("div", {
        className: "emblem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("span", {
        className: "icon-information",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx("div", {
        className: "frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("div", {
        className: "piece output",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, display)), __jsx("div", {
        className: "piece scanlines noclick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx("div", {
        className: "piece glow noclick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), __jsx("div", {
        className: "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, running ? workMode ? "I am in work mode" : "It's time for a break" : null), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "I want to take a break after", " ", __jsx("input", {
        type: "number",
        defaultValue: target / 60,
        onChange: this.handleTargetTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), "minutes for", __jsx("input", {
        type: "number",
        defaultValue: breakTime / 60,
        onChange: this.handleResumeTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), " ", "minutes"), running ? __jsx("b", {
        onClick: this.handleStopTimer,
        className: "play-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "stop"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Stop")) : __jsx("b", {
        onClick: this.handleStartTimer,
        className: "play-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "play_arrow"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Start")))), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "The cyber punk retro UI is inspired from", " ", __jsx("a", {
        href: "https://codepen.io/somethingformed/pen/raWJXV",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "A PEN BY \u672A\u77E5\u5929\u5730 CLOSED")));
    }
  }]);

  return IntervalTimer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

IntervalTimer.getInitialProps = function () {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (IntervalTimer);

/***/ })

})
//# sourceMappingURL=interval-timer.js.9ef2dbe2a9535f854fe3.hot-update.js.map