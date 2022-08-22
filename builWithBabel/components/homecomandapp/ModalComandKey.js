'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Commandkeypad = require('../Commandkeypad');

var _Commandkeypad2 = _interopRequireDefault(_Commandkeypad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoldalComandKey = function MoldalComandKey(_ref) {
    var modaltable = _ref.modaltable,
        modalid = _ref.modalid,
        ident = _ref.ident,
        data = _ref.data;

    var mtable = {
        cont_princ: {
            position: 'absolute'
        }
    };

    return _react2.default.createElement(
        'div',
        {
            className: modaltable && modalid === ident ? 'pos-abs-command displayed' : 'pos-abs-command displayed_none',
            style: mtable.cont_princ
        },
        _react2.default.createElement(_Commandkeypad2.default
        //pasamos el producto
        , { data: data
            //si es carta true, si es menu false
            , nonprice: true,
            wordkey: 'carta'
        }),
        _react2.default.createElement('div', { className: 'triangulo' })
    );
};

exports.default = MoldalComandKey;