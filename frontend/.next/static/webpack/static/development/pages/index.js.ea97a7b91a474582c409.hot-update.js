webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
var _jsxFileName = "/Users/megangilpin/Documents/Projects/Advanced React/Advanced-React/shopaholic/frontend/components/Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConneciton {\n      agregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var Pagination = function Pagination(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(apollo_boost__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Hi i'm the Pagination!")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./node_modules/deprecated-decorator/bld/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/SchemaError.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/chainResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/forEachField.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/implementsAbstractType.js":
false,

/***/ "./node_modules/graphql-tools/dist/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/isEmptyObject.js":
false,

/***/ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
false,

/***/ "./node_modules/graphql-tools/dist/makeExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/mergeDeep.js":
false,

/***/ "./node_modules/graphql-tools/dist/mock.js":
false,

/***/ "./node_modules/graphql-tools/dist/schemaVisitor.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/errors.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExtractField.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transformSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transforms.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/visitSchema.js":
false,

/***/ "./node_modules/uuid/index.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v1.js":
false,

/***/ "./node_modules/uuid/v4.js":
false

})
//# sourceMappingURL=index.js.ea97a7b91a474582c409.hot-update.js.map