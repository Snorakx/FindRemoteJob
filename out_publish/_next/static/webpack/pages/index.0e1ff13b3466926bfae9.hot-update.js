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
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue);
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
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 202,
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
      lineNumber: 205,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXRlZ29yeTEiLCJidXR0b25WYWx1ZSIsImNhdGVnb3J5RGF0YSIsImhhbmRsZU5leHRQYWdlIiwibGVuZ3RoIiwibmV4dFBhZ2VDb3VudEZpcnN0SXRlbSIsIm5leHRQYWdlQ291bnRMYXN0SXRlbSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInN0eWxlcyIsImhlYWRlciIsInNlY29uZEhlYWRlciIsImNhdGVnb3JpZXNCdXR0b25Db250YWluZXIiLCJjYXRlZ29yaWVzQnV0dG9uQm94IiwibWFwIiwicmVzdWx0IiwiY2F0ZWdvcmllc0J1dHRvbiIsInNlYXJjaEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsaWNlIiwidXJsIiwiaWQiLCJsaXN0Um93IiwibGlzdENvbEltZyIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiLCJidXR0b25IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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QUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBS2E7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxiLENBREYsQ0E5R0YsQ0FERjtBQTBIRDs7R0E3THVCcEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTFmZjEzYjM0NjY5MjZiZmFlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlzdEdyb3VwLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBkZWZhdWx0RW5kcG9pbnQgPSBcImh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuY29uc3QgY2F0ZWdvcmllc0FycmF5ID0gW1xuICBcInNvZnR3YXJlLWRldlwiLFxuICBcImRlc2lnblwiLFxuICBcIm1hcmtldGluZ1wiLFxuICBcInNhbGVzXCIsXG4gIFwiZGF0YVwiLFxuICBcImRldm9wc1wiLFxuICBcImhyXCIsXG4gIFwicWFcIixcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBqb2JzOiBkZWZhdWx0UmVzdWx0cyA9IFtdIH0gPSBkYXRhOyAvL3RhayBrdXJ3YSBrYXpkZSBhcGkgbWEgdHUgaW5uZSBrdXJ3YSB6bWllbmVuXG5cbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdFBhZ2VJdGVtOiAwLFxuICAgIGxhc3RQYWdlSXRlbTogMTUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQYWdlUmVmID0gdXNlUmVmKCk7IC8vMC5OYW4gMS4wIDIuMyAzLjMgNC4zKzNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2UGFnZVJlZi5jdXJyZW50ID0gcGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZQYWdlID0gcHJldlBhZ2VSZWYuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdFNlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9zZWFyY2g9JHtzZWFyY2hWYWx1ZX1gO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJveHl1cmwgKyBzZWFyY2hFbmRwb2ludCk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdXBkYXRlUmVzdWx0cyhzZWFyY2hEYXRhLmpvYnMpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDYXRlZ29yeTEoYnV0dG9uVmFsdWUpIHtcbiAgICBjb25zdCBwcm94eXVybCA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XG5cbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9jYXRlZ29yeT0ke2J1dHRvblZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBjYXRlZ29yeURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHVwZGF0ZVJlc3VsdHMoY2F0ZWdvcnlEYXRhLmpvYnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dFBhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IDE1LFxuICAgICAgICBsYXN0UGFnZUl0ZW06IDMwLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwICYmIHBhZ2UubGFzdFBhZ2VJdGVtIDwgcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5sYXN0UGFnZUl0ZW0gPj0gcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwia29uaWVjXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c1BhZ2UoKSB7XG4gICAgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZW1vdGUgam9iIGZvciB1ITwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlJlbW90ZSBqb2IgZm9yIHUhPC9oMT5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kSGVhZGVyfT5cbiAgICAgICAgICBKdXN0IGZpbmQgeW91ciBkcmVhbSBqb2IgYW5kIHN0YXJ0IGVhcm5pbmcgbW9uZXlcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b25Cb3h9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhdGVnb3JpZXNBcnJheS5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeTEocmVzdWx0KX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj4gKi99XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdFNlYXJjaH0+XG4gICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHdvcmQgdGhhdCB5b3UgYXNzb2NpYXRlIHdpdGggeW91ciBkcmVhbSByZW1vdGUgam9iIVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZWNpcGllbnQncyB1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtyZXN1bHRzXG4gICAgICAgICAgICAuc2xpY2UocGFnZS5maXJzdFBhZ2VJdGVtLCBwYWdlLmxhc3RQYWdlSXRlbSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IGtleT17cmVzdWx0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vcmVtb3RpdmUuaW8vam9iLyR7cmVzdWx0LmlkfS9sb2dvIGB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT4ge3Jlc3VsdC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5jb21wYW55X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25IYW5kbGVyfT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfSB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIGJsb2NrPlxuICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aW91cyBQYWdlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==