'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _escanear = require('../icons/navutils/escanear.svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Qr = function Qr(_ref) {
    var codigoqr = _ref.codigoqr;


    var style = {
        qr: {
            width: '100%',
            height: '50px',
            margin: '0px 2.5px',
            padding: '5px',
            alignItems: 'center',
            filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 3px 3px 6px)',
            borderRadius: '8px',
            border: '2px solid #ECECEC',
            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2)',
            fill: '#6e6868'
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_escanear.ReactComponent, {
            style: style.qr,
            onClick: codigoqr
        })
    );
};

exports.default = Qr;