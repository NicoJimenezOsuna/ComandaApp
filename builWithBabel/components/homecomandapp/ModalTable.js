'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalTable = function ModalTable(_ref) {
    var modaltable = _ref.modaltable,
        imagen = _ref.imagen,
        modalid = _ref.modalid,
        ident = _ref.ident;

    var mtable = {
        cont_princ: {
            position: 'absolute',
            width: '10em',
            height: '10em',
            zIndex: 1
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            'div',
            {
                className: modaltable && modalid === ident ? 'pos-abs-right displayed' : 'pos-abs-right displayed_none',
                style: mtable.cont_princ
            },
            _react2.default.createElement('img', { src: imagen, alt: '',
                style: { width: '10em', height: 'auto' }
            })
        )
    );
};
exports.default = ModalTable;