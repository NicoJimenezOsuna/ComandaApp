'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _Publibanner = require('./publicidad/Publibanner');

var _Publibanner2 = _interopRequireDefault(_Publibanner);

var _actions = require('../redux/actions');

var _tokens_access_comanda_home = require('../data/tokens_access_comanda_home');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
    var vermapa = _ref.vermapa,
        vermail = _ref.vermail,
        restauranteData = _ref.restauranteData,
        back = _ref.back,
        closeloginmodal = _ref.closeloginmodal,
        token = _ref.token,
        clientProfile = _ref.clientProfile,
        subcarta = _ref.subcarta;


    var style = {
        contenedor: {
            position: 'sticky',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            zIndex: 999
        },
        boton: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            // background: 'white',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '-5px 5px 10px #bfbfbf, 5px -5px 10px #ffffff'

        },
        boton2: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '5px 5px 10px #e0e0e0, -5px -5px 10px #ffffff'

        },
        botonLinkedin: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            // background: 'white',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '-5px 5px 10px #bfbfbf, 5px -5px 10px #ffffff',
            padding: '.2em'
        },
        boton_retroceso: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            // background: 'white',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: 'rgb(255 0 0) 0px 0px 10px, rgb(226 226 226) 5px 5px 10px'
        },
        link_boton: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        },
        cont_logo_basica_footer: {
            // maxWidth: '80%',
            maxHeight: '3em'
        },
        logo_basica_footer: {
            maxHeight: '3em',
            maxWidth: '100%'
        },
        div_boton: {
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '-10px 10px 20px #bfbfbf'
        },
        img_div_info_rest: {
            width: '2.2em',
            height: '2.2em'
        },
        img_div_info_rest_close: {
            width: '2.2em',
            height: '2.2em',
            padding: '.3em'
        },
        img_div: {
            width: '2em',
            height: '2em',
            marginRight: '.3em'
        },
        cont_down_arrow: {
            opacity: '1',
            transform: 'none',
            transition: 'none'
        },
        down_arrow: {
            width: '1em',
            height: '1em',
            margin: '0 auto'
        },
        comanda_home_cont_button: {
            width: '6.5em',
            height: '3.5em',
            padding: '.4em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '2px solid grey',
            borderRadius: '20px',
            // background: 'white',
            overflow: 'hidden',

            position: 'relative',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            // boxShadow:  '-10px 10px 20px #bfbfbf, 10px -10px 20px #ffffff',
            boxShadow: '-10px 10px 20px #bfbfbf'
        },
        comanda_home_img: {
            width: '100%'
            // height: '100%'
        },
        botonera: {
            // boxShadow:  '5px 5px 10px #e0e0e0, 0px 0px 10px #ffffff',
            // boxShadow:  '5px 5px 10px #e0e0e0',
        }

    };

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        viewinfo = _useState2[0],
        getViewinfo = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        viewshare = _useState4[0],
        getViewshare = _useState4[1];

    var viewInfo = function viewInfo() {
        viewinfo ? getViewinfo(false) : getViewinfo(true);
        if (viewshare) {
            getViewshare(false);
        }
    };

    var viewShare = function viewShare() {
        viewshare ? getViewshare(false) : getViewshare(true);
        if (viewinfo) {
            getViewinfo(false);
        }
    };

    (0, _react.useEffect)(function () {
        document.body.addEventListener('click', function () {});
    });
    // <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//comandapp.socialpymes.com?wHSBHdgdjBV">
    // Share on Facebook
    // </a>
    // <a href="http://twitter.com/home?status=' + encodeURIComponent("Leyendo http://www.desarrolloWeb.com/css en DesarrolloWeb.com.") + '">
    // <img src="logo_twitter.gif" alt="Comparte esto en Twitter" />
    // </a>
    // <a href="https://pinterest.com/pin/create/button/?url=url_de_imagen&media=nombre_imagen&description=aqui_una_descripci%C3%B3n">
    // Pin on Pinterest
    // </a>
    // <a href="https://www.linkedin.com/shareArticle?mini=true&url=url_de_la_imagen&title=titulo&summary=comentario&source=url_de_la_web">
    // Share on LinkedIn
    // </a>

    var linkWathsapp = 'whatsapp://send?text=' + restauranteData[0].nombre_restaurante + ' ' + window.location.protocol + '//' + window.location.host + '?' + token;
    var linkTelegram = 'tg:msg_url?url=' + window.location.protocol + '//' + window.location.host + '?' + token + '&text=' + restauranteData[0].nombre_restaurante;
    var linkFacebook = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.protocol + '//' + window.location.host + '?' + token;
    var linkTwitter = "http://twitter.com/home?status=" + encodeURIComponent("Disfrutando los deliciosos platos de " + restauranteData[0].nombre_restaurante + ' ' + window.location.protocol + '//' + window.location.host + '?' + token) + '"';
    // let linkPinterest = "https://pinterest.com/pin/create/button/?url=" + window.location.protocol + '//' + window.location.host + '?' + token + '&media=' + urlImage() + restauranteData[0].imagen_restaurante + '&description=' + restauranteData[0].nombre_restaurante;
    var linkLinkedin = "https://www.linkedin.com/shareArticle?mini=true&url=" + (0, _utils.urlImage)() + restauranteData[0].imagen_restaurante + '&title=Comanda digital de ' + restauranteData[0].nombre_restaurante + '&summary=Realiza tu pedido en el local o desde casa&source=' + window.location.protocol + '//' + window.location.host + '?' + token;

    return _react2.default.createElement(
        'div',
        { className: 'cont_footer_absolut' },
        _react2.default.createElement(
            'div',
            { style: style.contenedor },

            //GO BACK ICON
            back === '/' ? subcarta ?
            // <span>subcarta</span>//cambiar addNewStateSubcarta a false
            //SUBCARTA(RENDER HERE) -> TO CAT [-* SUBCARTA *-]
            _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('img', {
                    onClick: function onClick() {
                        return (0, _actions.addNewStateSubcarta)(false);
                    },
                    style: style.link_boton,
                    src: './assets/img/footer/ico-back.svg',
                    alt: 'imagen de footer'
                })
            ) :
            // <span>cat men & cart</span>
            // CATEGORY(RENDER HERE) -> INIT APP [-* CATEGORY MENU AND CARTA *-]
            _react2.default.createElement(
                _reactRouterDom.Link,
                { style: style.link_boton, to: back },
                _react2.default.createElement('img', {
                    style: style.boton_retroceso,
                    src: './assets/img/footer/ico-back.svg'
                    /*ico-back-red.svg*/
                    , alt: 'imagen de footer'
                })
            ) : subcarta ?
            // <span>subcarta carta</span>
            //SUBCAT(RENDER HERE) -> TO SUBCARTA [-* SUBCATEGORY OF CARTA *-]
            _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { style: style.link_boton, to: back },
                    _react2.default.createElement('img', {
                        style: style.link_boton,
                        src: './assets/img/footer/ico-back.svg',
                        alt: 'imagen de footer'
                    })
                )
            ) :
            // <span>subcarta menu</span>
            //SUBCAT(RENDER HERE) -> TO MENU CATEGORY [-* SUBCATEGORY OF MENU *-]
            // use wordKey of selectedProduct reducer to render menu category
            _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { style: style.link_boton, to: back },
                    _react2.default.createElement('img', {
                        style: style.link_boton,
                        src: './assets/img/footer/ico-back.svg',
                        alt: 'imagen de footer'
                    })
                )
            ),
            restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'menu',
                        style: style.div_boton,
                        onClick: viewInfo
                    },
                    viewinfo ? _react2.default.createElement('img', {
                        style: style.img_div_info_rest_close,
                        src: './assets/img/footer/cerrar_red.svg',
                        alt: 'imagen de footer'
                    }) : _react2.default.createElement('img', {
                        style: style.img_div_info_rest,
                        src: './assets/img/footer/info_rest.svg',
                        alt: 'imagen de footer'
                    }),
                    _react2.default.createElement(
                        'ul',
                        { style: style.botonera,
                            className: viewinfo ? 'opacity cont_extra submenu' : 'opacity_none submenu' },
                        _react2.default.createElement(
                            'li',
                            { className: viewinfo ? 'child_1 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { style: style.boton2,
                                    href: 'tel:' + (restauranteData.length > 0 ? restauranteData[0].telefono : null) },
                                _react2.default.createElement('img', {
                                    style: style.boton2,
                                    src: './assets/img/footer/ico-tel.svg',
                                    alt: 'imagen de footer'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewinfo ? 'child_2 no_opa_trans' : null },
                            _react2.default.createElement('img', {
                                onClick: vermapa,
                                style: style.boton2,
                                src: './assets/img/footer/ico-gps.svg',
                                alt: 'imagen de footer'
                            })
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewinfo ? 'child_3 no_opa_trans' : null },
                            _react2.default.createElement('img', {
                                onClick: vermail,
                                style: style.boton2,
                                src: './assets/img/footer/ico-mail.svg',
                                alt: 'imagen de footer'
                            })
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewinfo ? "down_arrow_icons_container no_opa_trans" : null },
                            _react2.default.createElement('img', {
                                style: style.down_arrow,
                                src: './assets/img/footer/arrow_down.svg',
                                alt: 'down arrow'
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'menu',
                        style: style.div_boton,
                        onClick: viewShare
                    },
                    viewshare ? _react2.default.createElement('img', {
                        style: style.img_div_info_rest_close,
                        src: './assets/img/footer/cerrar_red.svg',
                        alt: 'imagen de footer'
                    }) : _react2.default.createElement('img', {
                        style: style.img_div,
                        src: './assets/img/footer/compartir.svg',
                        alt: 'imagen de footer'
                    }),
                    _react2.default.createElement(
                        'ul',
                        { style: style.botonera,
                            className: viewshare ? 'opacity cont_extra submenu' : 'opacity_none submenu' },
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? 'child_2 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { href: linkFacebook
                                },
                                _react2.default.createElement('img', {
                                    // onClick={vermail}
                                    className: 'telegram',
                                    style: style.boton,
                                    src: './assets/img/footer/facebook.svg',
                                    alt: 'icono de Telegram'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? 'child_3 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { href: linkTwitter
                                },
                                _react2.default.createElement('img', {
                                    // onClick={vermail}
                                    className: 'telegram',
                                    style: style.boton,
                                    src: './assets/img/footer/twitter.svg',
                                    alt: 'icono de Telegram'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? 'child_4 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { href: linkTelegram
                                },
                                _react2.default.createElement('img', {
                                    // onClick={vermail}
                                    className: 'telegram',
                                    style: style.boton,
                                    src: './assets/img/footer/telegrama.svg',
                                    alt: 'icono de Telegram'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? 'child_5 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { href: linkWathsapp
                                },
                                _react2.default.createElement('img', {
                                    // onClick={vermail}
                                    style: style.boton,
                                    src: './assets/img/footer/whatsapp.svg',
                                    alt: 'icono de whatsapp'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? 'child_6 no_opa_trans' : null },
                            _react2.default.createElement(
                                'a',
                                { href: linkLinkedin
                                },
                                _react2.default.createElement('img', {
                                    // onClick={vermail}
                                    style: style.botonLinkedin,
                                    src: './assets/img/footer/linkedin.svg',
                                    alt: 'icono de whatsapp'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: viewshare ? "down_arrow_icons_container no_opa_trans" : null },
                            _react2.default.createElement('img', {
                                style: style.down_arrow,
                                src: './assets/img/footer/arrow_down.svg',
                                alt: 'down arrow'
                            })
                        )
                    )
                ),
                _tokens_access_comanda_home.accessComandaHome.find(function (existToken) {
                    return existToken.token === token;
                }) ? clientProfile.telefono.length === 0 ? _react2.default.createElement(
                    'div',
                    { style: style.comanda_home_cont_button,
                        onClick: closeloginmodal
                    },
                    _react2.default.createElement('img', { style: style.comanda_home_img,
                        src: './assets/img/homecomanda/comandapp_home_300.png',
                        alt: 'imagen bot\xF3n comandaHome' })
                ) : _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/comandappHome' },
                    _react2.default.createElement(
                        'div',
                        { style: style.comanda_home_cont_button,
                            onClick: closeloginmodal
                        },
                        _react2.default.createElement('img', { style: style.comanda_home_img,
                            src: './assets/img/homecomanda/comandapp_home_300.png',
                            alt: 'imagen bot\xF3n comandaHome' })
                    )
                ) : _react2.default.createElement(
                    'div',
                    { style: style.comanda_home_cont_button,
                        className: 'lightOpacity'
                    },
                    _react2.default.createElement('img', { style: style.comanda_home_img,
                        src: './assets/img/homecomanda/comandapp_home_300.png',
                        alt: 'imagen bot\xF3n comandaHome' })
                )
            ) : _react2.default.createElement(
                'div',
                { style: style.cont_logo_basica_footer },
                _react2.default.createElement(_Publibanner2.default, null)
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        clientProfile: state.ClientProfile.clientProfile,
        subcarta: state.SwitchMenu.subcarta
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Footer);