"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buttonsubmit = function Buttonsubmit() {
    return _react2.default.createElement(
        "button",
        {
            type: "submit",
            id: "submit_login"
        },
        "Guardar"
    );
};
exports.default = Buttonsubmit;