'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _MenuHome = require('../../components/homecomandapp/MenuHome');

var _MenuHome2 = _interopRequireDefault(_MenuHome);

var _confirmar = require('../../icons/homecomanda/confirmar.svg');

var _atencion = require('../../icons/homecomanda/atencion.svg');

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Profileuser = require('../../components/homecomandapp/Profileuser');

var _Profileuser2 = _interopRequireDefault(_Profileuser);

var _SendComanda = require('../../components/homecomandapp/SendComanda');

var _SendComanda2 = _interopRequireDefault(_SendComanda);

var _OrderStatus = require('../../components/homecomandapp/OrderStatus');

var _OrderStatus2 = _interopRequireDefault(_OrderStatus);

var _OrderHistory = require('../../components/homecomandapp/OrderHistory');

var _OrderHistory2 = _interopRequireDefault(_OrderHistory);

var _index = require('../../redux/actions/index');

var _connect_data_restaurantes = require('../../data/connect_data_restaurantes');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../../utils/utils');

var _Spinnercircle = require('../../components/Spinnercircle');

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _HelmetSeoComponent = require('../../components/Seo/HelmetSeoComponent');

var _HelmetSeoComponent2 = _interopRequireDefault(_HelmetSeoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComandappHome = function ComandappHome(_ref) {
    var restauranteData = _ref.restauranteData,
        clientProfile = _ref.clientProfile,
        reduxToken = _ref.reduxToken;


    var menu = {
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '1em',
            // position: 'absolute',
            top: 0,
            zIndex: '-1'

        },
        img: {
            width: '6em',
            height: '3em'
        }
    };

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        expandmenu = _useState2[0],
        getExpandMenu = _useState2[1];

    var _useState3 = (0, _react.useState)('profile'),
        _useState4 = _slicedToArray(_useState3, 2),
        view = _useState4[0],
        getView = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        modaltable = _useState6[0],
        getModalTable = _useState6[1];

    var _useState7 = (0, _react.useState)(''),
        _useState8 = _slicedToArray(_useState7, 2),
        modalid = _useState8[0],
        getModalid = _useState8[1];

    var _useState9 = (0, _react.useState)(false),
        _useState10 = _slicedToArray(_useState9, 2),
        confirmbox = _useState10[0],
        getConfirmBox = _useState10[1];

    var _useState11 = (0, _react.useState)({}),
        _useState12 = _slicedToArray(_useState11, 2),
        completeOrder = _useState12[0],
        getCompleteOrder = _useState12[1];

    var _useState13 = (0, _react.useState)(false),
        _useState14 = _slicedToArray(_useState13, 2),
        finallySend = _useState14[0],
        setFinallySend = _useState14[1];

    var _useState15 = (0, _react.useState)(''),
        _useState16 = _slicedToArray(_useState15, 2),
        errormessage = _useState16[0],
        getErrorMessage = _useState16[1];

    var _useState17 = (0, _react.useState)(''),
        _useState18 = _slicedToArray(_useState17, 2),
        errorModalOrder = _useState18[0],
        getErrorModalOrder = _useState18[1];

    var _useState19 = (0, _react.useState)('off'),
        _useState20 = _slicedToArray(_useState19, 2),
        onSpinner = _useState20[0],
        getOnspinner = _useState20[1];

    (0, _react.useEffect)(function () {
        var is_unmount = true;
        //CHECK ORDERS
        if (clientProfile.telefono) {
            // http://restaurante.comandapp.es/api/ws/9/cLZDdvFTJcl5cWG/TLF/' + clientProfile.telefono
            _axios2.default.get('' + _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.PATH_API + '9/' + reduxToken + '/' + clientProfile.telefono, _connect_data_restaurantes.USER_HEADERS).then(function (response) {
                if (is_unmount) {
                    var numpedido_descend = response.data.data.respuesta.sort(function (a, b) {
                        return b.numpedido - a.numpedido;
                    });
                    // CLASSIFY ORDERS PENDING DELIVERY
                    //--PENDING ORDERS:
                    (0, _index.addPendingOrders)(numpedido_descend.filter(function (order) {
                        return order.estado_id >= 5;
                    }));
                    //--END ORDERS:
                    (0, _index.addEndOrders)(numpedido_descend.filter(function (order) {
                        return order.estado_id < 5;
                    }));
                }
            }).catch(function (error) {
                return console.log(error);
            });
        }
        return function () {
            // ComponentWillUnmount in Class Component
            is_unmount = false;
        };
    }, [clientProfile.telefono, reduxToken]);

    var SendComandaFull = function SendComandaFull() {
        if (completeOrder.length === 0) return;

        var userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "text/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        getOnspinner('on');
        _axios2.default.post('http://restaurante.comandapp.es/api/ws/6/' + reduxToken, completeOrder, userHeader).then(function (response) {
            if (response.data.data.mensaje !== 'OK') {
                getErrorModalOrder('Error al intentar realizar el pedido. Inténtelo más tarde.');
            } else {
                (0, _index.dischardFull)();
                setFinallySend(true);
                setTimeout(function () {
                    setFinallySend(false);
                    getConfirmBox(false);
                }, 2500);
                getCompleteOrder({});
                (0, _index.addLastOrder)(response.data.data.respuesta.id);
                localStorage.setItem('pedionline', JSON.stringify(response));
                getOnspinner('off');
            }
        }).catch(function (error) {
            getOnspinner('off');
            getErrorModalOrder('Error en la conexión.');
        });
        getCompleteOrder({});
        console.log('pedido finalizado', completeOrder);
    };

    var deleteErrorMessage = function deleteErrorMessage() {
        getErrorModalOrder('');
        getErrorModalOrder('');
        getConfirmBox(false);
    };

    var expandMenuHome = function expandMenuHome() {
        expandmenu ? getExpandMenu(false) : getExpandMenu(true);
    };

    var changeView = function changeView(e) {
        window.location.hash = e.target.id;
        getView(window.location.hash);
    };

    var visibleModaltable = function visibleModaltable(productid) {
        modaltable ? getModalTable(false) : getModalTable(true);
        getModalid(productid);
    };

    if (restauranteData.length <= 0) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }

    return _react2.default.createElement(
        'div',
        { className: 'subRootHome' },
        _react2.default.createElement(_HelmetSeoComponent2.default, null),
        expandmenu ? null : _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'div',
            { className: confirmbox ? "displayed absolute_medium confirm_box" : "displayed_none absolute_medium confirm_box"
            },
            _react2.default.createElement(
                'h2',
                { style: { paddingBottom: '.5em' } },
                'CONFIRMACI\xD3N DE PEDIDO'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Se dispone a realizar su pedido a la siguiente direcci\xF3n.'
            ),
            _react2.default.createElement(
                'p',
                { style: { color: 'grey', padding: '.5em 0' } },
                'Direcci\xF3n: ',
                _react2.default.createElement(
                    'span',
                    { style: {
                            fontWeight: 'bolder',
                            color: 'black'
                        } },
                    clientProfile.direccion
                )
            ),
            errorModalOrder.length > 0 || finallySend ? null : _react2.default.createElement(
                'p',
                null,
                '\xBFEs correcto?'
            ),
            _react2.default.createElement(
                'div',
                { style: {
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '.5em 1em'
                    } },
                errorModalOrder.length > 0 && !finallySend ? _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                    _react2.default.createElement(_atencion.ReactComponent, { style: {
                            maxWidth: '4em',
                            maxHeight: '4em',
                            fill: 'red'
                        } }),
                    _react2.default.createElement(
                        'p',
                        { style: {
                                color: 'red',
                                fontFamily: 'Papyrus',
                                fontSize: '1.3em'
                            } },
                        errorModalOrder
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button',
                            className: 'exit_button',
                            onClick: deleteErrorMessage
                        },
                        'Salir'
                    )
                ) : onSpinner === 'on' ? _react2.default.createElement(_Spinnercircle2.default, null) : !finallySend ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        'button',
                        { className: 'confirmbox_button', type: 'button',
                            onClick: function onClick() {
                                return SendComandaFull();
                            }
                        },
                        'SI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'confirmbox_button', type: 'button',
                            onClick: function onClick() {
                                return getConfirmBox(false);
                            }
                        },
                        'NO'
                    )
                ) : _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                    _react2.default.createElement(_confirmar.ReactComponent, { style: {
                            maxWidth: '4em',
                            maxHeight: '4em',
                            fill: 'green'
                        } }),
                    _react2.default.createElement(
                        'p',
                        { style: {
                                color: 'green',
                                fontFamily: 'Papyrus',
                                fontSize: '1.3em'
                            } },
                        'Enviado con \xE9xito'
                    )
                )
            ),
            _react2.default.createElement('img', { src: (0, _utils.urlImage)() + restauranteData[0].logo, alt: 'logo restaurante',
                style: { maxWidth: '25%', maxHeight: '25%' } })
        ),
        _react2.default.createElement(
            'div',
            { style: {
                    position: 'relative',
                    minWidth: '100%'
                    // height: expandmenu ? '100%' : 0,

                } },
            _react2.default.createElement(
                'div',
                { style: {
                        position: 'sticky',
                        top: 0,
                        minWidth: '100%',
                        overflow: 'visible',
                        zIndex: '9000'
                    } },
                _react2.default.createElement(_MenuHome2.default, { expandMenuHome: expandMenuHome,
                    expandmenu: expandmenu,
                    changeView: changeView
                })
            ),
            _react2.default.createElement(
                'div',
                { className: expandmenu ? 'reduce' : 'normal' },
                _react2.default.createElement(
                    'div',
                    {
                        style: menu.cont_img },
                    _react2.default.createElement('img', { id: 'img_boton_comanda',
                        style: menu.img,
                        src: './assets/img/homecomanda/comandapp_home_300.png', alt: 'logo comandahome socialpymes' })
                ),
                function () {
                    switch (view) {
                        case "#datos-envio":
                            return _react2.default.createElement(_Profileuser2.default, null);
                        case "#enviar-pedido":
                            return _react2.default.createElement(_SendComanda2.default, {
                                modaltable: modaltable,
                                visibleModaltable: visibleModaltable,
                                modalid: modalid,
                                getConfirmBox: getConfirmBox,
                                getCompleteOrder: getCompleteOrder,
                                errormessage: errormessage,
                                getErrorMessage: getErrorMessage
                            });
                        case "#estado-pedido":
                            return _react2.default.createElement(_OrderStatus2.default, null);
                        case "#historico-pedidos":
                            return _react2.default.createElement(_OrderHistory2.default, null);
                        default:
                            return _react2.default.createElement(_Profileuser2.default, null);
                    }
                }()
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        clientProfile: state.ClientProfile.clientProfile,
        reduxToken: state.Token.token,
        pendingOrders: state.Orders.pendingOrders,
        lastOrder: state.LastOrder.lastOrder
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ComandappHome);