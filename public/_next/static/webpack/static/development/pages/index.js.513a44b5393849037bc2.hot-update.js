webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/browsing/index.tsx":
/*!***************************************!*\
  !*** ./components/browsing/index.tsx ***!
  \***************************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/display/styledComponents */ "./containers/display/styledComponents.tsx");
/* harmony import */ var _datasetsBrowsing_datasetsBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasetsBrowsing/datasetsBrowser */ "./components/browsing/datasetsBrowsing/datasetsBrowser.tsx");
/* harmony import */ var _datasetsBrowsing_datasetNameBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datasetsBrowsing/datasetNameBuilder */ "./components/browsing/datasetsBrowsing/datasetNameBuilder.tsx");
/* harmony import */ var _runsBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runsBrowser */ "./components/browsing/runsBrowser.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./components/constants.ts");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styledComponents */ "./components/styledComponents.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ "./components/menu.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useChangeRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useChangeRouter */ "./hooks/useChangeRouter.tsx");
/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contexts/leftSideContext */ "./contexts/leftSideContext.tsx");
/* harmony import */ var _containers_display_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../containers/display/utils */ "./containers/display/utils.ts");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/ernes/Desktop/test/dqmgui_frontend/components/browsing/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Browser = function Browser() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants__WEBPACK_IMPORTED_MODULE_6__["dataSetSelections"][0].value),
      datasetOption = _useState[0],
      setDatasetOption = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var query = router.query;
  var run_number = query.run_number ? query.run_number : '';
  var dataset_name = query.dataset_name ? query.dataset_name : '';
  var lumi = query.lumi ? parseInt(query.lumi) : NaN;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_11__["store"]),
      setLumisection = _React$useContext.setLumisection;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(run_number),
      currentRunNumber = _useState2[0],
      setCurrentRunNumber = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataset_name),
      currentDataset = _useState3[0],
      setCurrentDataset = _useState3[1];

  var lumisectionsChangeHandler = function lumisectionsChangeHandler(lumi) {
    //in main navigation when lumisection is changed, new value have to be set to url
    Object(_containers_display_utils__WEBPACK_IMPORTED_MODULE_12__["changeRouter"])(Object(_containers_display_utils__WEBPACK_IMPORTED_MODULE_12__["getChangedQueryParams"])({
      lumi: lumi
    }, query)); //setLumisection from store(using useContext) set lumisection value globally.
    //This set value is reachable for lumisection browser in free search dialog (you can see it, when search button next to browsers is clicked).
    //Both lumisection browser have different handers, they have to act differently according to their place:
    //IN THE MAIN NAV: lumisection browser value in the main navigation is changed, this HAVE to be set to url;
    //FREE SEARCH DIALOG: lumisection browser value in free search dialog is changed it HASN'T to be set to url immediately, just when button 'ok' 
    //in dialog is clicked THEN value is set to url. So, useContext let us to change lumi value globally without changing url, when wee no need that.
    //And in this handler lumi value set to useContext store is used as initial lumi value in free search dialog. 

    setLumisection(lumi);
  };

  Object(_hooks_useChangeRouter__WEBPACK_IMPORTED_MODULE_10__["useChangeRouter"])({
    run_number: currentRunNumber,
    dataset_name: currentDataset
  }, [currentRunNumber, currentDataset], true);
  return __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_2__["WrapperDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_2__["WrapperDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_runsBrowser__WEBPACK_IMPORTED_MODULE_5__["RunBrowser"], {
    query: query,
    currentRunNumber: currentRunNumber,
    setCurrentRunNumber: setCurrentRunNumber,
    currentDataset: currentDataset,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__["StyledFormItem"], {
    label: __jsx(_menu__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
      options: _constants__WEBPACK_IMPORTED_MODULE_6__["dataSetSelections"],
      action: setDatasetOption,
      defaultValue: _constants__WEBPACK_IMPORTED_MODULE_6__["dataSetSelections"][0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, datasetOption === _constants__WEBPACK_IMPORTED_MODULE_6__["dataSetSelections"][0].value ? __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_2__["WrapperDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_datasetsBrowsing_datasetsBrowser__WEBPACK_IMPORTED_MODULE_3__["DatasetsBrowser"], {
    currentRunNumber: currentRunNumber,
    currentDataset: currentDataset,
    setCurrentDataset: setCurrentDataset,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  })) : __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_2__["WrapperDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(_datasetsBrowsing_datasetNameBuilder__WEBPACK_IMPORTED_MODULE_4__["DatasetsBuilder"], {
    currentRunNumber: currentRunNumber,
    currentDataset: currentDataset,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })))));
};

/***/ }),

/***/ "./components/browsing/lumesectionBroweser.tsx":
false,

/***/ "./components/navigation/selectedData.tsx":
/*!************************************************!*\
  !*** ./components/navigation/selectedData.tsx ***!
  \************************************************/
/*! exports provided: SelectedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedData", function() { return SelectedData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents */ "./components/styledComponents.ts");
/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/leftSideContext */ "./contexts/leftSideContext.tsx");
/* harmony import */ var _containers_display_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/display/utils */ "./containers/display/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/ernes/Desktop/test/dqmgui_frontend/components/navigation/selectedData.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







var SelectedData = function SelectedData(_ref) {
  var dataset_name = _ref.dataset_name,
      run_number = _ref.run_number,
      form = _ref.form;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_4__["store"]),
      lumisection = _React$useContext.lumisection,
      setLumisection = _React$useContext.setLumisection;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var query = router.query;

  var lumisectionsChangeHandler = function lumisectionsChangeHandler(lumi) {
    //we set lumisection in inseContext store in order to save a it's value.
    //When form is submitted(onFinish...)(clicked button "OK" in dialog), then 
    //url is changed
    setLumisection(lumi);
  };

  return __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    form: form,
    onFinish: function onFinish(params) {
      //when OK is clicked, run number, dataset and lumi params in url is changed.
      Object(_containers_display_utils__WEBPACK_IMPORTED_MODULE_5__["changeRouter"])(Object(_containers_display_utils__WEBPACK_IMPORTED_MODULE_5__["getChangedQueryParams"])(params, query));
    },
    fields: [{
      name: 'dataset_name',
      value: dataset_name
    }, {
      name: 'run_number',
      value: run_number
    }, {
      name: 'lumi',
      value: lumisection
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormItem"], {
    name: 'dataset_name',
    label: "Dataset name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      fontWeight: 'bold',
      fontStyle: "italic"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, dataset_name))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormItem"], {
    name: 'run_number',
    label: "Run number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      fontWeight: 'bold',
      fontStyle: "italic"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, run_number))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.513a44b5393849037bc2.hot-update.js.map