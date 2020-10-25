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





var categoriesArray = [{
  slug: "software-dev",
  name: "Software Developer"
}, {
  slug: "design",
  name: "Design"
}, {
  slug: "marketing",
  name: "Marketing"
}, {
  slug: "sales",
  name: "Sales"
}, {
  slug: "data",
  name: "Data Scientist"
}, {
  slug: "devops",
  name: "Dev Ops"
}, {
  slug: "hr",
  name: "Human Resources"
}, {
  slug: "qa",
  name: "QA Engineer"
}];
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
              searchEndpoint = "https://remotive.io/api/remote-jobs?category=".concat(buttonValue, "&limit=60");
              _context2.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(proxyurl + searchEndpoint);

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              categoryData = _context2.sent;
              setLoading(false);
              updateResults(categoryData.jobs);

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
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Remote job for u!"), __jsx("h2", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.secondHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "Just find your dream job and start earning money"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButtonBox,
    "aria-label": "Basic example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, categoriesArray.map(function (result) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoriesButton,
      onClick: function onClick() {
        return handleCategory1(result.slug);
      },
      variant: "secondary",
      key: result,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, result.name);
  }))), __jsx("form", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.searchForm,
    onSubmit: handleOnSubmitSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-secondary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, results.slice(page.firstPageItem, page.lastPageItem).map(function (result) {
    if (loading === true) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
        animation: "grow",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
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
          lineNumber: 194,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
        horizontal: true,
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listRow,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColImg,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 23
        }
      }, __jsx("img", {
        src: "https://remotive.io/job/".concat(result.id, "/logo "),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 25
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColTitle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }
      }, " ", result.title, " ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listColCompany,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.companyNameText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }
      }, result.company_name))));
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
      lineNumber: 217,
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
      lineNumber: 220,
      columnNumber: 11
    }
  }, "Previous Page"))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5Iiwic2x1ZyIsIm5hbWUiLCJIb21lIiwiZGF0YSIsImpvYnMiLCJkZWZhdWx0UmVzdWx0cyIsInVzZVN0YXRlIiwicmVzdWx0cyIsInVwZGF0ZVJlc3VsdHMiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaXJzdFBhZ2VJdGVtIiwibGFzdFBhZ2VJdGVtIiwicGFnZSIsInNldFBhZ2UiLCJwcmV2UGFnZVJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwcmV2UGFnZSIsImhhbmRsZU9uU3VibWl0U2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJveHl1cmwiLCJzZWFyY2hFbmRwb2ludCIsImZldGNoIiwicmVzIiwianNvbiIsInNlYXJjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2F0ZWdvcnkxIiwiYnV0dG9uVmFsdWUiLCJjYXRlZ29yeURhdGEiLCJoYW5kbGVOZXh0UGFnZSIsImxlbmd0aCIsIm5leHRQYWdlQ291bnRGaXJzdEl0ZW0iLCJuZXh0UGFnZUNvdW50TGFzdEl0ZW0iLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJzZWNvbmRIZWFkZXIiLCJjYXRlZ29yaWVzQnV0dG9uQ29udGFpbmVyIiwiY2F0ZWdvcmllc0J1dHRvbkJveCIsIm1hcCIsInJlc3VsdCIsImNhdGVnb3JpZXNCdXR0b24iLCJzZWFyY2hGb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsInVybCIsImlkIiwibGlzdFJvdyIsImxpc3RDb2xJbWciLCJsaXN0Q29sVGl0bGUiLCJ0aXRsZVRleHQiLCJ0aXRsZSIsImxpc3RDb2xDb21wYW55IiwiY29tcGFueU5hbWVUZXh0IiwiY29tcGFueV9uYW1lIiwiYnV0dG9uSGFuZGxlciJdLCJtYXBwaW5ncyI6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QWdJRDs7R0EzTXVCdEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjVhMmNmZTI2YjhlYWJhNDU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlzdEdyb3VwLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgU3Bpbm5lcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBkZWZhdWx0RW5kcG9pbnQgPSBcImh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2xpbWl0PTYwXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5jb25zdCBjYXRlZ29yaWVzQXJyYXkgPSBbXG4gIHsgc2x1ZzogXCJzb2Z0d2FyZS1kZXZcIiwgbmFtZTogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIiB9LFxuICB7IHNsdWc6IFwiZGVzaWduXCIsIG5hbWU6IFwiRGVzaWduXCIgfSxcbiAgeyBzbHVnOiBcIm1hcmtldGluZ1wiLCBuYW1lOiBcIk1hcmtldGluZ1wiIH0sXG4gIHsgc2x1ZzogXCJzYWxlc1wiLCBuYW1lOiBcIlNhbGVzXCIgfSxcbiAgeyBzbHVnOiBcImRhdGFcIiwgbmFtZTogXCJEYXRhIFNjaWVudGlzdFwiIH0sXG4gIHsgc2x1ZzogXCJkZXZvcHNcIiwgbmFtZTogXCJEZXYgT3BzXCIgfSxcbiAgeyBzbHVnOiBcImhyXCIsIG5hbWU6IFwiSHVtYW4gUmVzb3VyY2VzXCIgfSxcbiAgeyBzbHVnOiBcInFhXCIsIG5hbWU6IFwiUUEgRW5naW5lZXJcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGpvYnM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7IC8vdGFrIGt1cndhIGthemRlIGFwaSBtYSB0dSBpbm5lIGt1cndhIHptaWVuZW5cblxuICBjb25zdCBbcmVzdWx0cywgdXBkYXRlUmVzdWx0c10gPSB1c2VTdGF0ZShkZWZhdWx0UmVzdWx0cyk7XG5cbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdFBhZ2VJdGVtOiAwLFxuICAgIGxhc3RQYWdlSXRlbTogMTUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXZQYWdlUmVmID0gdXNlUmVmKCk7IC8vMC5OYW4gMS4wIDIuMyAzLjMgNC4zKzNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2UGFnZVJlZi5jdXJyZW50ID0gcGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZQYWdlID0gcHJldlBhZ2VSZWYuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdFNlYXJjaChlKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJveHl1cmwgPSBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1wiO1xuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP3NlYXJjaD0ke3NlYXJjaFZhbHVlfWA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB1cGRhdGVSZXN1bHRzKHNlYXJjaERhdGEuam9icyk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2hWYWx1ZSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnkxKGJ1dHRvblZhbHVlKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBwcm94eXVybCA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XG5cbiAgICBjb25zdCBzZWFyY2hFbmRwb2ludCA9IGBodHRwczovL3JlbW90aXZlLmlvL2FwaS9yZW1vdGUtam9icz9jYXRlZ29yeT0ke2J1dHRvblZhbHVlfSZsaW1pdD02MGA7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm94eXVybCArIHNlYXJjaEVuZHBvaW50KTtcbiAgICBjb25zdCBjYXRlZ29yeURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgdXBkYXRlUmVzdWx0cyhjYXRlZ29yeURhdGEuam9icyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0UGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogMTUsXG4gICAgICAgIGxhc3RQYWdlSXRlbTogMzAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDAgJiYgcGFnZS5sYXN0UGFnZUl0ZW0gPCByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0gPSBwYWdlLmZpcnN0UGFnZUl0ZW0gKyAxNTtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50TGFzdEl0ZW0gPSBwYWdlLmxhc3RQYWdlSXRlbSArIDE1O1xuICAgICAgc2V0UGFnZSh7XG4gICAgICAgIGZpcnN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRGaXJzdEl0ZW0sXG4gICAgICAgIGxhc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudExhc3RJdGVtLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmxhc3RQYWdlSXRlbSA+PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coXCJrb25pZWNcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzUGFnZSgpIHtcbiAgICBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPiAwKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSAtIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlbW90ZSBqb2IgZm9yIHUhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+UmVtb3RlIGpvYiBmb3IgdSE8L2gxPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkZXJ9PlxuICAgICAgICAgIEp1c3QgZmluZCB5b3VyIGRyZWFtIGpvYiBhbmQgc3RhcnQgZWFybmluZyBtb25leVxuICAgICAgICA8L2gyPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkJveH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllc0FycmF5Lm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5MShyZXN1bHQuc2x1Zyl9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzdWx0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQubmFtZX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0U2VhcmNofT5cbiAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgd29yZCB0aGF0IHlvdSBhc3NvY2lhdGUgd2l0aCB5b3VyIGRyZWFtIHJlbW90ZSBqb2IhXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlY2lwaWVudCdzIHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cbiAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAge3Jlc3VsdHNcbiAgICAgICAgICAgIC5zbGljZShwYWdlLmZpcnN0UGFnZUl0ZW0sIHBhZ2UubGFzdFBhZ2VJdGVtKVxuICAgICAgICAgICAgLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiAvPjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0LnVybH0ga2V5PXtyZXN1bHQuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGhvcml6b250YWw9e3RydWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RSb3d9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yZW1vdGl2ZS5pby9qb2IvJHtyZXN1bHQuaWR9L2xvZ28gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT4ge3Jlc3VsdC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbENvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TmFtZVRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmNvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkhhbmRsZXJ9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICBOZXh0IFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9