"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Socialpymes = function Socialpymes() {

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "span",
        null,
        "powered by"
      )
    ),
    _react2.default.createElement("img", { src: "./assets/img/socialPymes_Imagotipo.png", alt: "Logo de Socialpymes" })
  );
};

exports.default = Socialpymes;