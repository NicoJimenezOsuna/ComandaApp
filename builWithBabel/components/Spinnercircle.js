'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinnercircle = function Spinnercircle() {
    var spinnercir = {
        cont: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '70px'
        }
    };

    return _react2.default.createElement(
        'div',
        { style: spinnercir.cont },
        _react2.default.createElement(
            'div',
            { className: 'sk-chase' },
            _react2.default.createElement('div', { className: 'sk-chase-dot' }),
            _react2.default.createElement('div', { className: 'sk-chase-dot' }),
            _react2.default.createElement('div', { className: 'sk-chase-dot' }),
            _react2.default.createElement('div', { className: 'sk-chase-dot' }),
            _react2.default.createElement('div', { className: 'sk-chase-dot' }),
            _react2.default.createElement('div', { className: 'sk-chase-dot' })
        )
    );
};
exports.default = Spinnercircle;