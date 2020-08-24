webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/megangilpin/Documents/Projects/Advanced React/shopaholic/frontend/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html { \n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n    font-style: normal; \n    font-variant: normal; \n    box-sizing: border-box;\n    font-size: 10px;\n    background: ", ";\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    background: ", ";\n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n    padding:0;\n    margin: 0;\n    font-size: 1.4rem;\n    line-height: 2;\n  }\n  p {\n    font-size: 1.4rem; \n    font-weight: 400;\n    color: ", ";\n  }\n  a {\n    font-size: 1.4rem; \n    font-weight: 400;\n    text-decoration: none;\n    color: ", ";\n  }\n  button {\n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n    font-weight: 700;\n    font-size: 2rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  h3, h2 { \n    color: ", ";\n  }\n  .blockquote { \n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace; \n    font-size: 2rem; \n    font-weight: 500; \n    line-height: 3rem; \n    color: ", ";\n  }\n  .smallquote { \n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace; \n    font-size: 1.6rem; \n    font-weight: 700; \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  red: '#99991A',
  darkPurple: '#2b1f4f',
  purple: '#726F93',
  medPurple: '#b6b6c8',
  lightPurple: '#c5c5d3',
  black: '#383749',
  charcoal: '#545066',
  darkGrey: '#6c6383',
  medGrey: '#a099b2',
  grey: '#bbb6c8',
  lightgrey: '#e4e2e9',
  greyWhite: '#f2f2f2',
  offWhite: '#F6F6F6',
  // darkGrey: '#C0BABA',
  // lightPurple: '#C7C6D4#d5d3de',
  // lightgrey: '#E3E2E9',
  // lightgrey: '#e1e1eb',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0,09)',
  lgemboss: '-2px -2px 2px rgba(255, 255, 255), 1px 1px 2px #b3b3b3',
  lgembossBig: '2px -2px 2px  rgba(255, 255, 255), 1px 2px 2px #b3b3b3',
  greyemboss: '-1px -2px 2px rgba(255, 255, 255) , 1px 1px 2px #545066',
  purpleEmboss: '-1px -2px 2px #E3E2E9 , 1px 1px 2px #726F93',
  boxshadow: '-6px -6px 10px white , 1px 1px 5px rgba(0, 0, 0, 0.1)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:", ";color:", ";"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.darkPurple;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.stheme.offWhite;
}, theme.darkGrey, theme.purple, theme.purple, theme.purple);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.ac5a48a2461364e1b3f6.hot-update.js.map