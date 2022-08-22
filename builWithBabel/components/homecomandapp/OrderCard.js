'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils/utils');

var _reactRedux = require('react-redux');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _calendario = require('../../icons/homecomanda/calendario.svg');

var _reloj = require('../../icons/homecomanda/reloj.svg');

var _Spinnercircle = require('../Spinnercircle');

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _connect_data_restaurantes = require('../../data/connect_data_restaurantes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCard = function OrderCard(_ref) {
    var item = _ref.item,
        index = _ref.index,
        reduxToken = _ref.reduxToken,
        restauranteData = _ref.restauranteData;


    var card = {
        blue_span: {
            display: 'inline-block',
            textIndent: '.5em',
            color: 'rgb(78, 151, 170)',
            fontWeight: 'bold',
            fontStyle: 'oblique'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        productsOrder = _useState2[0],
        getProductsOrder = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        groupOrder = _useState4[0],
        getGroupOrder = _useState4[1];

    var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        keys = _useState6[0],
        getKeys = _useState6[1];

    var _useState7 = (0, _react.useState)(0),
        _useState8 = _slicedToArray(_useState7, 2),
        precioCarta = _useState8[0],
        getPrecioCarta = _useState8[1];

    var _useState9 = (0, _react.useState)([]),
        _useState10 = _slicedToArray(_useState9, 2),
        precioMenu = _useState10[0],
        getPrecioMenu = _useState10[1];

    var _useState11 = (0, _react.useState)(window.innerWidth),
        _useState12 = _slicedToArray(_useState11, 2),
        sizeWindow = _useState12[0],
        getSizeWindow = _useState12[1];

    var _useState13 = (0, _react.useState)('off'),
        _useState14 = _slicedToArray(_useState13, 2),
        onSpinner = _useState14[0],
        getOnspinner = _useState14[1];

    (0, _react.useEffect)(function () {
        var is_unmount = true;
        getOnspinner('on');
        if (productsOrder.length === 0) {
            //http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/ + numero de pedido
            _axios2.default.get('' + _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.PATH_API + '8/' + reduxToken + '/' + item.numpedido, _connect_data_restaurantes.USER_HEADERS).then(function (response) {
                if (is_unmount) {
                    getOnspinner('off');
                    getProductsOrder(response.data.data.respuesta);
                    getGroupOrder([response.data.data.respuesta.reduce(function (newItem, key) {
                        key.nombrecarta in newItem ? newItem[key.nombrecarta].push(key) : newItem[key.nombrecarta] = [key];
                        return newItem;
                    }, {})]);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        return function () {
            // ComponentWillUnmount in Class Component
            is_unmount = false;
        };
    }, [reduxToken, item.numpedido]);

    (0, _react.useEffect)(function () {
        var is_unmount = true;
        if (groupOrder.length > 0) {
            getKeys(Object.keys(groupOrder[0]));
        }
        return function () {
            // ComponentWillUnmount in Class Component
            is_unmount = false;
        };
    }, [groupOrder]);
    var t = [];
    (0, _react.useEffect)(function () {
        if (keys.length > 0) {
            keys.map(function (key) {
                if (restauranteData.filter(function (plato) {
                    return plato.nombrecarta === key;
                })[0].esmenu) {
                    console.log('hhhhhhhhhhhhhhh', key);
                    // const nameMen = key;
                    // const precMen = restauranteData.filter(plato => plato.nombrecarta === key)[0].precio;
                    // const cntMnu = groupOrder[0][key].find(item=>item.maxmenu);
                    var defMenu = {
                        name: key,
                        precio: restauranteData.filter(function (plato) {
                            return plato.nombrecarta === key;
                        })[0].precio,
                        cantidad: groupOrder[0][key].find(function (item) {
                            return !isNaN(item.maxmenu);
                        }).maxmenu
                    };
                    t.push(defMenu);
                } else {
                    var precCart = (0, _utils.dosDecim)(groupOrder[0][key].reduce(function (init, item) {
                        return item.unidades * item.precio + init;
                    }, 0));
                    getPrecioCarta(precCart);
                }
            });
            console.log('eette');
        }
        getPrecioMenu(t);
    }, [keys]);

    function rotate() {
        getSizeWindow(window.screen.width);
    }

    (0, _react.useEffect)(function () {
        window.addEventListener('orientationchange', rotate, false);
        return function () {
            return window.removeEventListener("mousedown", rotate);
        };
    }, [rotate]);

    var seePropsMenu = function seePropsMenu(key, prop) {
        return precioMenu.find(function (item) {
            return item.name === key;
        })[prop];
    };

    return _react2.default.createElement(
        'div',
        { className: 'full',
            key: index,
            style: {
                background: 'white',
                width: '90%',
                padding: '1em',
                margin: '0 auto 1em auto',
                border: '2px solid lightgrey',
                boxShadow: '4px 4px 30px -10px grey'
            }
        },
        _react2.default.createElement(
            'div',
            { className: 'full' },
            _react2.default.createElement(
                'h4',
                { style: {
                        textAlign: 'left',
                        color: 'dimgrey',
                        background: '#B1D8E2',
                        textIndent: '1em',
                        padding: '1em'
                    } },
                'Num. Pedido: ',
                item ? item.numpedido : null
            )
        ),
        _react2.default.createElement(
            'div',
            { style: {
                    padding: '1em 1em 0 1em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                } },
            _react2.default.createElement(
                'div',
                { style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    } },
                _react2.default.createElement(_calendario.ReactComponent, { style: {
                        padding: '0 .5em',
                        width: '3em',
                        height: '3em',
                        fill: 'dimgrey'
                    } }),
                _react2.default.createElement(
                    'p',
                    null,
                    item.fecha_hora ? item.fecha_hora.split(" ")[0] : null
                )
            ),
            _react2.default.createElement(
                'div',
                { style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    } },
                _react2.default.createElement(_reloj.ReactComponent, { style: {
                        padding: '0 .5em',
                        width: '3em',
                        height: '3em',
                        fill: 'dimgrey'
                    } }),
                _react2.default.createElement(
                    'p',
                    null,
                    item.fecha_hora ? item.fecha_hora.split(" ")[1] : null
                )
            )
        ),
        _react2.default.createElement(
            'p',
            { style: {
                    fontSize: '1.4em',
                    color: 'darkslategrey',
                    padding: '1em',
                    display: 'flex',
                    flexWrap: 'wrap'
                } },
            'ESTADO: ',
            _react2.default.createElement(
                'span',
                { style: { color: 'rgb(78, 151, 170)', marginLeft: '.5em' } },
                item ? item.estado : null
            )
        ),
        item.observaciones ? _react2.default.createElement(
            'div',
            { style: {
                    width: '100%',
                    minHeight: '3em',
                    border: '3px solid #d3d3d3',
                    position: 'relative',
                    padding: '1em .5em'
                } },
            _react2.default.createElement(
                'div',
                { style: {
                        position: 'absolute',
                        top: '-1rem',
                        left: '1rem',
                        background: 'white',
                        padding: '.5em'
                    } },
                _react2.default.createElement(
                    'p',
                    { style: { color: 'dimgrey' } },
                    'Observaciones'
                )
            ),
            item.observaciones
        ) : null,
        _react2.default.createElement(
            'div',
            null,
            keys.length > 0 ? keys.map(function (key, index) {
                // console.log('esmenu',  restauranteData.filter(plato => plato.nombrecarta === Object.keys(item)[0])[0].esmenu);
                // console.log(restauranteData.filter(plato => plato.nombrecarta === key)[0].esmenu)
                // console.log(groupOrder[0][key])
                if (!restauranteData.filter(function (plato) {
                    return plato.nombrecarta === key;
                })[0].esmenu) {
                    return groupOrder[0][key].map(function (carta) {
                        return _react2.default.createElement(
                            'div',
                            { key: index / 4 + carta.nombreplato,
                                style: {
                                    padding: '.5em'
                                } },
                            _react2.default.createElement(
                                'h4',
                                null,
                                carta.nombreplato
                            ),
                            _react2.default.createElement('hr', { style: {
                                    width: '100%',
                                    border: '1px solid #d3d3d3',
                                    marginBottom: '1em'
                                } }),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Estado del producto: ',
                                _react2.default.createElement(
                                    'span',
                                    {
                                        style: card.blue_span },
                                    carta.estado
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '\xDAltima modificaci\xF3n: ',
                                _react2.default.createElement(
                                    'span',
                                    {
                                        style: card.blue_span },
                                    carta.modificado.split(' ')[1]
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '1em'
                                    }
                                },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Unidades: ',
                                    carta.unidades
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { style: { textAlign: 'right' } },
                                    'Precio: ',
                                    (0, _utils.dosDecim)(carta.precio),
                                    ' \u20AC'
                                )
                            )
                        );
                    });
                } else {
                    return _react2.default.createElement(
                        _react.Fragment,
                        { key: index + key },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    padding: '.5em'
                                } },
                            _react2.default.createElement(
                                'h4',
                                { style: { textTransform: 'uppercase' } },
                                key
                            ),
                            _react2.default.createElement('hr', { style: {
                                    width: '100%',
                                    border: '1px solid #d3d3d3',
                                    marginBottom: '1em'
                                } }),
                            _react2.default.createElement(
                                'ul',
                                { id: 'list_menu', style: { margin: '0px .5rem 0 1rem' } },
                                groupOrder[0][key].map(function (menu, index) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: menu.nombreplato + index },
                                        _react2.default.createElement(
                                            'ul',
                                            null,
                                            _react2.default.createElement(
                                                'li',
                                                { style: { padding: '.2rem' } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-start'
                                                            // borderBottom: '1px solid rgb(211, 211, 211)'
                                                        } },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { style: {
                                                                fontStyle: 'oblique',
                                                                fontWeight: 'bold',
                                                                width: '75%'
                                                            } },
                                                        menu.nombreplato
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'span',
                                                            { style: {
                                                                    color: '#4e97aa'
                                                                }
                                                            },
                                                            sizeWindow < 470 ? 'Uds: ' : 'Unidades: '
                                                        ),
                                                        menu.unidades
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { style: {
                                                            display: 'flex',
                                                            justifyContent: 'start',
                                                            alignItems: 'flex-start',
                                                            flexWrap: 'wrap',
                                                            padding: '0 .5em'
                                                        } },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { style: { margin: '0 5px' } },
                                                        'Unidades: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                style: card.blue_span },
                                                            ' ',
                                                            menu.estado
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { style: { margin: '0 5px' } },
                                                        'Ult. modificaci\xF3n: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                style: card.blue_span },
                                                            ' ',
                                                            menu.modificado.split(' ')[1]
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '.5em 0',
                                        flexWrap: 'wrap'
                                    } },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Unidades: ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        precioMenu.length > 0 ? seePropsMenu(key, 'cantidad') + ' uds. x ' + (0, _utils.dosDecim)(seePropsMenu(key, 'precio')) : null,
                                        '\u20AC'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Precio: ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        precioMenu.length > 0 ? (0, _utils.dosDecim)(seePropsMenu(key, 'cantidad') * seePropsMenu(key, 'precio')) + '€' : null
                                    )
                                )
                            )
                        )
                    );
                }
            }) : onSpinner === 'on' ? _react2.default.createElement(_Spinnercircle2.default, null) : null,
            _react2.default.createElement('hr', { style: {
                    width: '100%',
                    border: '1px solid #d3d3d3',
                    marginBottom: '1em'
                } }),
            _react2.default.createElement(
                'p',
                { style: { textAlign: 'right', paddingRight: '.5em' } },
                'TOTAL: ',
                productsOrder ? (0, _utils.dosDecim)(productsOrder.reduce(function (init, item) {
                    return item.unidades * item.precio + init;
                }, 0)) : null,
                ' \u20AC'
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        reduxToken: state.Token.token,
        clientProfile: state.ClientProfile.clientProfile,
        restauranteData: state.RestauranteData.RestauranteProfile[0].respuesta
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(OrderCard);