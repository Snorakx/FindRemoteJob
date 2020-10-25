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
              setLoading(false);
              updateResults(searchData.jobs);
              console.log(searchValue);

            case 13:
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
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue, "&limit=1");
              _context2.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              categoryData = _context2.sent;
              updateResults(categoryData.jobs);
              setLoading(false);

            case 11:
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
        src: "https://remotive.io/job/".concat(result.id, "/logo "),
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
          lineNumber: 202,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }
      }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      }, result.company_name))));
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
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
      lineNumber: 221,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5IiwiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlyc3RQYWdlSXRlbSIsImxhc3RQYWdlSXRlbSIsInBhZ2UiLCJzZXRQYWdlIiwicHJldlBhZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJldlBhZ2UiLCJoYW5kbGVPblN1Ym1pdFNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3h5dXJsIiwic2VhcmNoRW5kcG9pbnQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJzZWFyY2hEYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhdGVnb3J5MSIsImJ1dHRvblZhbHVlIiwiY2F0ZWdvcnlEYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJsZW5ndGgiLCJuZXh0UGFnZUNvdW50Rmlyc3RJdGVtIiwibmV4dFBhZ2VDb3VudExhc3RJdGVtIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwic3R5bGVzIiwiaGVhZGVyIiwic2Vjb25kSGVhZGVyIiwiY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lciIsImNhdGVnb3JpZXNCdXR0b25Cb3giLCJtYXAiLCJyZXN1bHQiLCJjYXRlZ29yaWVzQnV0dG9uIiwic2VhcmNoRm9ybSIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJ1cmwiLCJpZCIsImxpc3RSb3ciLCJsaXN0Q29sSW1nIiwibGlzdENvbFRpdGxlIiwidGl0bGVUZXh0IiwidGl0bGUiLCJsaXN0Q29sQ29tcGFueSIsImNvbXBhbnlOYW1lVGV4dCIsImNvbXBhbnlfbmFtZSIsImJ1dHRvbkhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3QkEsSUFBTUEsZUFBZSxHQUFHLENBQ3RCLGNBRHNCLEVBRXRCLFFBRnNCLEVBR3RCLFdBSHNCLEVBSXRCLE9BSnNCLEVBS3RCLE1BTHNCLEVBTXRCLFFBTnNCLEVBT3RCLElBUHNCLEVBUXRCLElBUnNCLENBQXhCOztBQVdlLFNBQVNDLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxtQkFDQ0EsSUFERCxDQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsY0FEdUIsMkJBQ04sRUFETSxlQUNPOztBQURQLGtCQUdKQyxzREFBUSxDQUFDRCxjQUFELENBSEo7QUFBQSxNQUc5QkUsT0FIOEI7QUFBQSxNQUdyQkMsYUFIcUI7O0FBQUEsbUJBS0NGLHNEQUFRLENBQUMsRUFBRCxDQUxUO0FBQUEsTUFLOUJHLFdBTDhCO0FBQUEsTUFLakJDLGNBTGlCOztBQUFBLG1CQU1QSixzREFBUSxDQUFDLEtBQUQsQ0FORDtBQUFBLE1BTTlCSyxPQU44QjtBQUFBLE1BTXJCQyxVQU5xQjs7QUFBQSxtQkFRYk4sc0RBQVEsQ0FBQztBQUMvQk8saUJBQWEsRUFBRSxDQURnQjtBQUUvQkMsZ0JBQVksRUFBRTtBQUZpQixHQUFELENBUks7QUFBQSxNQVE5QkMsSUFSOEI7QUFBQSxNQVF4QkMsT0FSd0I7O0FBYXJDLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sRUFBMUIsQ0FicUMsQ0FhUDs7QUFDOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixlQUFXLENBQUNHLE9BQVosR0FBc0JMLElBQXRCO0FBQ0QsR0FGUSxDQUFUO0FBR0EsTUFBTU0sUUFBUSxHQUFHSixXQUFXLENBQUNHLE9BQTdCOztBQWpCcUMsV0FtQnRCRSxvQkFuQnNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZNQW1CckMsaUJBQW9DQyxDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRVgsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVcsZUFBQyxDQUFDQyxjQUFGO0FBQ01DLHNCQUhSLEdBR21CLHNDQUhuQjtBQUlRQyw0QkFKUix3REFJdUVqQixXQUp2RTtBQUFBO0FBQUEscUJBTW9Ca0IseURBQUssQ0FBQ0YsUUFBUSxHQUFHQyxjQUFaLENBTnpCOztBQUFBO0FBTVFFLGlCQU5SO0FBQUE7QUFBQSxxQkFPMkJBLEdBQUcsQ0FBQ0MsSUFBSixFQVAzQjs7QUFBQTtBQU9RQyx3QkFQUjtBQVFFbEIsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUosMkJBQWEsQ0FBQ3NCLFVBQVUsQ0FBQzFCLElBQVosQ0FBYjtBQUVBMkIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsV0FBWjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5CcUM7QUFBQTtBQUFBOztBQUFBLFdBZ0N0QndCLGVBaENzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TUFnQ3JDLGtCQUErQkMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0V0Qix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNNYSxzQkFGUixHQUVtQixzQ0FGbkI7QUFJUUMsNEJBSlIsMERBSXlFUSxXQUp6RTtBQUFBO0FBQUEscUJBTW9CUCx5REFBSyxDQUFDRixRQUFRLEdBQUdDLGNBQVosQ0FOekI7O0FBQUE7QUFNUUUsaUJBTlI7QUFBQTtBQUFBLHFCQU82QkEsR0FBRyxDQUFDQyxJQUFKLEVBUDdCOztBQUFBO0FBT1FNLDBCQVBSO0FBU0UzQiwyQkFBYSxDQUFDMkIsWUFBWSxDQUFDL0IsSUFBZCxDQUFiO0FBQ0FRLHdCQUFVLENBQUMsS0FBRCxDQUFWOztBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaENxQztBQUFBO0FBQUE7O0FBNkNyQyxXQUFTd0IsY0FBVCxHQUEwQjtBQUN4QixRQUFJckIsSUFBSSxDQUFDRixhQUFMLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCRyxhQUFPLENBQUM7QUFDTkgscUJBQWEsRUFBRSxFQURUO0FBRU5DLG9CQUFZLEVBQUU7QUFGUixPQUFELENBQVA7QUFJRCxLQUxELE1BS08sSUFBSUMsSUFBSSxDQUFDRixhQUFMLEdBQXFCLENBQXJCLElBQTBCRSxJQUFJLENBQUNELFlBQUwsR0FBb0JQLE9BQU8sQ0FBQzhCLE1BQTFELEVBQWtFO0FBQ3ZFLFVBQUlDLHNCQUFzQixHQUFHdkIsSUFBSSxDQUFDRixhQUFMLEdBQXFCLEVBQWxEO0FBQ0EsVUFBSTBCLHFCQUFxQixHQUFHeEIsSUFBSSxDQUFDRCxZQUFMLEdBQW9CLEVBQWhEO0FBQ0FFLGFBQU8sQ0FBQztBQUNOSCxxQkFBYSxFQUFFeUIsc0JBRFQ7QUFFTnhCLG9CQUFZLEVBQUV5QjtBQUZSLE9BQUQsQ0FBUDtBQUlELEtBUE0sTUFPQSxJQUFJeEIsSUFBSSxDQUFDRCxZQUFMLElBQXFCUCxPQUFPLENBQUM4QixNQUFqQyxFQUF5QztBQUM5Q04sYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU1Esa0JBQVQsR0FBOEI7QUFDNUIsUUFBSXpCLElBQUksQ0FBQ0YsYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QmtCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZekIsT0FBTyxDQUFDOEIsTUFBcEI7QUFDRCxLQUZELE1BRU8sSUFBSXRCLElBQUksQ0FBQ0YsYUFBTCxHQUFxQixDQUF6QixFQUE0QjtBQUNqQyxVQUFJeUIsc0JBQXNCLEdBQUd2QixJQUFJLENBQUNGLGFBQUwsR0FBcUIsRUFBbEQ7QUFDQSxVQUFJMEIscUJBQXFCLEdBQUd4QixJQUFJLENBQUNELFlBQUwsR0FBb0IsRUFBaEQ7QUFDQUUsYUFBTyxDQUFDO0FBQ05ILHFCQUFhLEVBQUV5QixzQkFEVDtBQUVOeEIsb0JBQVksRUFBRXlCO0FBRlIsT0FBRCxDQUFQO0FBSUQ7QUFDRjs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFHRTtBQUFJLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFIRixFQU1FLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLHlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksbUJBRHBCO0FBRUUsa0JBQVcsZUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUc1QyxlQUFlLENBQUM2QyxHQUFoQixDQUFvQixVQUFDQyxNQUFELEVBQVk7QUFDL0IsV0FDRSxNQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFFTiw4REFBTSxDQUFDTyxnQkFEcEI7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNZixlQUFlLENBQUNjLE1BQUQsQ0FBckI7QUFBQSxPQUZYO0FBR0UsYUFBTyxFQUFDLFdBSFY7QUFJRSxTQUFHLEVBQUVBLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HQSxNQU5ILENBREY7QUFVRCxHQVhBLENBSkgsQ0FERixDQU5GLEVBK0NFO0FBQU0sYUFBUyxFQUFFTiw4REFBTSxDQUFDUSxVQUF4QjtBQUFvQyxZQUFRLEVBQUUzQixvQkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxlQUFXLEVBQUMsK0RBRGQ7QUFFRSxrQkFBVyxzQkFGYjtBQUdFLHdCQUFpQixjQUhuQjtBQUlFLFNBQUssRUFBRWIsV0FKVDtBQUtFLFlBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGFBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDMkIsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUEsS0FMWjtBQU1FLFFBQUksRUFBQyxPQU5QO0FBT0UsUUFBSSxFQUFDLFFBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUUsTUFBQywwREFBRCxDQUFZLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsbUJBQWhCO0FBQW9DLFFBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FWRixDQURGLENBL0NGLEVBaUVFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUMsT0FBTyxDQUNMNkMsS0FERixDQUNRckMsSUFBSSxDQUFDRixhQURiLEVBQzRCRSxJQUFJLENBQUNELFlBRGpDLEVBRUVnQyxHQUZGLENBRU0sVUFBQ0MsTUFBRCxFQUFZO0FBQ2YsUUFBSXBDLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixhQUFPLE1BQUMsdURBQUQ7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQ0U7QUFBRyxZQUFJLEVBQUVvQyxNQUFNLENBQUNNLEdBQWhCO0FBQXFCLFdBQUcsRUFBRU4sTUFBTSxDQUFDTyxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx5REFBRDtBQUFXLGtCQUFVLEVBQUUsSUFBdkI7QUFBNkIsaUJBQVMsRUFBRWIsOERBQU0sQ0FBQ2MsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMseURBQUQsQ0FBVyxJQUFYO0FBQWdCLGlCQUFTLEVBQUVkLDhEQUFNLENBQUNlLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFdBQUcsb0NBQTZCVCxNQUFNLENBQUNPLEVBQXBDLFdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFNRSxNQUFDLHlEQUFELENBQVcsSUFBWDtBQUFnQixpQkFBUyxFQUFFYiw4REFBTSxDQUFDZ0IsWUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRWhCLDhEQUFNLENBQUNpQixTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQW9DWCxNQUFNLENBQUNZLEtBQTNDLE1BREYsQ0FORixFQVNFLE1BQUMseURBQUQsQ0FBVyxJQUFYO0FBQWdCLGlCQUFTLEVBQUVsQiw4REFBTSxDQUFDbUIsY0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRW5CLDhEQUFNLENBQUNvQixlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dkLE1BQU0sQ0FBQ2UsWUFEVixDQURGLENBVEYsQ0FERixDQURGO0FBbUJEO0FBQ0YsR0ExQkYsQ0FESCxDQWpFRixFQStGRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFFckIsOERBQU0sQ0FBQ3NCLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFM0IsY0FBakI7QUFBaUMsV0FBTyxFQUFDLFNBQXpDO0FBQW1ELFFBQUksRUFBQyxJQUF4RDtBQUE2RCxTQUFLLE1BQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFSSxrQkFEWDtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxTQUFLLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQS9GRixDQU5GLEVBb0hFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBS2E7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxiLENBREYsQ0FwSEYsQ0FERjtBQWdJRDs7R0EzTXVCdEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDUzNDhiODhlNTVkNmVhZTY3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlzdEdyb3VwLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgU3Bpbm5lcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBkZWZhdWx0RW5kcG9pbnQgPVxuICBcImh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2xpbWl0PTUmYWZ0ZXJfaW5kZXg9NVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuY29uc3QgY2F0ZWdvcmllc0FycmF5ID0gW1xuICBcInNvZnR3YXJlLWRldlwiLFxuICBcImRlc2lnblwiLFxuICBcIm1hcmtldGluZ1wiLFxuICBcInNhbGVzXCIsXG4gIFwiZGF0YVwiLFxuICBcImRldm9wc1wiLFxuICBcImhyXCIsXG4gIFwicWFcIixcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBqb2JzOiBkZWZhdWx0UmVzdWx0cyA9IFtdIH0gPSBkYXRhOyAvL3RhayBrdXJ3YSBrYXpkZSBhcGkgbWEgdHUgaW5uZSBrdXJ3YSB6bWllbmVuXG5cbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3RQYWdlSXRlbTogMCxcbiAgICBsYXN0UGFnZUl0ZW06IDE1LFxuICB9KTtcblxuICBjb25zdCBwcmV2UGFnZVJlZiA9IHVzZVJlZigpOyAvLzAuTmFuIDEuMCAyLjMgMy4zIDQuMyszXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldlBhZ2VSZWYuY3VycmVudCA9IHBhZ2U7XG4gIH0pO1xuICBjb25zdCBwcmV2UGFnZSA9IHByZXZQYWdlUmVmLmN1cnJlbnQ7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXRTZWFyY2goZSkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9zZWFyY2g9JHtzZWFyY2hWYWx1ZX1gO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJveHl1cmwgKyBzZWFyY2hFbmRwb2ludCk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgdXBkYXRlUmVzdWx0cyhzZWFyY2hEYXRhLmpvYnMpO1xuXG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5MShidXR0b25WYWx1ZSkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuXG4gICAgY29uc3Qgc2VhcmNoRW5kcG9pbnQgPSBgaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/Y2F0ZWdvcnk9JHtidXR0b25WYWx1ZX0mbGltaXQ9MWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBjYXRlZ29yeURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgdXBkYXRlUmVzdWx0cyhjYXRlZ29yeURhdGEuam9icyk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0UGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogMTUsXG4gICAgICAgIGxhc3RQYWdlSXRlbTogMzAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDAgJiYgcGFnZS5sYXN0UGFnZUl0ZW0gPCByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSArIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmxhc3RQYWdlSXRlbSA+PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coXCJrb25pZWNcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzUGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlbW90ZSBqb2IgZm9yIHUhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+UmVtb3RlIGpvYiBmb3IgdSE8L2gxPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkZXJ9PlxuICAgICAgICAgIEp1c3QgZmluZCB5b3VyIGRyZWFtIGpvYiBhbmQgc3RhcnQgZWFybmluZyBtb25leVxuICAgICAgICA8L2gyPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkJveH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllc0FycmF5Lm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5MShyZXN1bHQpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBrZXk9e3Jlc3VsdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7cmVzdWx0c1xuICAgICAgICAgICAgLnNsaWNlKHBhZ2UuZmlyc3RQYWdlSXRlbSwgcGFnZS5sYXN0UGFnZUl0ZW0pXG4gICAgICAgICAgICAubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIC8+O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSBrZXk9e3Jlc3VsdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xJbWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3JlbW90aXZlLmlvL2pvYi8ke3Jlc3VsdC5pZH0vbG9nbyBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVRleHR9PiB7cmVzdWx0LnRpdGxlfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlOYW1lVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSGFuZGxlcn0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBibG9jaz5cbiAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=