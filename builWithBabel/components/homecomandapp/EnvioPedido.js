"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ModalTable = require("./ModalTable");

var _ModalTable2 = _interopRequireDefault(_ModalTable);

var _masmenos = require("../../icons/homecomanda/masmenos.svg");

var _reactRedux = require("react-redux");

var _utils = require("../../utils/utils");

var _ModalComandKey = require("./ModalComandKey");

var _ModalComandKey2 = _interopRequireDefault(_ModalComandKey);

var _editar = require("../../icons/homecomanda/editar.svg");

var _mano = require("../../icons/homecomanda/mano.svg");

var _eliminar = require("../../icons/homecomanda/eliminar.svg");

var _Modalmenuselected = require("./Modalmenuselected");

var _Modalmenuselected2 = _interopRequireDefault(_Modalmenuselected);

var _Modalcomandkeypadhomemenu = require("./Modalcomandkeypadhomemenu");

var _Modalcomandkeypadhomemenu2 = _interopRequireDefault(_Modalcomandkeypadhomemenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnvioPedido = function EnvioPedido(_ref) {
    var modaltable = _ref.modaltable,
        visibleModaltable = _ref.visibleModaltable,
        background = _ref.background,
        products = _ref.products,
        productMenuSel = _ref.productMenuSel,
        modalid = _ref.modalid;

    var envio = {
        cont_princ: {
            width: '95%',
            backgroundColor: background ? background : '#fff',
            padding: '.3em',
            margin: '1em auto',
            borderRadius: '10px'
        },
        touch: {
            float: 'right',
            width: '2em',
            height: '2em'
        }
        // carta
        // cant: 1
        // imagen: "http://restaurante.comandapp.es/storage/rest1/entrante3.png"
        // nombreplato: "Rollitos de tortilla y jamón"
        // observaciones: null
        // orden: 1
        // plato_id: 34
        // precio: "1.2000"

        // const [selectedIcon, getelectedIcon] = useState(false);

    };return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "div",
            { style: envio.cont_princ
            },
            _react2.default.createElement(
                "table",
                { className: "tg" },
                _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                        "tr",
                        null,
                        _react2.default.createElement(
                            "th",
                            { className: "tg-0lax w5" },
                            "imagen"
                        ),
                        _react2.default.createElement(
                            "th",
                            { className: "tg-0lax w55" },
                            "producto"
                        ),
                        _react2.default.createElement(
                            "th",
                            { className: "tg-0lax w5" },
                            "uds"
                        ),
                        _react2.default.createElement(
                            "th",
                            { className: "tg-0lax w20" },
                            _react2.default.createElement(
                                "sup",
                                null,
                                "\u20AC"
                            ),
                            "/ud"
                        ),
                        _react2.default.createElement(
                            "th",
                            { className: "tg-0lax w15" },
                            _react2.default.createElement(_masmenos.ReactComponent, {
                                style: { width: '100%', height: '100%' },
                                title: "aumentar o reducir unidades"
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    "tbody",
                    null,
                    products.map(function (item) {
                        return _react2.default.createElement(
                            "tr",
                            { key: item.imagen },
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w5",
                                    onClick: function onClick() {
                                        return visibleModaltable(item.nombreplato);
                                    },
                                    style: {
                                        backgroundImage: 'url("' + item.imagen + '")',
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center'
                                    }
                                },
                                _react2.default.createElement(
                                    "div",
                                    { style: { position: 'relative', right: 0, bottom: 0 } },
                                    _react2.default.createElement(_ModalTable2.default, {
                                        modaltable: modaltable,
                                        imagen: item.imagen,
                                        modalid: modalid,
                                        ident: item.nombreplato
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w55" },
                                item.nombreplato
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w5 center" },
                                item.cant
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w20 center" },
                                (0, _utils.dosDecim)(item.precio, 2),
                                " \u20AC"
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w15"
                                    // onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                                },
                                modaltable && modalid === item.nombreplato + '_comand' ? _react2.default.createElement(_eliminar.ReactComponent, {
                                    onClick: function onClick() {
                                        return visibleModaltable(item.nombreplato + '_comand');
                                    },
                                    style: { width: '100%', height: '100%', fill: 'red' },
                                    title: "aumentar o reducir unidades"
                                }) : _react2.default.createElement(_editar.ReactComponent, {
                                    onClick: function onClick() {
                                        return visibleModaltable(item.nombreplato + '_comand');
                                    },
                                    style: { width: '100%', height: '100%' },
                                    title: "aumentar o reducir unidades"
                                }),
                                _react2.default.createElement(
                                    "div",
                                    { style: {
                                            position: 'relative',
                                            width: '100%',
                                            float: 'left'
                                        } },
                                    _react2.default.createElement(_ModalComandKey2.default, {
                                        modaltable: modaltable,
                                        modalid: modalid,
                                        ident: item.nombreplato + '_comand',
                                        data: item
                                    })
                                )
                            )
                        );
                    }),
                    productMenuSel.map(function (item, index) {
                        var keys = Object.keys(item);
                        var validkeys = keys.filter(function (key) {
                            return key !== 'id' && key !== 'nombre' && key !== 'precio' && key !== 'cant';
                        });
                        return _react2.default.createElement(
                            "tr",
                            { key: index },
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w5",
                                    key: index + 100,
                                    onClick: function onClick() {
                                        return visibleModaltable(item.nombre + '_' + index);
                                    },
                                    style: {
                                        backgroundImage: 'url("./assets/img/menu.jpg")',
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center'
                                    }
                                },
                                _react2.default.createElement(
                                    "div",
                                    { style: { position: 'relative', right: 0, bottom: 0 } },
                                    _react2.default.createElement(_ModalTable2.default, {
                                        modaltable: modaltable,
                                        imagen: "./assets/img/menu.jpg",
                                        modalid: modalid,
                                        ident: item.nombre + '_' + index
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w55",
                                    onClick: function onClick() {
                                        return visibleModaltable(item.nombre + '_' + index + '_ + id');
                                    }
                                },
                                item.nombre,
                                _react2.default.createElement(_mano.ReactComponent, { style: envio.touch }),
                                _react2.default.createElement(
                                    "div",
                                    { style: { position: 'relative', right: 0, bottom: 0 } },
                                    _react2.default.createElement(_Modalmenuselected2.default, {
                                        modaltable: modaltable,
                                        items: validkeys,
                                        item: item,
                                        modalid: modalid,
                                        ident: item.nombre + '_' + index + '_ + id'
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w5 center" },
                                item.cant
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w20 center" },
                                (0, _utils.dosDecim)(item.precio, 2),
                                " \u20AC"
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "tg-buh4 w15"
                                    // onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                                },
                                modaltable && modalid === item.internalID + '__comand' ? _react2.default.createElement(_eliminar.ReactComponent, {
                                    onClick: function onClick() {
                                        return visibleModaltable(item.internalID + '__comand');
                                    },
                                    style: { width: '100%', height: '100%', fill: 'red' },
                                    title: "aumentar o reducir unidades"
                                }) : _react2.default.createElement(_editar.ReactComponent, {
                                    onClick: function onClick() {
                                        return visibleModaltable(item.internalID + '__comand');
                                    },
                                    style: { width: '100%', height: '100%' },
                                    title: "aumentar o reducir unidades"
                                }),
                                _react2.default.createElement(
                                    "div",
                                    { style: {
                                            position: 'relative',
                                            width: '100%',
                                            float: 'left'
                                        } },
                                    _react2.default.createElement(_Modalcomandkeypadhomemenu2.default
                                    //pasamos el producto
                                    , { data: item
                                        //si es carta true, si es menu false
                                        , nonprice: false,
                                        wordkey: 'menu',
                                        modaltable: modaltable,
                                        modalid: modalid,
                                        ident: item.internalID + '__comand'
                                    })
                                )
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    "tfoot",
                    null,
                    _react2.default.createElement(
                        "tr",
                        null,
                        _react2.default.createElement(
                            "td",
                            { colSpan: "3" },
                            "Total"
                        ),
                        _react2.default.createElement(
                            "td",
                            { colSpan: "2", style: { textAlign: 'right' } },
                            (0, _utils.TotalComanda)(products, productMenuSel),
                            " \u20AC"
                        )
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
        clientProfile: state.ClientProfile.clientProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(EnvioPedido);