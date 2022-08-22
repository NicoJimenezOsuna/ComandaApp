'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errormessage = function Errormessage(_ref) {
    var mensaje = _ref.mensaje;

    var error = {
        princ: {
            width: '100%',
            backgroundColor: '#ef5e5e',
            textAlign: 'left',
            color: '#FFF',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 1px 1px rgba(0,0,0,0.12),' + '0 2px 2px rgba(0, 0, 0, 0.12),' + '0 4px 4px rgba(0, 0, 0, 0.12),' + '0 8px 8px rgba(0, 0, 0, 0.12),' + '0 16px 16px rgba(0, 0, 0, 0.12)'
        }
    };

    return _react2.default.createElement(
        'div',
        { style: error.princ },
        _react2.default.createElement(
            'h3',
            null,
            'ERROR: '
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h5',
            null,
            mensaje
        )
    );
};
exports.default = Errormessage;