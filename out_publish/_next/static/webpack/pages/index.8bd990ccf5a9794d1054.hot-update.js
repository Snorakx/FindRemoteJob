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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    firstPageItem: 0,
    lastPageItem: 15
  }),
      page = _useState4[0],
      setPage = _useState4[1];

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
              setLoading(true);
              e.preventDefault();
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?search=".concat(searchValue);
              _context.next = 6;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              searchData = _context.sent;
              updateResults(searchData.jobs);
              console.log(searchValue);

            case 12:
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
              setLoading(true);
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue, "&limit=50");
              _context2.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              categoryData = _context2.sent;
              updateResults(categoryData.jobs);

            case 10:
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
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
        lineNumber: 129,
        columnNumber: 17
      }
    }, result);
  }))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 23
      }
    }, result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 206,
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
      lineNumber: 209,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 22
    }
  }))));
}

_s(Home, "eC4hcPrVa2Nm9a2QMSmRLeH/dKs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlyc3RQYWdlSXRlbSIsImxhc3RQYWdlSXRlbSIsInBhZ2UiLCJzZXRQYWdlIiwicHJldlBhZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJldlBhZ2UiLCJoYW5kbGVPblN1Ym1pdFNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3h5dXJsIiwic2VhcmNoRW5kcG9pbnQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJzZWFyY2hEYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhdGVnb3J5MSIsImJ1dHRvblZhbHVlIiwiY2F0ZWdvcnlEYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJsZW5ndGgiLCJuZXh0UGFnZUNvdW50Rmlyc3RJdGVtIiwibmV4dFBhZ2VDb3VudExhc3RJdGVtIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwic3R5bGVzIiwiaGVhZGVyIiwic2Vjb25kSGVhZGVyIiwiY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lciIsImNhdGVnb3JpZXNCdXR0b25Cb3giLCJtYXAiLCJyZXN1bHQiLCJjYXRlZ29yaWVzQnV0dG9uIiwic2VhcmNoRm9ybSIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJ1cmwiLCJpZCIsImxpc3RSb3ciLCJsaXN0Q29sSW1nIiwibGlzdENvbFRpdGxlIiwidGl0bGVUZXh0IiwidGl0bGUiLCJsaXN0Q29sQ29tcGFueSIsImNvbXBhbnlOYW1lVGV4dCIsImNvbXBhbnlfbmFtZSIsImJ1dHRvbkhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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LFNBQUssTUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBekZGLENBTkYsRUE4R0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFLYTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGIsQ0FERixDQTlHRixDQURGO0FBMEhEOztHQWpNdUJ0QyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiZDk5MGNjZjVhOTc5NGQxMDU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxuICBMaXN0R3JvdXAsXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5jb25zdCBjYXRlZ29yaWVzQXJyYXkgPSBbXG4gIFwic29mdHdhcmUtZGV2XCIsXG4gIFwiZGVzaWduXCIsXG4gIFwibWFya2V0aW5nXCIsXG4gIFwic2FsZXNcIixcbiAgXCJkYXRhXCIsXG4gIFwiZGV2b3BzXCIsXG4gIFwiaHJcIixcbiAgXCJxYVwiLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGpvYnM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7IC8vdGFrIGt1cndhIGthemRlIGFwaSBtYSB0dSBpbm5lIGt1cndhIHptaWVuZW5cblxuICBjb25zdCBbcmVzdWx0cywgdXBkYXRlUmVzdWx0c10gPSB1c2VTdGF0ZShkZWZhdWx0UmVzdWx0cyk7XG5cbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdFBhZ2VJdGVtOiAwLFxuICAgIGxhc3RQYWdlSXRlbTogMTUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQYWdlUmVmID0gdXNlUmVmKCk7IC8vMC5OYW4gMS4wIDIuMyAzLjMgNC4zKzNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2UGFnZVJlZi5jdXJyZW50ID0gcGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZQYWdlID0gcHJldlBhZ2VSZWYuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdFNlYXJjaChlKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP3NlYXJjaD0ke3NlYXJjaFZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5MShidXR0b25WYWx1ZSkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuXG4gICAgY29uc3Qgc2VhcmNoRW5kcG9pbnQgPSBgaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/Y2F0ZWdvcnk9JHtidXR0b25WYWx1ZX0mbGltaXQ9NTBgO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJveHl1cmwgKyBzZWFyY2hFbmRwb2ludCk7XG4gICAgY29uc3QgY2F0ZWdvcnlEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKGNhdGVnb3J5RGF0YS5qb2JzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiAxNSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiAzMCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCAmJiBwYWdlLmxhc3RQYWdlSXRlbSA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSArIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UubGFzdFBhZ2VJdGVtID49IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImtvbmllY1wiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDApIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVtb3RlIGpvYiBmb3IgdSE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5SZW1vdGUgam9iIGZvciB1ITwvaDE+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRlcn0+XG4gICAgICAgICAgSnVzdCBmaW5kIHlvdXIgZHJlYW0gam9iIGFuZCBzdGFydCBlYXJuaW5nIG1vbmV5XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9uQm94fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzQXJyYXkubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnkxKHJlc3VsdCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzdWx0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj4gKi99XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdFNlYXJjaH0+XG4gICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHdvcmQgdGhhdCB5b3UgYXNzb2NpYXRlIHdpdGggeW91ciBkcmVhbSByZW1vdGUgam9iIVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZWNpcGllbnQncyB1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtyZXN1bHRzXG4gICAgICAgICAgICAuc2xpY2UocGFnZS5maXJzdFBhZ2VJdGVtLCBwYWdlLmxhc3RQYWdlSXRlbSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IGtleT17cmVzdWx0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vcmVtb3RpdmUuaW8vam9iLyR7cmVzdWx0LmlkfS9sb2dvIGB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT4ge3Jlc3VsdC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5jb21wYW55X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25IYW5kbGVyfT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfSB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIGJsb2NrPlxuICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==