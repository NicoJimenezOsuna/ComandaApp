'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmetAsync = require('react-helmet-async');

var _reactRedux = require('react-redux');

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seo = function Seo(_ref) {
    var restauranteData = _ref.restauranteData,
        reduxToken = _ref.reduxToken;

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        metaDescription = _useState2[0],
        getMetaDescription = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        metaImage = _useState4[0],
        getMetaImage = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        docTitle = _useState6[0],
        getDocTitle = _useState6[1];

    (0, _react.useEffect)(function () {
        if (restauranteData.length > 0) {
            getMetaDescription('Comanda digital de ' + restauranteData[0].nombre_restaurante + ' powered by Socialpymes');
            getMetaImage((0, _utils.urlImage)() + restauranteData[0].logo);
            getDocTitle(restauranteData[0].nombre_restaurante);
        }
    }, [restauranteData]);

    return restauranteData.length > 0 ? _react2.default.createElement(
        _reactHelmetAsync.HelmetProvider,
        null,
        _react2.default.createElement(_reactHelmetAsync.Helmet, {
            meta: [{
                name: 'description',
                content: metaDescription
            }, {
                property: 'og:image',
                content: metaImage
            }],
            title: docTitle
        })
    ) : null;
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Seo);