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
              // setLoading(true);
              e.preventDefault();
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?search=".concat(searchValue, "&limit=1");
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              searchData = _context.sent;
              updateResults(searchData.jobs); // setLoading(false);

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
              // setLoading(true);
              proxyurl = "https://cors-anywhere.herokuapp.com/";
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue, "&limit=1");
              _context2.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return res.json();

            case 7:
              categoryData = _context2.sent;
              updateResults(categoryData.jobs); // setLoading(false);

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
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
        lineNumber: 135,
        columnNumber: 17
      }
    }, result);
  }))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    if (loading === true) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
        animation: "grow",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 24
        }
      });
    } else {
      return __jsx("a", {
        href: result.url,
        key: result.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
        horizontal: true,
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 23
        }
      }, __jsx("img", {
        src: result.company_logo_url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 25
        }
      }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }
      }, result.company_name))));
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 216,
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
      lineNumber: 219,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlyc3RQYWdlSXRlbSIsImxhc3RQYWdlSXRlbSIsInBhZ2UiLCJzZXRQYWdlIiwicHJldlBhZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJldlBhZ2UiLCJoYW5kbGVPblN1Ym1pdFNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3h5dXJsIiwic2VhcmNoRW5kcG9pbnQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJzZWFyY2hEYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhdGVnb3J5MSIsImJ1dHRvblZhbHVlIiwiY2F0ZWdvcnlEYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJsZW5ndGgiLCJuZXh0UGFnZUNvdW50Rmlyc3RJdGVtIiwibmV4dFBhZ2VDb3VudExhc3RJdGVtIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwic3R5bGVzIiwiaGVhZGVyIiwic2Vjb25kSGVhZGVyIiwiY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lciIsImNhdGVnb3JpZXNCdXR0b25Cb3giLCJtYXAiLCJyZXN1bHQiLCJjYXRlZ29yaWVzQnV0dG9uIiwic2VhcmNoRm9ybSIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJ1cmwiLCJpZCIsImxpc3RSb3ciLCJsaXN0Q29sSW1nIiwiY29tcGFueV9sb2dvX3VybCIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiLCJidXR0b25IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0JBLElBQU1BLGVBQWUsR0FBRyxDQUN0QixjQURzQixFQUV0QixRQUZzQixFQUd0QixXQUhzQixFQUl0QixPQUpzQixFQUt0QixNQUxzQixFQU10QixRQU5zQixFQU90QixJQVBzQixFQVF0QixJQVJzQixDQUF4Qjs7QUFXZSxTQUFTQyxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQUEsbUJBQ0NBLElBREQsQ0FDN0JDLElBRDZCO0FBQUEsTUFDdkJDLGNBRHVCLDJCQUNOLEVBRE0sZUFDTzs7QUFEUCxrQkFHSkMsc0RBQVEsQ0FBQ0QsY0FBRCxDQUhKO0FBQUEsTUFHOUJFLE9BSDhCO0FBQUEsTUFHckJDLGFBSHFCOztBQUFBLG1CQUtDRixzREFBUSxDQUFDLEVBQUQsQ0FMVDtBQUFBLE1BSzlCRyxXQUw4QjtBQUFBLE1BS2pCQyxjQUxpQjs7QUFBQSxtQkFNUEosc0RBQVEsQ0FBQyxLQUFELENBTkQ7QUFBQSxNQU05QkssT0FOOEI7QUFBQSxNQU1yQkMsVUFOcUI7O0FBQUEsbUJBUWJOLHNEQUFRLENBQUM7QUFDL0JPLGlCQUFhLEVBQUUsQ0FEZ0I7QUFFL0JDLGdCQUFZLEVBQUU7QUFGaUIsR0FBRCxDQVJLO0FBQUEsTUFROUJDLElBUjhCO0FBQUEsTUFReEJDLE9BUndCOztBQWFyQyxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCLENBYnFDLENBYVA7O0FBQzlCQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsZUFBVyxDQUFDRyxPQUFaLEdBQXNCTCxJQUF0QjtBQUNELEdBRlEsQ0FBVDtBQUdBLE1BQU1NLFFBQVEsR0FBR0osV0FBVyxDQUFDRyxPQUE3Qjs7QUFqQnFDLFdBbUJ0QkUsb0JBbkJzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2TUFtQnJDLGlCQUFvQ0MsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFDQUEsZUFBQyxDQUFDQyxjQUFGO0FBQ01DLHNCQUhSLEdBR21CLHNDQUhuQjtBQUlRQyw0QkFKUix3REFJdUVqQixXQUp2RTtBQUFBO0FBQUEscUJBTW9Ca0IseURBQUssQ0FBQ0YsUUFBUSxHQUFHQyxjQUFaLENBTnpCOztBQUFBO0FBTVFFLGlCQU5SO0FBQUE7QUFBQSxxQkFPMkJBLEdBQUcsQ0FBQ0MsSUFBSixFQVAzQjs7QUFBQTtBQU9RQyx3QkFQUjtBQVFFdEIsMkJBQWEsQ0FBQ3NCLFVBQVUsQ0FBQzFCLElBQVosQ0FBYixDQVJGLENBU0U7O0FBRUEyQixxQkFBTyxDQUFDQyxHQUFSLENBQVl2QixXQUFaOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkJxQztBQUFBO0FBQUE7O0FBQUEsV0FnQ3RCd0IsZUFoQ3NCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQWdDckMsa0JBQStCQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNNVCxzQkFGUixHQUVtQixzQ0FGbkI7QUFJUUMsNEJBSlIsMERBSXlFUSxXQUp6RTtBQUFBO0FBQUEscUJBTW9CUCx5REFBSyxDQUFDRixRQUFRLEdBQUdDLGNBQVosQ0FOekI7O0FBQUE7QUFNUUUsaUJBTlI7QUFBQTtBQUFBLHFCQU82QkEsR0FBRyxDQUFDQyxJQUFKLEVBUDdCOztBQUFBO0FBT1FNLDBCQVBSO0FBU0UzQiwyQkFBYSxDQUFDMkIsWUFBWSxDQUFDL0IsSUFBZCxDQUFiLENBVEYsQ0FVRTs7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhDcUM7QUFBQTtBQUFBOztBQTZDckMsV0FBU2dDLGNBQVQsR0FBMEI7QUFDeEIsUUFBSXJCLElBQUksQ0FBQ0YsYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QkcsYUFBTyxDQUFDO0FBQ05ILHFCQUFhLEVBQUUsRUFEVDtBQUVOQyxvQkFBWSxFQUFFO0FBRlIsT0FBRCxDQUFQO0FBSUQsS0FMRCxNQUtPLElBQUlDLElBQUksQ0FBQ0YsYUFBTCxHQUFxQixDQUFyQixJQUEwQkUsSUFBSSxDQUFDRCxZQUFMLEdBQW9CUCxPQUFPLENBQUM4QixNQUExRCxFQUFrRTtBQUN2RSxVQUFJQyxzQkFBc0IsR0FBR3ZCLElBQUksQ0FBQ0YsYUFBTCxHQUFxQixFQUFsRDtBQUNBLFVBQUkwQixxQkFBcUIsR0FBR3hCLElBQUksQ0FBQ0QsWUFBTCxHQUFvQixFQUFoRDtBQUNBRSxhQUFPLENBQUM7QUFDTkgscUJBQWEsRUFBRXlCLHNCQURUO0FBRU54QixvQkFBWSxFQUFFeUI7QUFGUixPQUFELENBQVA7QUFJRCxLQVBNLE1BT0EsSUFBSXhCLElBQUksQ0FBQ0QsWUFBTCxJQUFxQlAsT0FBTyxDQUFDOEIsTUFBakMsRUFBeUM7QUFDOUNOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGOztBQUNELFdBQVNRLGtCQUFULEdBQThCO0FBQzVCLFFBQUl6QixJQUFJLENBQUNGLGFBQUwsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJrQixhQUFPLENBQUNDLEdBQVIsQ0FBWXpCLE9BQU8sQ0FBQzhCLE1BQXBCO0FBQ0QsS0FGRCxNQUVPLElBQUl0QixJQUFJLENBQUNGLGFBQUwsR0FBcUIsQ0FBekIsRUFBNEI7QUFDakMsVUFBSXlCLHNCQUFzQixHQUFHdkIsSUFBSSxDQUFDRixhQUFMLEdBQXFCLEVBQWxEO0FBQ0EsVUFBSTBCLHFCQUFxQixHQUFHeEIsSUFBSSxDQUFDRCxZQUFMLEdBQW9CLEVBQWhEO0FBQ0FFLGFBQU8sQ0FBQztBQUNOSCxxQkFBYSxFQUFFeUIsc0JBRFQ7QUFFTnhCLG9CQUFZLEVBQUV5QjtBQUZSLE9BQUQsQ0FBUDtBQUlEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRSw4REFBTSxDQUFDQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBR0U7QUFBSSxhQUFTLEVBQUVELDhEQUFNLENBQUNFLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBSEYsRUFNRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFFRiw4REFBTSxDQUFDRyx5QkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxhQUFTLEVBQUVILDhEQUFNLENBQUNJLG1CQURwQjtBQUVFLGtCQUFXLGVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHNUMsZUFBZSxDQUFDNkMsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQy9CLFdBQ0UsTUFBQyxzREFBRDtBQUNFLGVBQVMsRUFBRU4sOERBQU0sQ0FBQ08sZ0JBRHBCO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTWYsZUFBZSxDQUFDYyxNQUFELENBQXJCO0FBQUEsT0FGWDtBQUdFLGFBQU8sRUFBQyxXQUhWO0FBSUUsU0FBRyxFQUFFQSxNQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNR0EsTUFOSCxDQURGO0FBVUQsR0FYQSxDQUpILENBREYsQ0FORixFQStDRTtBQUFNLGFBQVMsRUFBRU4sOERBQU0sQ0FBQ1EsVUFBeEI7QUFBb0MsWUFBUSxFQUFFM0Isb0JBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsZUFBVyxFQUFDLCtEQURkO0FBRUUsa0JBQVcsc0JBRmI7QUFHRSx3QkFBaUIsY0FIbkI7QUFJRSxTQUFLLEVBQUViLFdBSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxhQUFPYixjQUFjLENBQUNhLENBQUMsQ0FBQzJCLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBLEtBTFo7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLFFBQUksRUFBQyxRQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsMERBQUQsQ0FBWSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLG1CQUFoQjtBQUFvQyxRQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBVkYsQ0FERixDQS9DRixFQWlFRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzVDLE9BQU8sQ0FDTDZDLEtBREYsQ0FDUXJDLElBQUksQ0FBQ0YsYUFEYixFQUM0QkUsSUFBSSxDQUFDRCxZQURqQyxFQUVFZ0MsR0FGRixDQUVNLFVBQUNDLE1BQUQsRUFBWTtBQUNmLFFBQUlwQyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsYUFBTyxNQUFDLHVEQUFEO0FBQVMsaUJBQVMsRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUNFO0FBQUcsWUFBSSxFQUFFb0MsTUFBTSxDQUFDTSxHQUFoQjtBQUFxQixXQUFHLEVBQUVOLE1BQU0sQ0FBQ08sRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMseURBQUQ7QUFBVyxrQkFBVSxFQUFFLElBQXZCO0FBQTZCLGlCQUFTLEVBQUViLDhEQUFNLENBQUNjLE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHlEQUFELENBQVcsSUFBWDtBQUFnQixpQkFBUyxFQUFFZCw4REFBTSxDQUFDZSxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQUVULE1BQU0sQ0FBQ1UsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBSUUsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsaUJBQVMsRUFBRWhCLDhEQUFNLENBQUNpQixZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFakIsOERBQU0sQ0FBQ2tCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBb0NaLE1BQU0sQ0FBQ2EsS0FBM0MsTUFERixDQUpGLEVBT0UsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsaUJBQVMsRUFBRW5CLDhEQUFNLENBQUNvQixjQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFcEIsOERBQU0sQ0FBQ3FCLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR2YsTUFBTSxDQUFDZ0IsWUFEVixDQURGLENBUEYsQ0FERixDQURGO0FBaUJEO0FBQ0YsR0F4QkYsQ0FESCxDQWpFRixFQTZGRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFFdEIsOERBQU0sQ0FBQ3VCLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFNUIsY0FBakI7QUFBaUMsV0FBTyxFQUFDLFNBQXpDO0FBQW1ELFFBQUksRUFBQyxJQUF4RDtBQUE2RCxTQUFLLE1BQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFSSxrQkFEWDtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxTQUFLLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQTdGRixDQU5GLEVBa0hFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBS2E7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxiLENBREYsQ0FsSEYsQ0FERjtBQThIRDs7R0F6TXVCdEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTc2YWUxMDc3ODM2ZWIyMWFmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlzdEdyb3VwLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgU3Bpbm5lcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBkZWZhdWx0RW5kcG9pbnQgPVxuICBcImh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2xpbWl0PTUmYWZ0ZXJfaW5kZXg9NVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuY29uc3QgY2F0ZWdvcmllc0FycmF5ID0gW1xuICBcInNvZnR3YXJlLWRldlwiLFxuICBcImRlc2lnblwiLFxuICBcIm1hcmtldGluZ1wiLFxuICBcInNhbGVzXCIsXG4gIFwiZGF0YVwiLFxuICBcImRldm9wc1wiLFxuICBcImhyXCIsXG4gIFwicWFcIixcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBqb2JzOiBkZWZhdWx0UmVzdWx0cyA9IFtdIH0gPSBkYXRhOyAvL3RhayBrdXJ3YSBrYXpkZSBhcGkgbWEgdHUgaW5uZSBrdXJ3YSB6bWllbmVuXG5cbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3RQYWdlSXRlbTogMCxcbiAgICBsYXN0UGFnZUl0ZW06IDE1LFxuICB9KTtcblxuICBjb25zdCBwcmV2UGFnZVJlZiA9IHVzZVJlZigpOyAvLzAuTmFuIDEuMCAyLjMgMy4zIDQuMyszXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldlBhZ2VSZWYuY3VycmVudCA9IHBhZ2U7XG4gIH0pO1xuICBjb25zdCBwcmV2UGFnZSA9IHByZXZQYWdlUmVmLmN1cnJlbnQ7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXRTZWFyY2goZSkge1xuICAgIC8vIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9zZWFyY2g9JHtzZWFyY2hWYWx1ZX0mbGltaXQ9MWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG4gICAgLy8gc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2hWYWx1ZSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnkxKGJ1dHRvblZhbHVlKSB7XG4gICAgLy8gc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBwcm94eXVybCA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XG5cbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9jYXRlZ29yeT0ke2J1dHRvblZhbHVlfSZsaW1pdD0xYDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICB1cGRhdGVSZXN1bHRzKGNhdGVnb3J5RGF0YS5qb2JzKTtcbiAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiAxNSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiAzMCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCAmJiBwYWdlLmxhc3RQYWdlSXRlbSA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSArIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UubGFzdFBhZ2VJdGVtID49IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImtvbmllY1wiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDApIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVtb3RlIGpvYiBmb3IgdSE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5SZW1vdGUgam9iIGZvciB1ITwvaDE+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRlcn0+XG4gICAgICAgICAgSnVzdCBmaW5kIHlvdXIgZHJlYW0gam9iIGFuZCBzdGFydCBlYXJuaW5nIG1vbmV5XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9uQm94fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzQXJyYXkubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnkxKHJlc3VsdCl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzdWx0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj4gKi99XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdFNlYXJjaH0+XG4gICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHdvcmQgdGhhdCB5b3UgYXNzb2NpYXRlIHdpdGggeW91ciBkcmVhbSByZW1vdGUgam9iIVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZWNpcGllbnQncyB1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtyZXN1bHRzXG4gICAgICAgICAgICAuc2xpY2UocGFnZS5maXJzdFBhZ2VJdGVtLCBwYWdlLmxhc3RQYWdlSXRlbSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8U3Bpbm5lciBhbmltYXRpb249XCJncm93XCIgLz47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IGtleT17cmVzdWx0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cCBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Um93fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVzdWx0LmNvbXBhbnlfbG9nb191cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT4ge3Jlc3VsdC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbENvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkhhbmRsZXJ9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9