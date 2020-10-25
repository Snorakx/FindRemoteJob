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
  name: "Software Developer",
  id: 1
}, {
  slug: "design",
  name: "Design",
  id: 2
}, {
  slug: "marketing",
  name: "Marketing",
  id: 3
}, {
  slug: "sales",
  name: "Sales",
  id: 4
}, {
  slug: "data",
  name: "Data Scientist",
  id: 5
}, {
  slug: "devops",
  name: "Dev Ops",
  id: 6
}, {
  slug: "hr",
  name: "Human Resources",
  id: 7
}, {
  slug: "qa",
  name: "QA Engineer",
  id: 8
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
      key: result.id,
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
        key: index,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllc0FycmF5Iiwic2x1ZyIsIm5hbWUiLCJpZCIsIkhvbWUiLCJkYXRhIiwiam9icyIsImRlZmF1bHRSZXN1bHRzIiwidXNlU3RhdGUiLCJyZXN1bHRzIiwidXBkYXRlUmVzdWx0cyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpcnN0UGFnZUl0ZW0iLCJsYXN0UGFnZUl0ZW0iLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInByZXZQYWdlIiwiaGFuZGxlT25TdWJtaXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm94eXVybCIsInNlYXJjaEVuZHBvaW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic2VhcmNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXRlZ29yeTEiLCJidXR0b25WYWx1ZSIsImNhdGVnb3J5RGF0YSIsImhhbmRsZU5leHRQYWdlIiwibGVuZ3RoIiwibmV4dFBhZ2VDb3VudEZpcnN0SXRlbSIsIm5leHRQYWdlQ291bnRMYXN0SXRlbSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInN0eWxlcyIsImhlYWRlciIsInNlY29uZEhlYWRlciIsImNhdGVnb3JpZXNCdXR0b25Db250YWluZXIiLCJjYXRlZ29yaWVzQnV0dG9uQm94IiwibWFwIiwicmVzdWx0IiwiY2F0ZWdvcmllc0J1dHRvbiIsInNlYXJjaEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsaWNlIiwiaW5kZXgiLCJ1cmwiLCJsaXN0Um93IiwibGlzdENvbEltZyIsImxpc3RDb2xUaXRsZSIsInRpdGxlVGV4dCIsInRpdGxlIiwibGlzdENvbENvbXBhbnkiLCJjb21wYW55TmFtZVRleHQiLCJjb21wYW55X25hbWUiLCJidXR0b25IYW5kbGVyIl0sIm1h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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBS2E7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxiLENBREYsQ0FwSEYsQ0FERjtBQWdJRDs7R0EzTXVCdEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OTUyZmFkM2Y2YzdkYTk3YWE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlzdEdyb3VwLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgU3Bpbm5lcixcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBkZWZhdWx0RW5kcG9pbnQgPSBcImh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2xpbWl0PTYwXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5jb25zdCBjYXRlZ29yaWVzQXJyYXkgPSBbXG4gIHsgc2x1ZzogXCJzb2Z0d2FyZS1kZXZcIiwgbmFtZTogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIiwgaWQ6IDEgfSxcbiAgeyBzbHVnOiBcImRlc2lnblwiLCBuYW1lOiBcIkRlc2lnblwiLCBpZDogMiB9LFxuICB7IHNsdWc6IFwibWFya2V0aW5nXCIsIG5hbWU6IFwiTWFya2V0aW5nXCIsIGlkOiAzIH0sXG4gIHsgc2x1ZzogXCJzYWxlc1wiLCBuYW1lOiBcIlNhbGVzXCIsIGlkOiA0IH0sXG4gIHsgc2x1ZzogXCJkYXRhXCIsIG5hbWU6IFwiRGF0YSBTY2llbnRpc3RcIiwgaWQ6IDUgfSxcbiAgeyBzbHVnOiBcImRldm9wc1wiLCBuYW1lOiBcIkRldiBPcHNcIiwgaWQ6IDYgfSxcbiAgeyBzbHVnOiBcImhyXCIsIG5hbWU6IFwiSHVtYW4gUmVzb3VyY2VzXCIsIGlkOiA3IH0sXG4gIHsgc2x1ZzogXCJxYVwiLCBuYW1lOiBcIlFBIEVuZ2luZWVyXCIsIGlkOiA4IH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gIGNvbnN0IHsgam9iczogZGVmYXVsdFJlc3VsdHMgPSBbXSB9ID0gZGF0YTsgLy90YWsga3Vyd2Ega2F6ZGUgYXBpIG1hIHR1IGlubmUga3Vyd2Egem1pZW5lblxuXG4gIGNvbnN0IFtyZXN1bHRzLCB1cGRhdGVSZXN1bHRzXSA9IHVzZVN0YXRlKGRlZmF1bHRSZXN1bHRzKTtcblxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0UGFnZUl0ZW06IDAsXG4gICAgbGFzdFBhZ2VJdGVtOiAxNSxcbiAgfSk7XG5cbiAgY29uc3QgcHJldlBhZ2VSZWYgPSB1c2VSZWYoKTsgLy8wLk5hbiAxLjAgMi4zIDMuMyA0LjMrM1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZQYWdlUmVmLmN1cnJlbnQgPSBwYWdlO1xuICB9KTtcbiAgY29uc3QgcHJldlBhZ2UgPSBwcmV2UGFnZVJlZi5jdXJyZW50O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0U2VhcmNoKGUpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm94eXVybCA9IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCI7XG4gICAgY29uc3Qgc2VhcmNoRW5kcG9pbnQgPSBgaHR0cHM6Ly9yZW1vdGl2ZS5pby9hcGkvcmVtb3RlLWpvYnM/c2VhcmNoPSR7c2VhcmNoVmFsdWV9YDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHVwZGF0ZVJlc3VsdHMoc2VhcmNoRGF0YS5qb2JzKTtcblxuICAgIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDYXRlZ29yeTEoYnV0dG9uVmFsdWUpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHByb3h5dXJsID0gXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cIjtcblxuICAgIGNvbnN0IHNlYXJjaEVuZHBvaW50ID0gYGh0dHBzOi8vcmVtb3RpdmUuaW8vYXBpL3JlbW90ZS1qb2JzP2NhdGVnb3J5PSR7YnV0dG9uVmFsdWV9JmxpbWl0PTYwYDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb3h5dXJsICsgc2VhcmNoRW5kcG9pbnQpO1xuICAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICB1cGRhdGVSZXN1bHRzKGNhdGVnb3J5RGF0YS5qb2JzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiAxNSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiAzMCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGFnZS5maXJzdFBhZ2VJdGVtID4gMCAmJiBwYWdlLmxhc3RQYWdlSXRlbSA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSA9IHBhZ2UuZmlyc3RQYWdlSXRlbSArIDE1O1xuICAgICAgbGV0IG5leHRQYWdlQ291bnRMYXN0SXRlbSA9IHBhZ2UubGFzdFBhZ2VJdGVtICsgMTU7XG4gICAgICBzZXRQYWdlKHtcbiAgICAgICAgZmlyc3RQYWdlSXRlbTogbmV4dFBhZ2VDb3VudEZpcnN0SXRlbSxcbiAgICAgICAgbGFzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50TGFzdEl0ZW0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UubGFzdFBhZ2VJdGVtID49IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImtvbmllY1wiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmIChwYWdlLmZpcnN0UGFnZUl0ZW0gPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UuZmlyc3RQYWdlSXRlbSA+IDApIHtcbiAgICAgIGxldCBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtID0gcGFnZS5maXJzdFBhZ2VJdGVtIC0gMTU7XG4gICAgICBsZXQgbmV4dFBhZ2VDb3VudExhc3RJdGVtID0gcGFnZS5sYXN0UGFnZUl0ZW0gLSAxNTtcbiAgICAgIHNldFBhZ2Uoe1xuICAgICAgICBmaXJzdFBhZ2VJdGVtOiBuZXh0UGFnZUNvdW50Rmlyc3RJdGVtLFxuICAgICAgICBsYXN0UGFnZUl0ZW06IG5leHRQYWdlQ291bnRMYXN0SXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVtb3RlIGpvYiBmb3IgdSE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5SZW1vdGUgam9iIGZvciB1ITwvaDE+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRlcn0+XG4gICAgICAgICAgSnVzdCBmaW5kIHlvdXIgZHJlYW0gam9iIGFuZCBzdGFydCBlYXJuaW5nIG1vbmV5XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc0J1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9uQm94fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzQXJyYXkubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnkxKHJlc3VsdC5zbHVnKX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuaWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNCdXR0b259IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXRTZWFyY2h9PlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB3b3JkIHRoYXQgeW91IGFzc29jaWF0ZSB3aXRoIHlvdXIgZHJlYW0gcmVtb3RlIGpvYiFcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7cmVzdWx0c1xuICAgICAgICAgICAgLnNsaWNlKHBhZ2UuZmlyc3RQYWdlSXRlbSwgcGFnZS5sYXN0UGFnZUl0ZW0pXG4gICAgICAgICAgICAubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFNwaW5uZXIga2V5PXtpbmRleH0gYW5pbWF0aW9uPVwiZ3Jvd1wiIC8+O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSBrZXk9e3Jlc3VsdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb2xJbWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3JlbW90aXZlLmlvL2pvYi8ke3Jlc3VsdC5pZH0vbG9nbyBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVRleHR9PiB7cmVzdWx0LnRpdGxlfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29sQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlOYW1lVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSGFuZGxlcn0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBibG9jaz5cbiAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=