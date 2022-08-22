'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _logo = require('../icons/logo.svg');

var _HelmetSeoComponent = require('../components/Seo/HelmetSeoComponent');

var _HelmetSeoComponent2 = _interopRequireDefault(_HelmetSeoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error404 = function Error404() {
    var styles = {
        cont_logo_comanda: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        cont_comanda_social: {
            width: '100%',
            textAlign: 'right',
            position: 'absolute'
        },
        grupo_12: {
            width: '45px',
            height: '45px'
        },
        img_tipo: {
            position: "absolute",
            width: '7em',
            left: '0px',
            top: '20px',
            overflow: "visible"
        },
        cont: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignitems: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden'

        },
        centerEnd: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        relativo: {
            position: 'relative',
            marginLeft: '.5em'
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        top: {
            alignSelf: 'start'
        },
        h1: {
            fontFamily: "Fontdiner Swanky",
            fontSize: '2rem'
        },
        h3: {
            fontWeight: '500'
        },
        enlace: {
            color: '#1EA098',
            marginTop: '2rem',
            fontSize: '1.3em'
        }
    };

    return _react2.default.createElement(
        'div',
        { className: 'subRoot' },
        _react2.default.createElement(_HelmetSeoComponent2.default, null),
        _react2.default.createElement(
            'div',
            { style: styles.cont },
            _react2.default.createElement(
                'div',
                { style: styles.cont_comanda_social },
                _react2.default.createElement(
                    'div',
                    { style: styles.cont_logo_comanda },
                    _react2.default.createElement(_logo.ReactComponent, {
                        style: styles.grupo_12,
                        alt: 'Logo de comandaApp'
                    }),
                    _react2.default.createElement(
                        'div',
                        { style: styles.relativo },
                        _react2.default.createElement(
                            'div',
                            { id: 'powered_by' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'powered by'
                            )
                        ),
                        _react2.default.createElement('img', {
                            style: styles.img_tipo,
                            src: './assets/img/socialPymes_Imagotipo.png',
                            alt: 'Logo de socialpymes'
                        })
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { style: styles.centerEnd },
                _react2.default.createElement('img', { src: './assets/img/dog_error.png', alt: '' })
            ),
            _react2.default.createElement(
                'div',
                { style: styles.column },
                _react2.default.createElement(
                    'div',
                    { style: styles.top },
                    _react2.default.createElement(
                        'h1',
                        { style: styles.h1 },
                        'OOOOPSS!...'
                    ),
                    _react2.default.createElement(
                        'h3',
                        { style: styles.h3 },
                        'Este no es el servicio que buscas...'
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { style: styles.enlace, to: '/' },
                    'Tengo hambre. \xA1S\xE1came de aqu\xED!'
                )
            )
        )
    );
};
exports.default = Error404;