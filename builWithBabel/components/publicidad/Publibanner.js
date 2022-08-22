'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../redux/actions');

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Publibanner = function Publibanner(_ref) {
    var background = _ref.background,
        publiCount = _ref.publiCount,
        advertisement = _ref.advertisement;

    var publi = {
        banner_footer: {
            overflow: "hidden",
            position: "relative",
            width: '100%',
            // maxHeight: `70px`,
            maxHeight: '3em',
            left: '0px',
            padding: '10px',
            // top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            // borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            // backgroundColor: '#70707045',
        },
        banner_main: {
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url(./assets/img/fondo_points.jpg)',
            overflow: "hidden",
            position: "relative",
            width: '100%',
            height: '80px',
            marginTop: '2px'
        },
        h3: {
            width: "50%",
            textAlign: 'center'
        },
        img_publi_footer: {
            maxWidth: '100%',
            maxHeight: '3em'
        },
        img_publi_main: {
            maxWidth: '100%',
            maxHeight: '70px'
        },
        contenedor: {
            width: '75%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3em'
        }
    };

    (0, _react.useEffect)(function () {

        var renderImage = setInterval(function () {
            if (publiCount === advertisement.length - 1) {
                (0, _actions.setCount)(0);
            } else {
                (0, _actions.setCount)(publiCount + 1);
            }
        }, 3000);

        return function () {
            return clearInterval(renderImage);
        };
    }, [publiCount, advertisement]);

    return _react2.default.createElement(
        'div',
        { style: background ? publi.banner_main : publi.banner_footer, className: 'cont_publi' },
        _react2.default.createElement(
            'h2',
            { style: publi.h3, className: 'patrocinadores text-shadow' },
            'Patrocinado por: '
        ),
        _react2.default.createElement(
            'div',
            { style: publi.contenedor },
            _react2.default.createElement('img', { style: background ? publi.img_publi_main : publi.img_publi_footer, src: (0, _utils.urlImage)() + advertisement[publiCount].imagen,
                alt: advertisement[publiCount].nombrepublicidad })
        )
    );
};

function mapStateToProps(state) {
    return {
        // restauranteData: state.RestauranteData.RestauranteProfile,
        publiCount: state.Publicidad.count,
        advertisement: state.Publicidad.arrEnterprises
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Publibanner);