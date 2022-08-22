'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emptymessage = function Emptymessage() {

    var empty = {
        princ: {
            width: '100%',
            padding: '.3em',
            margin: '0 auto'
        },
        h2: {
            padding: '.5em',
            color: 'rgb(128, 128, 128)'
        },
        p: {
            textAlign: 'right',
            paddingRight: '.5em'
        },
        img: {
            maxWidth: '30%',
            maxHeight: '30%',
            display: 'block',
            margin: '0 auto'
        }
    };
    return _react2.default.createElement(
        'div',
        { style: empty.princ },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { style: empty.h2 },
                'Solicite informaci\xF3n a nuestro personal de servicio.'
            ),
            _react2.default.createElement(
                'p',
                { style: empty.p },
                'Disculpen las molestias'
            )
        )
    );
};

exports.default = Emptymessage;