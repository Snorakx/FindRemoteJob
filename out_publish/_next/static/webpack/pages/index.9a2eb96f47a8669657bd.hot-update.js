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
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Categories"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Categories"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Categories"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Categories"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Categories"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Categories")), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
    type: "submit",
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
      lineNumber: 124,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    return __jsx("a", {
      href: result.url,
      key: result.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      horizontal: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "https://remotive.io/job/".concat(result.id, "/logo "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 23
      }
    }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 23
      }
    }, " ", result.company_name))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 150,
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
      lineNumber: 153,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJqb2JzIiwiZGVmYXVsdFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdHMiLCJ1cGRhdGVSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVOZXh0UGFnZSIsImxlbmd0aCIsIm5leHRQYWdlQ291bnRGaXJzdEl0ZW0iLCJuZXh0UGFnZUNvdW50TGFzdEl0ZW0iLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJzZWNvbmRIZWFkZXIiLCJzZWFyY2hGb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsIm1hcCIsInJlc3VsdCIsInVybCIsImlkIiwibGlzdFJvdyIsImxpc3RDb2xJbWciLCJsaXN0Q29sVGl0bGUiLCJ0aXRsZVRleHQiLCJ0aXRsZSIsImxpc3RDb2xDb21wYW55IiwiY29tcGFueU5hbWVUZXh0IiwiY29tcGFueV9uYW1lIiwiYnV0dG9uSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQmUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLG1CQUNDQSxJQURELENBQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxjQUR1Qiwy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QUFLLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQXpERixDQU5GLEVBOEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBS2E7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxiLENBREYsQ0E5RUYsQ0FERjtBQTBGRDs7R0FwSnVCakMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YTJlYjk2ZjQ3YTg2Njk2NTdiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBMaXN0R3JvdXAsXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyBqb2JzOiBkZWZhdWx0UmVzdWx0cyA9IFtdIH0gPSBkYXRhOyAvL3RhayBrdXJ3YSBrYXpkZSBhcGkgbWEgdHUgaW5uZSBrdXJ3YSB6bWllbmVuXG5cbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdFBhZ2VJdGVtOiAwLFxuICAgIGxhc3RQYWdlSXRlbTogMTUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQYWdlUmVmID0gdXNlUmVmKCk7IC8vMC5OYW4gMS4wIDIuMyAzLjMgNC4zKzNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2UGFnZVJlZi5jdXJyZW50ID0gcGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZQYWdlID0gcHJldlBhZ2VSZWYuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdFNlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9zZWFyY2g9JHtzZWFyY2hWYWx1ZX1gO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJveHl1cmwgKyBzZWFyY2hFbmRwb2ludCk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdXBkYXRlUmVzdWx0cyhzZWFyY2hEYXRhLmpvYnMpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiAxNSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiAzMCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCAmJiBwYWdlLmxhc3RQYWdlSXRlbSA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSArIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UubGFzdFBhZ2VJdGVtID49IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImtvbmllY1wiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDApIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVtb3RlIGpvYiBmb3IgdSE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5SZW1vdGUgam9iIGZvciB1ITwvaDE+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRlcn0+XG4gICAgICAgICAgSnVzdCBmaW5kIHlvdXIgZHJlYW0gam9iIGFuZCBzdGFydCBlYXJuaW5nIG1vbmV5XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7cmVzdWx0c1xuICAgICAgICAgICAgLnNsaWNlKHBhZ2UuZmlyc3RQYWdlSXRlbSwgcGFnZS5sYXN0UGFnZUl0ZW0pXG4gICAgICAgICAgICAubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSBrZXk9e3Jlc3VsdC5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGhvcml6b250YWw9e3RydWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3JlbW90aXZlLmlvL2pvYi8ke3Jlc3VsdC5pZH0vbG9nbyBgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+IHtyZXN1bHQudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbENvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueU5hbWVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSGFuZGxlcn0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBibG9jaz5cbiAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=