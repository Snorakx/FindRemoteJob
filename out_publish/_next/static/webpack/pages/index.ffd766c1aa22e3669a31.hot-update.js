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
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
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
      lineNumber: 151,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOZXh0UGFnZSIsImxlbmd0aCIsIm5leHRQYWdlQ291bnRGaXJzdEl0ZW0iLCJuZXh0UGFnZUNvdW50TGFzdEl0ZW0iLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJzZWNvbmRIZWFkZXIiLCJzZWFyY2hGb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsIm1hcCIsInJlc3VsdCIsInVybCIsImlkIiwibGlzdFJvdyIsImxpc3RDb2xJbWciLCJsaXN0Q29sVGl0bGUiLCJ0aXRsZVRleHQiLCJ0aXRsZSIsImxpc3RDb2xDb21wYW55IiwiY29tcGFueU5hbWVUZXh0IiwiY29tcGFueV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXNCZSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQUEsbUJBQ0NBLElBREQsQ0FDN0JDLElBRDZCO0FBQUEsTUFDdkJDLGNBRHVCLDJCQUNOLEVBRE0sZUFDTzs7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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIExpc3RHcm91cCxcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdEVuZHBvaW50KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGpvYnM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7IC8vdGFrIGt1cndhIGthemRlIGFwaSBtYSB0dSBpbm5lIGt1cndhIHptaWVuZW5cblxuICBjb25zdCBbcmVzdWx0cywgdXBkYXRlUmVzdWx0c10gPSB1c2VTdGF0ZShkZWZhdWx0UmVzdWx0cyk7XG5cbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0UGFnZUl0ZW06IDAsXG4gICAgbGFzdFBhZ2VJdGVtOiAxNSxcbiAgfSk7XG5cbiAgY29uc3QgcHJldlBhZ2VSZWYgPSB1c2VSZWYoKTsgLy8wLk5hbiAxLjAgMi4zIDMuMyA0LjMrM1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZQYWdlUmVmLmN1cnJlbnQgPSBwYWdlO1xuICB9KTtcbiAgY29uc3QgcHJldlBhZ2UgPSBwcmV2UGFnZVJlZi5jdXJyZW50O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0U2VhcmNoKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP3NlYXJjaD0ke3NlYXJjaFZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dFBhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IDE1LFxuICAgICAgICBsYXN0UGFnZUl0ZW06IDMwLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwICYmIHBhZ2UubGFzdFBhZ2VJdGVtIDwgcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5sYXN0UGFnZUl0ZW0gPj0gcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwia29uaWVjXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c1BhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZW1vdGUgam9iIGZvciB1ITwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlJlbW90ZSBqb2IgZm9yIHUhPC9oMT5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kSGVhZGVyfT5cbiAgICAgICAgICBKdXN0IGZpbmQgeW91ciBkcmVhbSBqb2IgYW5kIHN0YXJ0IGVhcm5pbmcgbW9uZXlcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0U2VhcmNofT5cbiAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm1JbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+ICovfVxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiPlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cbiAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAge3Jlc3VsdHNcbiAgICAgICAgICAgIC5zbGljZShwYWdlLmZpcnN0UGFnZUl0ZW0sIHBhZ2UubGFzdFBhZ2VJdGVtKVxuICAgICAgICAgICAgLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0LnVybH0ga2V5PXtyZXN1bHQuaWR9PlxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cCBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Um93fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xJbWd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9yZW1vdGl2ZS5pby9qb2IvJHtyZXN1bHQuaWR9L2xvZ28gYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVRleHR9PiB7cmVzdWx0LnRpdGxlfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xDb21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlOYW1lVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9