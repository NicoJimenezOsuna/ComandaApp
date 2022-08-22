"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _reactRedux = require("react-redux");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Qrmodal = function Qrmodal(_ref) {
    var codigoqr = _ref.codigoqr,
        verqr = _ref.verqr,
        restauranteData = _ref.restauranteData;

    var style = {
        princ: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        second: {
            position: "relative",
            width: "90%",
            maxHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll",
            display: "flex",
            flexWrap: "wrap"
        },
        cont_data: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%"
        },
        cont_qr: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        h1: {
            padding: '10px 0 10px 20px',
            fontSize: "1.3rem"
        },
        qr: {
            maxWidth: "100%",
            maxHeight: '250px'
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start'
        }
    };

    return _react2.default.createElement(
        "div",
        { className: verqr ? "displayed" : "displayed_none",
            style: style.princ },
        _react2.default.createElement(
            "div",
            { style: style.second },
            _react2.default.createElement(
                "div",
                { style: style.cabecera },
                _react2.default.createElement(_timesCircleRegular.ReactComponent, {
                    className: "close",
                    onClick: codigoqr }),
                _react2.default.createElement(
                    "h1",
                    { style: style.h1 },
                    "Este es el c\xF3digo Qr ",
                    _react2.default.createElement("br", null),
                    "que utiliza este establecimiento. \xA1Comp\xE1rtelo!"
                )
            ),
            _react2.default.createElement(
                "div",
                { style: style.cont_data },
                _react2.default.createElement("img", { style: style.qr,
                    src: restauranteData.length > 0 ? (0, _utils.urlImage)() + restauranteData[0].codigoqr : null,
                    alt: "Qr restaurante" })
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Qrmodal);