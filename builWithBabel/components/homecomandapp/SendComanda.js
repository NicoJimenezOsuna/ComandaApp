"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TitleSection = require("./TitleSection");

var _TitleSection2 = _interopRequireDefault(_TitleSection);

var _ExplanationSection = require("./ExplanationSection");

var _ExplanationSection2 = _interopRequireDefault(_ExplanationSection);

var _reactRedux = require("react-redux");

var _EnvioPedido = require("./EnvioPedido");

var _EnvioPedido2 = _interopRequireDefault(_EnvioPedido);

var _Textarea = require("./Textarea");

var _Textarea2 = _interopRequireDefault(_Textarea);

var _local = require("../../icons/homecomanda/local.svg");

var _tokens_access_comanda_home = require("../../data/tokens_access_comanda_home");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SendComanda = function SendComanda(_ref) {
    var products = _ref.products,
        productMenuSel = _ref.productMenuSel,
        restauranteData = _ref.restauranteData,
        modaltable = _ref.modaltable,
        visibleModaltable = _ref.visibleModaltable,
        modalid = _ref.modalid,
        reduxToken = _ref.reduxToken,
        closemodaltable = _ref.closemodaltable,
        clientProfile = _ref.clientProfile,
        getConfirmBox = _ref.getConfirmBox,
        getCompleteOrder = _ref.getCompleteOrder,
        errormessage = _ref.errormessage,
        getErrorMessage = _ref.getErrorMessage;

    var _useState = (0, _react.useState)(null),
        _useState2 = _slicedToArray(_useState, 2),
        textValue = _useState2[0],
        getTextValue = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        checkState = _useState4[0],
        getCheckState = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        onlyLocal = _useState6[0],
        getOnlyLocal = _useState6[1];

    (0, _react.useEffect)(function () {
        var onlyLocalData = _tokens_access_comanda_home.accessComandaHome.filter(function (data) {
            return data.token === reduxToken;
        });
        console.log('objeto', onlyLocalData);
        // if (onlyLocalData.length > 0) {
        if (!onlyLocalData[0].localOnly) {
            getOnlyLocal(false);
        } else {
            getOnlyLocal(true);
            getCheckState(true);
        }
        // }
    }, [reduxToken]);

    var send = {
        button: {
            display: 'block',
            width: '13em',
            height: '3em',
            padding: '.5 0',
            background: '#fff',
            border: '2px solid #B1D8E2',
            color: '#B1D8E2',
            margin: '1em auto 5em auto'
        }

        // const [errormessage, getErrorMessage] = useState('')

    };var valueText = function valueText(e) {
        var valuetextarea = e.target.value;
        if (valuetextarea) {
            getTextValue(e.target.value);
        } else {
            getTextValue(null);
        }
    };

    var enviaPedido = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _console;

            var userBody, defCarta, defMenu, defEnvArray, i, allComandaGroupingAll, groupBy, allComandaGroupingFORSEND;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            userBody = {
                                "nombre": clientProfile.nombre ? clientProfile.nombre : null,
                                "direccion": clientProfile.direccion ? clientProfile.direccion : null,
                                "telefono": clientProfile.telefono ? clientProfile.telefono : null,
                                "cp": clientProfile.cp ? clientProfile.cp : null,
                                "poblacion": clientProfile.poblacion ? clientProfile.poblacion : null,
                                "email": clientProfile.email ? clientProfile.email : null,
                                "observpedido": checkState === true ? !textValue ? "RECOGIDA EN LOCAL" : "RECOGIDA EN LOCAL\n " + textValue : !textValue ? null : textValue,
                                "pedido": ''
                                // 0:
                                // cant: 2
                                // plato_id: 36
                                // __proto__: Object
                                // 1:
                                // Guarnición: "Patatas Fritas"
                                // Primeros Platos: "Hamburguesa"
                                // Refrescos: "Agua mineral"
                                // cant: 2
                                // id: 9
                                // internalID: 59515675848
                                // nombre: "MENÚ INFATIL"
                                // precio: 7
                                //
                                // let html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

                            };
                            defCarta = products.map(function (item) {
                                return {
                                    "carta_id": item.carta_id,
                                    "unidades": item.cant,
                                    "plato_id": item.plato_id,
                                    "maxmenu": null
                                };
                            });
                            defMenu = productMenuSel.map(function (item, index) {
                                //     delete item.internalID;
                                //     delete item.precio;
                                //     delete item.nombre;
                                //     return item;

                                // Postres: "Bomba de chocolate blanco"
                                // Primeros Platos: "Arroz a Banda"
                                // Refrescos: "Cerveza | Doble"
                                // Segundos Platos: "Rollitos de tortilla y jamón"
                                // Vinos: "Tinto de la casa"
                                // *** cant: 2
                                // **** id: 5
                                //--------------- internalID: 41984304608
                                //--------- nombre: "MENÚ LUNES"
                                // --------------precio: 6.5

                                console.log('item de menu', item);
                                var object_keys = Object.keys(item);
                                var usable_keys = object_keys.filter(function (key) {
                                    if (key !== 'internalID' && key !== 'precio' && key !== 'nombre' && key !== 'cant' && key !== 'id') {
                                        return key;
                                    }
                                });
                                console.log('object keys', object_keys);
                                return usable_keys.map(function (key) {
                                    return {
                                        "carta_id": item.id,
                                        "unidades": item.cant,
                                        "plato_id": parseInt(item[key].split('?')[1]),
                                        "maxmenu": productMenuSel.filter(function (menu) {
                                            return menu.id === item.id;
                                        }).length
                                    };
                                });
                            });
                            defEnvArray = [];

                            for (i = 0; i < defMenu.length; i++) {
                                defEnvArray = [].concat(_toConsumableArray(defEnvArray), _toConsumableArray(defMenu[i]));
                            }

                            //  GROUPING ITEMS BY KEY === "plato_id"
                            allComandaGroupingAll = [].concat(_toConsumableArray(defCarta), _toConsumableArray(defEnvArray));

                            groupBy = function groupBy(miarray, prop) {
                                return miarray.reduce(function (groups, item) {
                                    var val = item[prop];
                                    groups[val] = groups[val] || { carta_id: item.carta_id, unidades: 0, plato_id: item.plato_id, maxmenu: '' };
                                    groups[val].unidades += item.unidades;
                                    groups[val].maxmenu = item.maxmenu;
                                    return groups;
                                }, {});
                            };
                            // ------------ END GROUPING FUNCTION -----------


                            console.log('group by', groupBy(allComandaGroupingAll, 'plato_id'));

                            allComandaGroupingFORSEND = groupBy(allComandaGroupingAll, 'plato_id');
                            //FIN PRUEBA
                            //CONTROL PRUEBA DE ENVÍO

                            (_console = console).log.apply(_console, ['resumen pedido'].concat(_toConsumableArray(defCarta), _toConsumableArray(defEnvArray)));
                            // userBody.pedido = {...defCarta, ...defMenu}
                            // userBody.pedido = JSON.stringify(defCarta)
                            // console.log('uswerBody length', defCarta.length)
                            // console.log('userbody content', defCarta)
                            if (!userBody.nombre || !userBody.direccion || !userBody.telefono) {
                                getErrorMessage('Completa los datos necesarios en perfil de usuario');
                            } else if (defCarta.length === 0 && defMenu.length === 0) {
                                getErrorMessage('No has seleccionado ningún producto');
                            } else {
                                console.log('predfbh', userBody.pedido);
                                //ENVÍO SÓLO CARTA
                                // userBody.pedido = JSON.stringify({...defCarta})
                                // ENVÍO CARTA Y MENÚ
                                // userBody.pedido = JSON.stringify({...defCarta, ...defEnvArray})
                                // userBody.pedido = JSON.stringify(allComandaGroupingFORSEND)
                                console.log('nueva restructuración', allComandaGroupingFORSEND);
                                getCompleteOrder(userBody);
                                getConfirmBox(true);
                            }

                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function enviaPedido() {
            return _ref2.apply(this, arguments);
        };
    }();

    var getCheckStatus = function getCheckStatus(e) {
        getCheckState(e.target.checked);
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_TitleSection2.default, { title: 'Envío de pedido' }),
        _react2.default.createElement(_ExplanationSection2.default, {
            explanation: 'Realiza el envío de tu pedido. No olvides revisar o actualizar tus datos de envío.'
        }),
        _react2.default.createElement(_EnvioPedido2.default, {
            modaltable: modaltable,
            visibleModaltable: visibleModaltable,
            modalid: modalid
        }),
        _react2.default.createElement(
            "div",
            { style: {
                    width: 'fit-content',
                    padding: '0 1em 0 0',
                    background: 'white',
                    margin: '0 auto',
                    borderRadius: '10px',
                    display: 'flex',
                    marginBottom: '1rem'
                } },
            _react2.default.createElement(
                "div",
                { style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgb(177, 216, 226)',
                        width: '3em',
                        height: '3em',
                        borderRadius: '10px 0px 0px 10px',
                        fill: 'rgb(112, 112, 112)',
                        marginRight: '1em'
                    } },
                _react2.default.createElement(_local.ReactComponent, { style: {
                        width: '2rem',
                        height: '2rem'
                    } })
            ),
            _react2.default.createElement(
                "div",
                { style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    } },
                !onlyLocal ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement("input", { type: "checkbox",
                        name: "local",
                        id: "local",
                        className: "state",
                        style: { display: 'none' },
                        onChange: function onChange(e) {
                            return getCheckStatus(e);
                        },
                        defaultChecked: false
                    }),
                    _react2.default.createElement(
                        "label",
                        {
                            className: "label",
                            htmlFor: "local" },
                        _react2.default.createElement("div", { className: "indicator" }),
                        _react2.default.createElement(
                            "span",
                            { style: {
                                    marginLeft: '1em'
                                } },
                            "Recoger en local"
                        )
                    )
                ) : _react2.default.createElement(
                    "span",
                    null,
                    "S\xF3lo recogida en local"
                )
            )
        ),
        _react2.default.createElement(_Textarea2.default, {
            setid: "observaciones",
            setplaceholder: "observaciones",
            setname: "observaciones",
            icontype: 'observaciones',
            textlabel: 'observaciones',
            bgIcon: '#B1D8E2',
            coloricon: '#707070',
            required: false,
            maxlength: 300,
            errormessage: errormessage,
            valueText: valueText
        }),
        _react2.default.createElement(
            "button",
            { style: send.button,
                onClick: enviaPedido },
            "Enviar"
        )
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu,
        clientProfile: state.ClientProfile.clientProfile,
        reduxToken: state.Token.token,
        restauranteData: state.RestauranteData.RestauranteProfile[0].respuesta
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SendComanda);