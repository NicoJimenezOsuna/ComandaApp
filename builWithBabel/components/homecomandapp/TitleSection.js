'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleSection = function TitleSection(_ref) {
    var title = _ref.title;

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            'h1',
            { style: { textAlign: 'center', fontFamily: 'Dosis', color: '#707070' } },
            title
        ),
        _react2.default.createElement('hr', { style: {
                width: '80%',
                border: '1px solid rgb(211, 211, 211)',
                margin: '0px auto',
                marginBottom: '1rem',
                color: '#707070'
            } })
    );
};

exports.default = TitleSection;