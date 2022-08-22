'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Socialpymes = require('./Socialpymes');

var _Socialpymes2 = _interopRequireDefault(_Socialpymes);

var _Binicio = require('./Binicio');

var _Binicio2 = _interopRequireDefault(_Binicio);

var _utils = require('../utils/utils');

var _HelmetSeoComponent = require('../components/Seo/HelmetSeoComponent');

var _HelmetSeoComponent2 = _interopRequireDefault(_HelmetSeoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*
*  IMPORT COMPONENTS
*
* */
var Launch = function Launch(_ref) {
    var logo = _ref.logo;


    var styles = {
        princ: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '1em'
        },
        cont_logo: {
            // position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1em',
            marginBottom: '5em'
        },
        cont_logo_text: {
            position: 'absolute',
            left: '6em',
            top: '6.3em',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column'
        },
        image_logo: {
            width: '7em',
            height: '7em'
        },
        logo_size: {
            width: '300px',
            margin: '0 auto',
            position: 'relative'
        },
        span_comanda_text: {
            textAlign: 'right',
            fontFamily: 'Papyrus',
            marginTop: '-.8em',
            fontSize: '.8em'
        },
        span_tu_carta: {
            fontSize: '1.5em',
            fontFamily: 'Papyrus'
        },
        image_princ: {
            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.361))',
            overflow: 'visible',
            maxWidth: '90%',
            marginBottom: '2em'
        }

    };

    return _react2.default.createElement(
        'div',
        { style: styles.princ },
        _react2.default.createElement(_HelmetSeoComponent2.default, null),
        _react2.default.createElement(
            'div',
            { style: { width: '100%', marginBottom: '1em' } },
            _react2.default.createElement('img', { src: './assets/img/comanda_free_azul_con_logo.png', alt: 'Comandapp free',
                style: {
                    width: '100%',
                    height: '100%'
                } })
        ),
        _react2.default.createElement('img', { style: styles.image_princ, src: logo.length > 0 ? (0, _utils.urlImage)() + logo[0].logo : null,
            alt: 'Imagen de inicio' }),
        _react2.default.createElement(_Binicio2.default, null),
        _react2.default.createElement(
            'a',
            { href: 'https://socialpymesvlc.es' },
            _react2.default.createElement(_Socialpymes2.default, null)
        )
    );
};

function mapStateToProps(state) {
    return {
        logo: state.RestauranteData.RestauranteProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Launch);