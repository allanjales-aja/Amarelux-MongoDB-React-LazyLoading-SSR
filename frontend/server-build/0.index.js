exports.ids = [0];
exports.modules = {

/***/ "./src/components/Detalhes/index.js":
/*!******************************************!*\
  !*** ./src/components/Detalhes/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/actions */ \"./src/store/actions/actions.js\");\n\n\n\n\n\nvar Detalhes = function Detalhes(_ref) {\n  var detalhes = _ref.detalhes,\n      adicionarProduto = _ref.adicionarProduto;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    style: {\n      fontSize: \"19px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Detalhes:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: detalhes.nome_img,\n    id: detalhes.nome_img,\n    width: \"170px\",\n    alt: \"Produto\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      fontSize: \"14px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, detalhes.descricao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      fontSize: \"14px\"\n    }\n  }, detalhes.detalhe1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      fontSize: \"14px\"\n    }\n  }, detalhes.detalhe2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      fontSize: \"14px\"\n    }\n  }, detalhes.detalhe3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"DescricaoProdutos\",\n    style: {\n      textDecoration: \"line-through\"\n    }\n  }, \"R$ \", detalhes.valor, \",00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"PrecoProdutos\"\n  }, \"R$ \", detalhes.valor_unit, \",00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary w-10 mt-2\",\n    onClick: function onClick() {\n      return adicionarProduto(detalhes);\n    }\n  }, \"Comprar\"));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    detalhes: state.Produtos.detalhe\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Detalhes));\n\n//# sourceURL=webpack:///./src/components/Detalhes/index.js?");

/***/ }),

/***/ "./src/store/actions/actions.js":
/*!**************************************!*\
  !*** ./src/store/actions/actions.js ***!
  \**************************************/
/*! exports provided: adicionarProduto, detalharProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"adicionarProduto\", function() { return adicionarProduto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detalharProduto\", function() { return detalharProduto; });\nfunction adicionarProduto(prods) {\n  return {\n    type: \"ADICIONAR_PRODUTO\",\n    prods: prods\n  };\n}\nfunction detalharProduto(dets) {\n  return {\n    type: \"DETALHAR_PRODUTO\",\n    dets: dets\n  };\n}\n\n//# sourceURL=webpack:///./src/store/actions/actions.js?");

/***/ })

};;