"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mailmodal = function Mailmodal(_ref) {
    var verMailmodal = _ref.verMailmodal,
        vermail = _ref.vermail,
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
            overflow: "scroll",
            display: "flex",
            flexWrap: "wrap",
            padding: '1em 2em 2em 2em'
        },
        cont_data: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%"
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        texto: {
            padding: '0 0 10px 20px',
            fontSize: "1.3rem",
            fontWeight: "bold"
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start'
        },
        botonsi: {
            // backgroundColor: `rgb(0, 255, 0, 0.5)`,
            padding: "5px 25px 5px 25px",
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: "50px",
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: "15px",
            textDecoration: 'none',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        },
        botonno: {
            // backgroundColor: `rgb(255, 0, 0, 0.5)`,
            padding: "5px 25px 5px 25px",
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: "50px",
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: "15px",
            textDecoration: 'none',
            color: 'black',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        },
        botonnoHover: {
            color: 'black'
        }
    };

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        mostrarmail = _useState2[0],
        getMostrarmail = _useState2[1];

    (0, _react.useEffect)(function () {
        getMostrarmail(verMailmodal);
    }, [verMailmodal]);
    return _react2.default.createElement(
        "div",
        {
            className: mostrarmail ? "displayed" : "displayed_none",
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
                    onClick: vermail }),
                _react2.default.createElement(
                    "p",
                    { style: aller.texto },
                    "\xBFQuieres mandar un correo a ",
                    restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : "este establecimiento",
                    "?"
                )
            ),
            _react2.default.createElement(
                "div",
                { style: aller.cont_data },
                _react2.default.createElement(
                    "a",
                    { style: aller.botonsi,
                        href: "mailto:" + (restauranteData.length > 0 ? restauranteData[0].email : null) },
                    "Si!"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#!",
                        onClick: vermail,
                        style: aller.botonno
                    },
                    "No!"
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Mailmodal);