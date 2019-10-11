webpackHotUpdate("static/development/pages/interval-timer.js",{

/***/ "./pages/interval-timer.js":
/*!*********************************!*\
  !*** ./pages/interval-timer.js ***!
  \*********************************/
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
/* harmony import */ var _components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/MainLayout */ "./components/layout/MainLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/css/interval-timer.css */ "./static/css/interval-timer.css");
/* harmony import */ var _static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_interval_timer_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_PageTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/PageTitle */ "./components/common/PageTitle.js");







var _jsxFileName = "/Users/mac/Documents/next-apps/pages/interval-timer.js";






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

var IntervalTimer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IntervalTimer, _React$Component);

  function IntervalTimer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IntervalTimer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IntervalTimer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", init);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "timer", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleStartTimer", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      }

      _this.timer = setInterval(function () {
        var _this$state = _this.state,
            target = _this$state.target,
            timeElapsed = _this$state.timeElapsed,
            workMode = _this$state.workMode,
            breakTime = _this$state.breakTime;
        var currenttype = workMode ? target : breakTime;
        var minutes = ~~((currenttype - timeElapsed) / 60);
        var seconds = (currenttype - timeElapsed) % 60;
        var finalTime = str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

        if (!minutes && !seconds) {
          _this.setState({
            timeElapsed: 0,
            display: finalTime,
            workMode: !workMode
          });

          if (workMode) {
            // stop tune
            _this.startBreak.play();
          } else {
            _this.endBreak.play();
          }
        } else {
          _this.setState({
            timeElapsed: timeElapsed + 1,
            display: finalTime,
            running: true
          });
        }
      }, 1000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleStopTimer", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      } // this.setState({
      // ...init
      // });

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResumeTime", function (v) {
      _this.setState({
        breakTime: v.target.value * 60
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleTargetTime", function (v) {
      _this.setState({
        target: v.target.value * 60
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IntervalTimer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startBreak = new Audio("../static/sounds/start-break.wav");
      this.endBreak = new Audio("../static/sounds/end-break.wav");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          display = _this$state2.display,
          running = _this$state2.running,
          target = _this$state2.target,
          breakTime = _this$state2.breakTime;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        className: "main-content-container px-4 noisy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "emblem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "icon-information",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "piece output",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, display)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "piece scanlines noclick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "piece glow noclick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "I want to take a break after", " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "number",
        defaultValue: target / 60,
        onChange: this.handleTargetTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), " ", "minutes for", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "number",
        defaultValue: breakTime / 60,
        onChange: this.handleResumeTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), " ", "minutes"), running ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleStopTimer,
        className: "-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "stop"), "Stop") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleStartTimer,
        className: "play-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "play_arrow"), "Start"))));
    }
  }]);

  return IntervalTimer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IntervalTimer);

/***/ })

})
//# sourceMappingURL=interval-timer.js.11f611c2c4512de9e2f0.hot-update.js.map