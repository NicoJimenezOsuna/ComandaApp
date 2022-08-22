'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alergenos = require('./Alergenos');

var _Alergenos2 = _interopRequireDefault(_Alergenos);

var _Qr = require('./Qr');

var _Qr2 = _interopRequireDefault(_Qr);

var _lista = require('../icons/navutils/lista.svg');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavUtils = function NavUtils(_ref) {
    var visible = _ref.visible,
        codigoqr = _ref.codigoqr,
        pedidoViewHandler = _ref.pedidoViewHandler,
        restauranteData = _ref.restauranteData;

    var style = {
        menu: {
            overflow: "visible",
            position: "relative",
            width: '100%',
            height: '70px',
            left: '0px',
            padding: '10px',
            // top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            // justifyContent: 'flex-end',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
        },
        list: {
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
        _react2.default.createElement(
            'div',
            { style: style.menu },
            _react2.default.createElement(_Qr2.default, { codigoqr: codigoqr }),
            _react2.default.createElement(_Alergenos2.default, { visible: visible }),
            restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(_lista.ReactComponent, {
                style: style.list,
                onClick: pedidoViewHandler }) : null
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NavUtils);