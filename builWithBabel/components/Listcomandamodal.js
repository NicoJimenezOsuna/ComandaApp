"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _Micomandacarta = require("./Micomandacarta");

var _Micomandacarta2 = _interopRequireDefault(_Micomandacarta);

var _Micomandamenu = require("./Micomandamenu");

var _Micomandamenu2 = _interopRequireDefault(_Micomandamenu);

var _reactRedux = require("react-redux");

var _nutricion = require("../icons/nutricion.svg");

var _cocina = require("../icons/cocina.svg");

var _DischardFullComanda = require("./comandkeymenu/DischardFullComanda");

var _DischardFullComanda2 = _interopRequireDefault(_DischardFullComanda);

var _fuego = require("../icons/homecomanda/fuego.svg");

var _reactRouterDom = require("react-router-dom");

var _tokens_access_comanda_home = require("../data/tokens_access_comanda_home");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Listcomandamodal = function Listcomandamodal(_ref) {
    var pedidoViewHandler = _ref.pedidoViewHandler,
        isVisiblePedido = _ref.isVisiblePedido,
        products = _ref.products,
        productMenuSel = _ref.productMenuSel,
        closeloginmodal = _ref.closeloginmodal,
        clientProfile = _ref.clientProfile,
        token = _ref.token;

    var comanda = {
        cont_princ: {
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
        cont_slider: {
            position: "relative",
            minWidth: "90%",
            maxWidth: "90%",
            maxHeight: "90%",
            // minHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "0 10px 10px 10px",
            overflow: "scroll"
        },
        con_title: {
            width: '100%',
            padding: '10px',
            backgroundColor: 'rgba(156, 255, 242, 0.18',
            borderBottom: '2px solid black'
        },
        h2: {
            fontFamily: 'Papyrus',
            textAlign: 'center'

        },
        cont_sec: {
            width: '100%'
        },
        h3: {
            textAlign: 'left'
        },
        hr: {
            width: '90%',
            height: '1px',
            backgroundColor: 'grey',
            margin: '1em auto'
        },
        cont_x: {
            position: 'sticky',
            top: 0,
            right: '0',
            width: '100%',
            zIndex: '9999',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        text: {
            textAlign: 'center',
            fontSize: '2.3em',
            // color: 'rgba(255, 0, 0, 0.53)',
            color: '#808080',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitTransform: 'translate(-50%, -50%)'
        },
        cont_boton_home: {
            width: '100%',
            height: '6em',
            backgroundColor: '#fff',
            position: 'sticky',
            bottom: 0,
            left: 0,
            padding: '.5em',
            borderTop: '1px solid #6e6868'

        },
        cont_boton: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        boton_img: {
            maxWidth: '8em',
            maxHeight: '4em',
            padding: '.5em'
        },
        boton_home: {
            maxWidth: '8em',
            maxHeight: '4em',
            padding: '.5em',
            margin: '0px 2.5px',
            alignItems: 'center',
            filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 3px 3px 6px)',
            borderRadius: '8px',
            border: '2px solid #ECECEC',
            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#fff',
            outline: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignitems: 'center'
        },
        icon_button: {
            maxHidth: '2.5em',
            maxHeight: '2.5em',
            fill: '#6e6868',
            marginRight: '.6em'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        cartaproduct = _useState2[0],
        getCartaProduct = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        menuproduct = _useState4[0],
        getMenuProduct = _useState4[1];

    (0, _react.useEffect)(function () {
        getCartaProduct(products);
        getMenuProduct(productMenuSel);
    }, [products, productMenuSel]);

    return _react2.default.createElement(
        "div",
        {
            style: comanda.cont_princ,
            className: !isVisiblePedido ? "displayed_none" : "displayed"
        },
        _react2.default.createElement(
            "div",
            { style: comanda.cont_slider },
            _react2.default.createElement(
                "div",
                { style: comanda.cont_x },
                _react2.default.createElement(_timesCircleRegular.ReactComponent, {
                    style: { color: 'rgba(0,0,0,.4', width: '3em' },
                    onClick: pedidoViewHandler
                }),
                _react2.default.createElement(_DischardFullComanda2.default, null)
            ),
            _react2.default.createElement(
                "div",
                { style: comanda.con_title },
                _react2.default.createElement(
                    "h2",
                    { className: "label_carta-menu", style: comanda.h2 },
                    "Mi comanda"
                )
            ),
            _react2.default.createElement(
                "div",
                { style: comanda.cont_sec },
                _react2.default.createElement(
                    "h3",
                    { style: comanda.h3 },
                    "CARTA: "
                ),
                Object.keys(cartaproduct).length <= 0 ? _react2.default.createElement(
                    "div",
                    { style: { width: '100%', position: 'relative' } },
                    _react2.default.createElement(
                        "h2",
                        { style: comanda.text },
                        "sin selecci\xF3n"
                    ),
                    _react2.default.createElement(_cocina.ReactComponent, { style: { width: '100%', height: '150px', fill: 'rgb(110, 104, 104, .2)' } })
                ) : _react2.default.createElement(_Micomandacarta2.default, { comandacarta: products })
            ),
            _react2.default.createElement("hr", { style: comanda.hr }),
            _react2.default.createElement(
                "div",
                { style: comanda.cont_sec },
                _react2.default.createElement(
                    "h3",
                    { style: comanda.h3 },
                    "MEN\xDA: "
                ),
                Object.keys(menuproduct).length <= 0 ? _react2.default.createElement(
                    "div",
                    { style: { width: '100%', position: 'relative' } },
                    _react2.default.createElement(
                        "h2",
                        { style: comanda.text },
                        "sin selecci\xF3n"
                    ),
                    _react2.default.createElement(_nutricion.ReactComponent, { style: { width: '100%', height: '150px', fill: 'rgb(110, 104, 104, .2)' } })
                ) : _react2.default.createElement(_Micomandamenu2.default, { comandamenu: productMenuSel })
            ),
            _react2.default.createElement(
                "div",
                { style: comanda.cont_boton_home },
                _react2.default.createElement(
                    "h3",
                    { style: { fontFamily: 'Dosis', paddingBottom: '.3em' } },
                    "Realiza tu pedido desde casa:"
                ),
                _react2.default.createElement(
                    "div",
                    { style: comanda.cont_boton, id: "cont_boton_home" },
                    _react2.default.createElement("img", { id: "img_boton_comanda",
                        style: comanda.boton_img,
                        src: "./assets/img/homecomanda/comandapp_home_300.jpg", alt: "" }),
                    clientProfile.telefono.length === 0 ? _react2.default.createElement(
                        "button",
                        { style: comanda.boton_home,
                            onClick: closeloginmodal
                        },
                        _react2.default.createElement(_fuego.ReactComponent, { style: comanda.icon_button
                        }),
                        "Realizar pedido"
                    ) : _tokens_access_comanda_home.accessComandaHome.find(function (existToken) {
                        return existToken.token === token;
                    }) ? _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/comandappHome" },
                        _react2.default.createElement(
                            "button",
                            { style: comanda.boton_home,
                                onClick: closeloginmodal
                            },
                            _react2.default.createElement(_fuego.ReactComponent, { style: comanda.icon_button
                            }),
                            "Realizar pedido"
                        )
                    ) : _react2.default.createElement(
                        "button",
                        { style: comanda.boton_home,
                            className: "lightOpacity"
                        },
                        _react2.default.createElement(_fuego.ReactComponent, { style: comanda.icon_button
                        }),
                        "Realizar pedido"
                    )
                )
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu,
        clientProfile: state.ClientProfile.clientProfile,
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Listcomandamodal);