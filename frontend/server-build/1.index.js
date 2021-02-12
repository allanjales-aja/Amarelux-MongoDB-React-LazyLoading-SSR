exports.ids = [1];
exports.modules = {

/***/ "./src/components/Produto/index.js":
/*!*****************************************!*\
  !*** ./src/components/Produto/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/actions */ \"./src/store/actions/actions.js\");\n\n\n\n\n\nvar Produto = function Produto(_ref) {\n  var prods = _ref.prods,\n      detalharProduto = _ref.detalharProduto;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, prods.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: item.nome_prod,\n      className: \"ItemProdutos mr-4 mb-5\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: item.nome_img,\n      id: item.nome_img,\n      width: \"170px\",\n      alt: \"Produto\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      className: \"DescricaoProdutos\",\n      href: \"#\",\n      onClick: function onClick() {\n        return detalharProduto(item);\n      }\n    }, item.descricao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"DescricaoProdutos\",\n      style: {\n        textDecoration: \"line-through\"\n      }\n    }, \"R$ \", item.valor, \",00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"PrecoProdutos\"\n    }, \"R$ \", item.valor_unit, \",00\"));\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    prods: state.Produtos.catalogo\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Produto));\n\n//# sourceURL=webpack:///./src/components/Produto/index.js?");

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