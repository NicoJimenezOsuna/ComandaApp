'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _menu_square = require('../../icons/homecomanda/menu_square.svg');

var _reactRedux = require('react-redux');

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuHome = function MenuHome(_ref) {
    var expandMenuHome = _ref.expandMenuHome,
        expandmenu = _ref.expandmenu,
        changeView = _ref.changeView,
        restauranteData = _ref.restauranteData;

    var menu = {
        cont_menu: {
            position: 'absolute',
            top: 0,
            left: 0,
            // backgroundColor: 'pink',
            boxShadow: 'rgba(0, 0, 0, .376) 1px 18px 2rem',
            height: expandmenu ? '100vh' : '5em'

        },
        icon_menu: {
            marginTop: '1em',
            marginLeft: '1em',
            width: '2em',
            height: '2em',
            position: 'absolute',
            userSelect: 'none'
        }
    };

    var logoComanda = (0, _react.useRef)();

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        logoComandaHeight = _useState2[0],
        getLogoComandaHeright = _useState2[1];

    var logoComandappHeight = function logoComandappHeight() {
        getLogoComandaHeright(logoComanda.current.clientHeight + 'px');
    };
    (0, _react.useEffect)(function () {
        logoComandappHeight();
    });

    return _react2.default.createElement(
        'div',
        { style: menu.cont_menu,
            className: expandmenu ? "cont_menuhome nav-comandhome_expand" : "cont_menuhome nav-comandhome",
            onClick: expandMenuHome
        },
        _react2.default.createElement(_menu_square.ReactComponent, { style: menu.icon_menu }),
        _react2.default.createElement(
            'ul',
            { className: 'uloptionsmenuhome'
                // SET PADDING-TOP TO HEIGHT OF LOGO
                , style: { paddingTop: logoComandaHeight }
            },
            _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    id: 'datos-envio',
                    onClick: changeView
                },
                'Datos de env\xEDo'
            ),
            _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    id: 'enviar-pedido',
                    onClick: changeView
                },
                'Env\xEDar pedido'
            ),
            _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    id: 'estado-pedido',
                    onClick: changeView
                },
                'Estado de pedido'
            ),
            _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    id: 'historico-pedidos',
                    onClick: changeView
                },
                'Hist\xF3rico de pedidos'
            ),
            restauranteData.length > 0 ? _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    ref: logoComanda
                },
                _react2.default.createElement('img', { src: (0, _utils.urlImage)() + restauranteData[0].logo, alt: '',
                    style: {
                        width: '3em',
                        height: 'auto'
                    } })
            ) : null,
            _react2.default.createElement(
                'li',
                { className: 'lioptionsmenuhome',
                    style: {
                        position: 'absolute',
                        top: '-.5em',
                        right: expandmenu ? '.7em' : '1000em'
                    }
                },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/categoria' },
                    _react2.default.createElement('img', { src: 'assets/img/comanda_transparente.png', alt: 'logotipo compandapp',
                        style: {
                            width: '5rem',
                            height: '5rem',
                            display: 'block',
                            margin: '0px auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(225deg, #8080808c, rgb(255, 255, 255))',
                            boxShadow: 'grey -3px 8px 31px -5px'
                        }
                    }),
                    _react2.default.createElement(
                        'span',
                        { style: {
                                fontSize: '1.3rem',
                                textAlign: 'center',
                                display: 'block',
                                color: '#757575'
                            } },
                        'volver a'
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: {
                                fontSize: '1.3rem',
                                textAlign: 'center',
                                display: 'block',
                                lineHeight: 0,
                                textDecoration: 'none',
                                color: '#757575'
                            } },
                        'Comandapp'
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MenuHome);