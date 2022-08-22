"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _Spinner = require("./Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _utils = require("../utils/utils");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mapamodal = function Mapamodal(_ref) {
    var verMapamodal = _ref.verMapamodal,
        vermapa = _ref.vermapa,
        restauranteData = _ref.restauranteData;

    var aller = {
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
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 1,
            minHeight: '50vh'
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        h1: {
            padding: '0 0 10px 20px',
            fontSize: "1.3rem",
            fontWeight: "bold"
        },
        iframe: {
            flexWrap: "wrap",
            width: "100%",
            height: "70%",
            frameBorder: "0",
            border: "0",
            borderRadius: "20px"
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start'
        },
        texto: {
            width: "100%",
            fontSize: "1.2rem",
            textAlign: "center",
            flexWrap: "wrap"
        },
        botonir: {
            width: 'auto',
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            marginTop: "15px"
        }
    };

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        mostrarmapa = _useState2[0],
        getMostrarmapa = _useState2[1];

    (0, _react.useEffect)(function () {
        getMostrarmapa(verMapamodal);
    }, [verMapamodal]);

    return _react2.default.createElement(
        "div",
        {
            className: mostrarmapa ? "displayed" : "displayed_none",
            style: aller.princ
        },
        _react2.default.createElement(
            "div",
            { style: aller.second },
            _react2.default.createElement(
                "div",
                { style: aller.cabecera },
                _react2.default.createElement(_timesCircleRegular.ReactComponent, {
                    className: "close",
                    onClick: vermapa }),
                _react2.default.createElement(
                    "p",
                    { style: aller.h1 },
                    "\xBFQuieres ir al local ",
                    restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : 'referenciado',
                    "?"
                )
            ),
            _react2.default.createElement(
                "div",
                { style: aller.cont_data },
                _react2.default.createElement("iframe", {
                    title: "localizaci\xF3n-restaurante",
                    style: aller.iframe,
                    src: restauranteData.length > 0 ? (0, _utils.iframeSrcData)(restauranteData[0].localizacion) : _react2.default.createElement(_Spinner2.default, null)
                    // zoom="21"
                    , allowFullScreen: "",
                    "aria-hidden": "false", tabIndex: "0" }),
                _react2.default.createElement(
                    "div",
                    { style: aller.texto },
                    _react2.default.createElement(
                        "p",
                        { style: aller.botonir },
                        "Pulsa ",
                        _react2.default.createElement(
                            "span",
                            { style: { color: '#3c7186' } },
                            "\"Ampliar el mapa\""
                        )
                    )
                )
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Mapamodal);