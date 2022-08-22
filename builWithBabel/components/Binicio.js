'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Binicio = function Binicio() {

  var styles = {
    boton: {
      overflow: 'visible',
      textAlign: 'center',
      fontFamily: 'Tahoma',
      fontSize: '1.5em',
      color: 'rgba(112, 112, 112, 1)',
      borderRadius: '50px',
      backgroundColor: 'white',
      width: '250px',
      padding: '1em',
      marginBottom: '2em',
      boxShadow: '-10px 10px 20px #bfbfbf, 10px -10px 20px #ffffff'
    }

  };
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/categoria', style: styles.boton },
      'INICIO'
    )
  );
};

exports.default = Binicio;