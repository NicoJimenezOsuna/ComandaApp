"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner() {

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "div",
            { id: "loadingProgressG" },
            _react2.default.createElement("div", { className: "loadingProgressG" })
        )
    );
};

exports.default = Spinner;