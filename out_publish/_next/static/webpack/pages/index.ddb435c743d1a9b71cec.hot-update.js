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

  function handleCategory1(_x2) {
    return _handleCategory.apply(this, arguments);
  }

  function _handleCategory() {
    _handleCategory = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(buttonValue) {
      var proxyurl, searchEndpoint, res, categoryData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue, "&limit=50");
              _context2.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return res.json();

            case 7:
              categoryData = _context2.sent;
              updateResults(categoryData.jobs);

            case 9:
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
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, categoriesArray.map(function (result) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
      onClick: function onClick() {
        return handleCategory1(result);
      },
      variant: "secondary",
      key: result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, result);
  }))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    if (results.length < 0) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 24
        }
      }, "Loading...");
    } else {
      return __jsx("a", {
        href: result.url,
        key: result.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
        horizontal: true,
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 23
        }
      }, __jsx("img", {
        src: "https://remotive.io/job/".concat(result.id, "/logo "),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 25
        }
      }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 25
        }
      }, " ", result.company_name))));
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 209,
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
      lineNumber: 212,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXRlZ29yeTEiLCJidXR0b25WYWx1ZSIsImNhdGVnb3J5RGF0YSIsImhhbmRsZU5leHRQYWdlIiwibGVuZ3RoIiwibmV4dFBhZ2VDb3VudEZpcnN0SXRlbSIsIm5leHRQYWdlQ291bnRMYXN0SXRlbSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInN0eWxlcyIsImhlYWRlciIsInNlY29uZEhlYWRlciIsImNhdGVnb3JpZXNCdXR0b25Db250YWluZXIiLCJjYXRlZ29yaWVzQnV0dG9uQm94IiwibWFwIiwicmVzdWx0IiwiY2F0ZWdvcmllc0J1dHRvbiIsInNlYXJjaEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsaWNlIiwidXJsIiwiaWQiLCJsaXN0Um93IiwibGlzdENvbEltZyIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiLCJidXR0b25IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBaEdGLENBTkYsRUFxSEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFLYTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGIsQ0FERixDQXJIRixDQURGO0FBaUlEOztHQXBNdUJwQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkYjQzNWM3NDNkMWE5YjcxY2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxuICBMaXN0R3JvdXAsXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5jb25zdCBjYXRlZ29yaWVzQXJyYXkgPSBbXG4gIFwic29mdHdhcmUtZGV2XCIsXG4gIFwiZGVzaWduXCIsXG4gIFwibWFya2V0aW5nXCIsXG4gIFwic2FsZXNcIixcbiAgXCJkYXRhXCIsXG4gIFwiZGV2b3BzXCIsXG4gIFwiaHJcIixcbiAgXCJxYVwiLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGpvYnM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7IC8vdGFrIGt1cndhIGthemRlIGFwaSBtYSB0dSBpbm5lIGt1cndhIHptaWVuZW5cblxuICBjb25zdCBbcmVzdWx0cywgdXBkYXRlUmVzdWx0c10gPSB1c2VTdGF0ZShkZWZhdWx0UmVzdWx0cyk7XG5cbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0UGFnZUl0ZW06IDAsXG4gICAgbGFzdFBhZ2VJdGVtOiAxNSxcbiAgfSk7XG5cbiAgY29uc3QgcHJldlBhZ2VSZWYgPSB1c2VSZWYoKTsgLy8wLk5hbiAxLjAgMi4zIDMuMyA0LjMrM1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZQYWdlUmVmLmN1cnJlbnQgPSBwYWdlO1xuICB9KTtcbiAgY29uc3QgcHJldlBhZ2UgPSBwcmV2UGFnZVJlZi5jdXJyZW50O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0U2VhcmNoKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP3NlYXJjaD0ke3NlYXJjaFZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5MShidXR0b25WYWx1ZSkge1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcblxuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2NhdGVnb3J5PSR7YnV0dG9uVmFsdWV9JmxpbWl0PTUwYDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdXBkYXRlUmVzdWx0cyhjYXRlZ29yeURhdGEuam9icyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0UGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogMTUsXG4gICAgICAgIGxhc3RQYWdlSXRlbTogMzAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDAgJiYgcGFnZS5sYXN0UGFnZUl0ZW0gPCByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSArIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmxhc3RQYWdlSXRlbSA+PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coXCJrb25pZWNcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzUGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlbW90ZSBqb2IgZm9yIHUhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+UmVtb3RlIGpvYiBmb3IgdSE8L2gxPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkZXJ9PlxuICAgICAgICAgIEp1c3QgZmluZCB5b3VyIGRyZWFtIGpvYiBhbmQgc3RhcnQgZWFybmluZyBtb25leVxuICAgICAgICA8L2gyPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkJveH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllc0FycmF5Lm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5MShyZXN1bHQpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBrZXk9e3Jlc3VsdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7cmVzdWx0c1xuICAgICAgICAgICAgLnNsaWNlKHBhZ2UuZmlyc3RQYWdlSXRlbSwgcGFnZS5sYXN0UGFnZUl0ZW0pXG4gICAgICAgICAgICAubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IGtleT17cmVzdWx0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cCBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Um93fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcmVtb3RpdmUuaW8vam9iLyR7cmVzdWx0LmlkfS9sb2dvIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+IHtyZXN1bHQudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xDb21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueU5hbWVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkhhbmRsZXJ9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9