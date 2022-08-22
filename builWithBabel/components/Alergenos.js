'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hospital = require('../icons/navutils/hospital.svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alergenos = function Alergenos(_ref) {
    var visible = _ref.visible;


    var style = {
        alergenos: {
            width: '100%',
            height: '50px',
            /* background-color: rgba(156, 255, 242, 0.68); */
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
        _react2.default.createElement(_hospital.ReactComponent, {
            style: style.alergenos,
            onClick: visible
        })
    );
};

exports.default = Alergenos;