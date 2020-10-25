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
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
    variant: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Categories"))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 126,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 168,
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
      lineNumber: 171,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOZXh0UGFnZSIsImxlbmd0aCIsIm5leHRQYWdlQ291bnRGaXJzdEl0ZW0iLCJuZXh0UGFnZUNvdW50TGFzdEl0ZW0iLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJzZWNvbmRIZWFkZXIiLCJjYXRlZ29yaWVzQnV0dG9uQ29udGFpbmVyIiwiY2F0ZWdvcmllc0J1dHRvbkJveCIsImNhdGVnb3JpZXNCdXR0b24iLCJzZWFyY2hGb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsIm1hcCIsInJlc3VsdCIsInVybCIsImlkIiwibGlzdFJvdyIsImxpc3RDb2xJbWciLCJsaXN0Q29sVGl0bGUiLCJ0aXRsZVRleHQiLCJ0aXRsZSIsImxpc3RDb2xDb21wYW55IiwiY29tcGFueU5hbWVUZXh0IiwiY29tcGFueV9uYW1lIiwiYnV0dG9uSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF1QmUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLG1CQUNDQSxJQURELENBQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxjQUR1QiwyQkFDTixFQURNLGVBQ087O0FBRFAsa0JBR0pDLHNEQUFRLENBQUNELGNBQUQsQ0FISjtBQUFBLE1BRzlCRSxPQUg4QjtBQUFBLE1BR3JCQyxhQUhxQjs7QUFBQSxtQkFLQ0Ysc0RBQVEsQ0FBQyxFQUFELENBTFQ7QUFBQSxNQUs5QkcsV0FMOEI7QUFBQSxNQUtqQkMsY0FMaUI7O0FBQUEsbUJBTWJKLHNEQUFRLENBQUM7QUFDL0JLLGlCQUFhLEVBQUUsQ0FEZ0I7QUFFL0JDLGdCQUFZLEVBQUU7QUFGaUIsR0FBRCxDQU5LO0FBQUEsTUFNOUJDLElBTjhCO0FBQUEsTUFNeEJDLE9BTndCOztBQVdyQyxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCLENBWHFDLENBV1A7O0FBQzlCQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsZUFBVyxDQUFDRyxPQUFaLEdBQXNCTCxJQUF0QjtBQUNELEdBRlEsQ0FBVDtBQUdBLE1BQU1NLFFBQVEsR0FBR0osV0FBVyxDQUFDRyxPQUE3Qjs7QUFmcUMsV0FpQnRCRSxvQkFqQnNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZNQWlCckMsaUJBQW9DQyxDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGO0FBQ01DLHNCQUZSLEdBRW1CLHNDQUZuQjtBQUdRQyw0QkFIUix3REFHdUVmLFdBSHZFO0FBQUE7QUFBQSxxQkFLb0JnQix5REFBSyxDQUFDRixRQUFRLEdBQUdDLGNBQVosQ0FMekI7O0FBQUE7QUFLUUUsaUJBTFI7QUFBQTtBQUFBLHFCQU0yQkEsR0FBRyxDQUFDQyxJQUFKLEVBTjNCOztBQUFBO0FBTVFDLHdCQU5SO0FBT0VwQiwyQkFBYSxDQUFDb0IsVUFBVSxDQUFDeEIsSUFBWixDQUFiO0FBQ0F5QixxQkFBTyxDQUFDQyxHQUFSLENBQVlyQixXQUFaOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakJxQztBQUFBO0FBQUE7O0FBNEJyQyxXQUFTc0IsY0FBVCxHQUEwQjtBQUN4QixRQUFJbEIsSUFBSSxDQUFDRixhQUFMLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCRyxhQUFPLENBQUM7QUFDTkgscUJBQWEsRUFBRSxFQURUO0FBRU5DLG9CQUFZLEVBQUU7QUFGUixPQUFELENBQVA7QUFJRCxLQUxELE1BS08sSUFBSUMsSUFBSSxDQUFDRixhQUFMLEdBQXFCLENBQXJCLElBQTBCRSxJQUFJLENBQUNELFlBQUwsR0FBb0JMLE9BQU8sQ0FBQ3lCLE1BQTFELEVBQWtFO0FBQ3ZFLFVBQUlDLHNCQUFzQixHQUFHcEIsSUFBSSxDQUFDRixhQUFMLEdBQXFCLEVBQWxEO0FBQ0EsVUFBSXVCLHFCQUFxQixHQUFHckIsSUFBSSxDQUFDRCxZQUFMLEdBQW9CLEVBQWhEO0FBQ0FFLGFBQU8sQ0FBQztBQUNOSCxxQkFBYSxFQUFFc0Isc0JBRFQ7QUFFTnJCLG9CQUFZLEVBQUVzQjtBQUZSLE9BQUQsQ0FBUDtBQUlELEtBUE0sTUFPQSxJQUFJckIsSUFBSSxDQUFDRCxZQUFMLElBQXFCTCxPQUFPLENBQUN5QixNQUFqQyxFQUF5QztBQUM5Q0gsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBU0ssa0JBQVQsR0FBOEI7QUFDNUIsUUFBSXRCLElBQUksQ0FBQ0YsYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QmtCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsT0FBTyxDQUFDeUIsTUFBcEI7QUFDRCxLQUZELE1BRU8sSUFBSW5CLElBQUksQ0FBQ0YsYUFBTCxHQUFxQixDQUF6QixFQUE0QjtBQUNqQyxVQUFJc0Isc0JBQXNCLEdBQUdwQixJQUFJLENBQUNGLGFBQUwsR0FBcUIsRUFBbEQ7QUFDQSxVQUFJdUIscUJBQXFCLEdBQUdyQixJQUFJLENBQUNELFlBQUwsR0FBb0IsRUFBaEQ7QUFDQUUsYUFBTyxDQUFDO0FBQ05ILHFCQUFhLEVBQUVzQixzQkFEVDtBQUVOckIsb0JBQVksRUFBRXNCO0FBRlIsT0FBRCxDQUFQO0FBSUQ7QUFDRjs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFHRTtBQUFJLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFIRixFQU1FLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLHlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksbUJBRHBCO0FBRUUsa0JBQVcsZUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRUosOERBQU0sQ0FBQ0ssZ0JBQTFCO0FBQTRDLFdBQU8sRUFBQyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLEVBT0UsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ0ssZ0JBQTFCO0FBQTRDLFdBQU8sRUFBQyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLEVBVUUsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ0ssZ0JBQTFCO0FBQTRDLFdBQU8sRUFBQyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGLEVBYUUsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ0ssZ0JBQTFCO0FBQTRDLFdBQU8sRUFBQyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLEVBZ0JFLE1BQUMsc0RBQUQ7QUFBUSxhQUFTLEVBQUVMLDhEQUFNLENBQUNLLGdCQUExQjtBQUE0QyxXQUFPLEVBQUMsV0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkYsRUFtQkUsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ0ssZ0JBQTFCO0FBQTRDLFdBQU8sRUFBQyxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRixDQURGLENBTkYsRUErQkU7QUFBTSxhQUFTLEVBQUVMLDhEQUFNLENBQUNNLFVBQXhCO0FBQW9DLFlBQVEsRUFBRXRCLG9CQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGVBQVcsRUFBQywrREFEZDtBQUVFLGtCQUFXLHNCQUZiO0FBR0Usd0JBQWlCLGNBSG5CO0FBSUUsU0FBSyxFQUFFWCxXQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsYUFBT1gsY0FBYyxDQUFDVyxDQUFDLENBQUNzQixNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxLQUxaO0FBTUUsUUFBSSxFQUFDLE9BTlA7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRSxNQUFDLDBEQUFELENBQVksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxtQkFBaEI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQVZGLENBREYsQ0EvQkYsRUFpREUsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dyQyxPQUFPLENBQ0xzQyxLQURGLENBQ1FoQyxJQUFJLENBQUNGLGFBRGIsRUFDNEJFLElBQUksQ0FBQ0QsWUFEakMsRUFFRWtDLEdBRkYsQ0FFTSxVQUFDQyxNQUFELEVBQVk7QUFDZixXQUNFO0FBQUcsVUFBSSxFQUFFQSxNQUFNLENBQUNDLEdBQWhCO0FBQXFCLFNBQUcsRUFBRUQsTUFBTSxDQUFDRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFXLGdCQUFVLEVBQUUsSUFBdkI7QUFBNkIsZUFBUyxFQUFFYiw4REFBTSxDQUFDYyxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsZUFBUyxFQUFFZCw4REFBTSxDQUFDZSxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLG9DQUE2QkosTUFBTSxDQUFDRSxFQUFwQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUUsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsZUFBUyxFQUFFYiw4REFBTSxDQUFDZ0IsWUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFaEIsOERBQU0sQ0FBQ2lCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBb0NOLE1BQU0sQ0FBQ08sS0FBM0MsTUFERixDQUpGLEVBT0UsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsZUFBUyxFQUFFbEIsOERBQU0sQ0FBQ21CLGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRW5CLDhEQUFNLENBQUNvQixlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csR0FESCxFQUVHVCxNQUFNLENBQUNVLFlBRlYsQ0FERixDQVBGLENBREYsQ0FERjtBQWtCRCxHQXJCRixDQURILENBakRGLEVBMEVFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUVyQiw4REFBTSxDQUFDc0IsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUUzQixjQUFqQjtBQUFpQyxXQUFPLEVBQUMsU0FBekM7QUFBbUQsUUFBSSxFQUFDLElBQXhEO0FBQTZELFNBQUssTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUVJLGtCQURYO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxRQUFJLEVBQUMsSUFIUDtBQUlFLFNBQUssTUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBMUVGLENBTkYsRUErRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFLYTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGIsQ0FERixDQS9GRixDQURGO0FBMkdEOztHQXJLdUJqQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0YzkxZmMzNjJkZTA2YTBkNTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxuICBMaXN0R3JvdXAsXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBqb2JzOiBkZWZhdWx0UmVzdWx0cyA9IFtdIH0gPSBkYXRhOyAvL3RhayBrdXJ3YSBrYXpkZSBhcGkgbWEgdHUgaW5uZSBrdXJ3YSB6bWllbmVuXG5cbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdFBhZ2VJdGVtOiAwLFxuICAgIGxhc3RQYWdlSXRlbTogMTUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQYWdlUmVmID0gdXNlUmVmKCk7IC8vMC5OYW4gMS4wIDIuMyAzLjMgNC4zKzNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2UGFnZVJlZi5jdXJyZW50ID0gcGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZQYWdlID0gcHJldlBhZ2VSZWYuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdFNlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9zZWFyY2g9JHtzZWFyY2hWYWx1ZX1gO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJveHl1cmwgKyBzZWFyY2hFbmRwb2ludCk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdXBkYXRlUmVzdWx0cyhzZWFyY2hEYXRhLmpvYnMpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiAxNSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiAzMCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCAmJiBwYWdlLmxhc3RQYWdlSXRlbSA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSArIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UubGFzdFBhZ2VJdGVtID49IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImtvbmllY1wiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDApIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVtb3RlIGpvYiBmb3IgdSE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5SZW1vdGUgam9iIGZvciB1ITwvaDE+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRlcn0+XG4gICAgICAgICAgSnVzdCBmaW5kIHlvdXIgZHJlYW0gam9iIGFuZCBzdGFydCBlYXJuaW5nIG1vbmV5XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9uQm94fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0U2VhcmNofT5cbiAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgd29yZCB0aGF0IHlvdSBhc3NvY2lhdGUgd2l0aCB5b3VyIGRyZWFtIHJlbW90ZSBqb2IhXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlY2lwaWVudCdzIHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cbiAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAge3Jlc3VsdHNcbiAgICAgICAgICAgIC5zbGljZShwYWdlLmZpcnN0UGFnZUl0ZW0sIHBhZ2UubGFzdFBhZ2VJdGVtKVxuICAgICAgICAgICAgLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0LnVybH0ga2V5PXtyZXN1bHQuaWR9PlxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cCBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Um93fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xJbWd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9yZW1vdGl2ZS5pby9qb2IvJHtyZXN1bHQuaWR9L2xvZ28gYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVRleHR9PiB7cmVzdWx0LnRpdGxlfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xDb21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlOYW1lVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkhhbmRsZXJ9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9