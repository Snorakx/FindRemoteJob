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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");



var _jsxFileName = "C:\\Users\\patry\\Desktop\\aapinext\\my-wiki-api\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






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
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Earn this money!"), __jsx("form", {
    className: "search",
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("input", {
    value: searchValue,
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    },
    name: "query",
    type: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: handlePreviousPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Prev Page"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "primary",
    onClick: handleNextPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Next Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOZXh0UGFnZSIsImxlbmd0aCIsIm5leHRQYWdlQ291bnRGaXJzdEl0ZW0iLCJuZXh0UGFnZUNvdW50TGFzdEl0ZW0iLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsaWNlIiwibWFwIiwicmVzdWx0IiwidXJsIiwiaWQiLCJsaXN0Um93IiwibGlzdENvbEltZyIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBY2UsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLG1CQUNDQSxJQURELENBQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxjQUR1QiwyQkFDTixFQURNLGVBQ087O0FBRFAsa0JBR0pDLHNEQUFRLENBQUNE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QUFBLGlCQURGLEVBR0UsTUFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVKLGNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsQ0F0Q0YsQ0FORixFQXFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsd0dBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUthO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLGFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMYixDQURGLENBckRGLENBREY7QUFpRUQ7O0dBM0h1QjdCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRkNDUyODBkMjU4MTkxNmJhZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIExpc3RHcm91cCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcblxuY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdEVuZHBvaW50KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGpvYnM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7IC8vdGFrIGt1cndhIGthemRlIGFwaSBtYSB0dSBpbm5lIGt1cndhIHptaWVuZW5cblxuICBjb25zdCBbcmVzdWx0cywgdXBkYXRlUmVzdWx0c10gPSB1c2VTdGF0ZShkZWZhdWx0UmVzdWx0cyk7XG5cbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0UGFnZUl0ZW06IDAsXG4gICAgbGFzdFBhZ2VJdGVtOiAxNSxcbiAgfSk7XG5cbiAgY29uc3QgcHJldlBhZ2VSZWYgPSB1c2VSZWYoKTsgLy8wLk5hbiAxLjAgMi4zIDMuMyA0LjMrM1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZQYWdlUmVmLmN1cnJlbnQgPSBwYWdlO1xuICB9KTtcbiAgY29uc3QgcHJldlBhZ2UgPSBwcmV2UGFnZVJlZi5jdXJyZW50O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0U2VhcmNoKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP3NlYXJjaD0ke3NlYXJjaFZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dFBhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IDE1LFxuICAgICAgICBsYXN0UGFnZUl0ZW06IDMwLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwICYmIHBhZ2UubGFzdFBhZ2VJdGVtIDwgcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5sYXN0UGFnZUl0ZW0gPj0gcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwia29uaWVjXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c1BhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZW1vdGUgam9iIGZvciB1ITwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlJlbW90ZSBqb2IgZm9yIHUhPC9oMT5cblxuICAgICAgICA8cD5FYXJuIHRoaXMgbW9uZXkhPC9wPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hcIiBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxuICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtyZXN1bHRzXG4gICAgICAgICAgICAuc2xpY2UocGFnZS5maXJzdFBhZ2VJdGVtLCBwYWdlLmxhc3RQYWdlSXRlbSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IGtleT17cmVzdWx0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vcmVtb3RpdmUuaW8vam9iLyR7cmVzdWx0LmlkfS9sb2dvIGB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT4ge3Jlc3VsdC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5jb21wYW55X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9PlByZXYgUGFnZTwvYnV0dG9uPlxuXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9