webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var _jsxFileName = "C:\\Users\\patry\\Desktop\\aapinext\\my-wiki-api\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var categoriesArray = ["software-dev", "design", "marketing", "sales", "data", "devops", "hr", "qa"];
var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;
  var _data$jobs = data.jobs,
      defaultResults = _data$jobs === void 0 ? [] : _data$jobs; //tak kurwa kazde api ma tu inne kurwa zmienen

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultResults),
      results = _useState[0],
      updateResults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    firstPageItem: 0,
    lastPageItem: 15
  }),
      page = _useState3[0],
      setPage = _useState3[1];

  var prevPageRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); //0.Nan 1.0 2.3 3.3 4.3+3

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    prevPageRef.current = page;
  });
  var prevPage = prevPageRef.current;

  function handleOnSubmitSearch(_x) {
    return _handleOnSubmitSearch.apply(this, arguments);
  }

  function _handleOnSubmitSearch() {
    _handleOnSubmitSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var proxyurl, searchEndpoint, res, searchData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?search=".concat(searchValue);
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              searchData = _context.sent;
              updateResults(searchData.jobs);
              console.log(searchValue);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleOnSubmitSearch.apply(this, arguments);
  }

  function handleCategory1() {
    return _handleCategory.apply(this, arguments);
  }

  function _handleCategory() {
    _handleCategory = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var searchEndpoint, res, categoryData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue);
              _context2.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              categoryData = _context2.sent;
              updateResults(categoryData.jobs);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleCategory.apply(this, arguments);
  }

  function handleNextPage() {
    if (page.firstPageItem === 0) {
      setPage({
        firstPageItem: 15,
        lastPageItem: 30
      });
    } else if (page.firstPageItem > 0 && page.lastPageItem < results.length) {
      var nextPageCountFirstItem = page.firstPageItem + 15;
      var nextPageCountLastItem = page.lastPageItem + 15;
      setPage({
        firstPageItem: nextPageCountFirstItem,
        lastPageItem: nextPageCountLastItem
      });
    } else if (page.lastPageItem >= results.length) {
      console.log("koniec");
    }
  }

  function handlePreviousPage() {
    if (page.firstPageItem === 0) {
      console.log(results.length);
    } else if (page.firstPageItem > 0) {
      var nextPageCountFirstItem = page.firstPageItem - 15;
      var nextPageCountLastItem = page.lastPageItem - 15;
      setPage({
        firstPageItem: nextPageCountFirstItem,
        lastPageItem: nextPageCountLastItem
      });
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, categoriesArray.map(function (result) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
      variant: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, result);
  }))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    placeholder: "Enter the word that you associate with your dream remote job!",
    "aria-label": "Recipient's username",
    "aria-describedby": "basic-addon2",
    value: searchValue,
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    },
    name: "query",
    type: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: handleNextPage,
    variant: "primary",
    size: "lg",
    block: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, "Next Page"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: handlePreviousPage,
    variant: "secondary",
    size: "lg",
    block: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 22
    }
  }))));
}

_s(Home, "am6krwcuEO2jcqTPwu6uZfbzgH4=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXRlZ29yeTEiLCJidXR0b25WYWx1ZSIsImNhdGVnb3J5RGF0YSIsImhhbmRsZU5leHRQYWdlIiwibGVuZ3RoIiwibmV4dFBhZ2VDb3VudEZpcnN0SXRlbSIsIm5leHRQYWdlQ291bnRMYXN0SXRlbSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInN0eWxlcyIsImhlYWRlciIsInNlY29uZEhlYWRlciIsImNhdGVnb3JpZXNCdXR0b25Db250YWluZXIiLCJjYXRlZ29yaWVzQnV0dG9uQm94IiwibWFwIiwicmVzdWx0IiwiY2F0ZWdvcmllc0J1dHRvbiIsInNlYXJjaEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsaWNlIiwidXJsIiwiaWQiLCJsaXN0Um93IiwibGlzdENvbEltZyIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiLCJidXR0b25IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMYixDQURGLENBMUdGLENBREY7QUFzSEQ7O0dBdkx1QnBDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODk0ZDhhZDY0ZTlkNDQyNTE3ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbkdyb3VwLFxuICBCdXR0b24sXG4gIExpc3RHcm91cCxcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdEVuZHBvaW50KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbmNvbnN0IGNhdGVnb3JpZXNBcnJheSA9IFtcbiAgXCJzb2Z0d2FyZS1kZXZcIixcbiAgXCJkZXNpZ25cIixcbiAgXCJtYXJrZXRpbmdcIixcbiAgXCJzYWxlc1wiLFxuICBcImRhdGFcIixcbiAgXCJkZXZvcHNcIixcbiAgXCJoclwiLFxuICBcInFhXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gIGNvbnN0IHsgam9iczogZGVmYXVsdFJlc3VsdHMgPSBbXSB9ID0gZGF0YTsgLy90YWsga3Vyd2Ega2F6ZGUgYXBpIG1hIHR1IGlubmUga3Vyd2Egem1pZW5lblxuXG4gIGNvbnN0IFtyZXN1bHRzLCB1cGRhdGVSZXN1bHRzXSA9IHVzZVN0YXRlKGRlZmF1bHRSZXN1bHRzKTtcblxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3RQYWdlSXRlbTogMCxcbiAgICBsYXN0UGFnZUl0ZW06IDE1LFxuICB9KTtcblxuICBjb25zdCBwcmV2UGFnZVJlZiA9IHVzZVJlZigpOyAvLzAuTmFuIDEuMCAyLjMgMy4zIDQuMyszXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldlBhZ2VSZWYuY3VycmVudCA9IHBhZ2U7XG4gIH0pO1xuICBjb25zdCBwcmV2UGFnZSA9IHByZXZQYWdlUmVmLmN1cnJlbnQ7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXRTZWFyY2goZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm94eXVybCA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XG4gICAgY29uc3Qgc2VhcmNoRW5kcG9pbnQgPSBgaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/c2VhcmNoPSR7c2VhcmNoVmFsdWV9YDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHVwZGF0ZVJlc3VsdHMoc2VhcmNoRGF0YS5qb2JzKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hWYWx1ZSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnkxKCkge1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2NhdGVnb3J5PSR7YnV0dG9uVmFsdWV9YDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdXBkYXRlUmVzdWx0cyhjYXRlZ29yeURhdGEuam9icyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0UGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogMTUsXG4gICAgICAgIGxhc3RQYWdlSXRlbTogMzAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDAgJiYgcGFnZS5sYXN0UGFnZUl0ZW0gPCByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSArIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmxhc3RQYWdlSXRlbSA+PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coXCJrb25pZWNcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzUGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlbW90ZSBqb2IgZm9yIHUhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+UmVtb3RlIGpvYiBmb3IgdSE8L2gxPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkZXJ9PlxuICAgICAgICAgIEp1c3QgZmluZCB5b3VyIGRyZWFtIGpvYiBhbmQgc3RhcnQgZWFybmluZyBtb25leVxuICAgICAgICA8L2gyPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkJveH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllc0FycmF5Lm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7cmVzdWx0c1xuICAgICAgICAgICAgLnNsaWNlKHBhZ2UuZmlyc3RQYWdlSXRlbSwgcGFnZS5sYXN0UGFnZUl0ZW0pXG4gICAgICAgICAgICAubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSBrZXk9e3Jlc3VsdC5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGhvcml6b250YWw9e3RydWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3JlbW90aXZlLmlvL2pvYi8ke3Jlc3VsdC5pZH0vbG9nbyBgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+IHtyZXN1bHQudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbENvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueU5hbWVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSGFuZGxlcn0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBibG9jaz5cbiAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=