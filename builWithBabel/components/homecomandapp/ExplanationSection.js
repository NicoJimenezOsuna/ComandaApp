'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExplanationSection = function ExplanationSection(_ref) {
    var explanation = _ref.explanation;


    return _react2.default.createElement(
        'div',
        { style: {
                width: '80%',
                margin: '0px auto',
                padding: '1em',
                borderLeft: '2px solid #707070',
                marginBottom: '1rem'
            } },
        _react2.default.createElement(
            'p',
            { style: { fontFamily: 'Dasis', textIndent: '1em' } },
            explanation
        )
    );
};

exports.default = ExplanationSection;