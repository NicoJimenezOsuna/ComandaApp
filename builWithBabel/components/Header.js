"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _logo = require("../icons/logo.svg");

var _reactRedux = require("react-redux");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var restauranteData = _ref.restauranteData;

    var header = {
        grupo_17: {
            overflow: "visible",
            width: "100%",
            left: "0px",
            top: "102px",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '10px',
            backgroundImage: restauranteData[0].imagen_restaurante.length !== '0' ? "url(" + ((0, _utils.urlImage)() + restauranteData[0].imagen_restaurante) + ")" : 'url(https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613_960_720.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },
        cont_comanda_social: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        cont_comanda_social_titulo: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'flex-end'

        },
        grupo_12: {
            width: "2em",
            height: "2em"
        },
        img_tipo: {
            position: "absolute",
            width: "4em",
            left: "0px",
            top: "20px",
            overflow: "visible"
        },
        relativo: {
            position: 'relative',
            marginLeft: '.5em'
        },
        restaurante: {
            fontSize: "1.3em",
            fontFamily: 'Papyrus',
            color: '#fff',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        cont_logo_comanda: {
            display: 'flex',
            marginTop: '0.2em',
            width: '100%'
        },
        cont_logo_comanda_sp: {
            paddingTop: '5px',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            top: '0',
            right: '5em'
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "div",
            { style: header.grupo_17 },
            _react2.default.createElement(
                "div",
                { style: header.cont_comanda_social },
                _react2.default.createElement(
                    "div",
                    { style: header.cont_logo_comanda_sp },
                    _react2.default.createElement(_logo.ReactComponent, {
                        style: header.grupo_12,
                        alt: "Logo de comandaApp"
                    }),
                    _react2.default.createElement(
                        "a",
                        { href: "https://socialpymesvlc.es" },
                        _react2.default.createElement(
                            "div",
                            { style: header.relativo },
                            _react2.default.createElement(
                                "div",
                                { id: "powered_by" },
                                _react2.default.createElement(
                                    "span",
                                    { style: { fontSize: '.6em' } },
                                    "powered by"
                                )
                            ),
                            _react2.default.createElement("img", {
                                style: header.img_tipo,
                                src: "./assets/img/socialPymes_Imagotipo.png",
                                alt: "Logo de socialpymes"
                            })
                        )
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { style: header.cont_logo_comanda },
                _react2.default.createElement(
                    "div",
                    { style: header.cont_comanda_social_titulo },
                    restauranteData.length > 0 ? _react2.default.createElement("img", { src: (0, _utils.urlImage)() + restauranteData[0].logo,
                        alt: "Logo de restaurante",
                        style: { width: '30%' }
                    }) : _react2.default.createElement("img", { src: (0, _utils.urlImage)() + restauranteData[0].logo, alt: "" }),
                    _react2.default.createElement(
                        "span",
                        { className: "text-shadow",
                            style: header.restaurante
                        },
                        restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : 'Restaurante'
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { style: {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        // backgroundColor: 'rgba(0,0,0,.6)',
                        zIndex: '-1'
                    },
                    className: "fondo_head"
                },
                null
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);