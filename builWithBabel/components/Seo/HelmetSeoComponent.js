"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactRedux = require("react-redux");

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelmetSeoComponent = function HelmetSeoComponent(_ref) {
    var restauranteData = _ref.restauranteData,
        reduxToken = _ref.reduxToken;

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        tagTitle = _useState2[0],
        getTitle = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        tagDescrption = _useState4[0],
        getDescription = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        hrefCanonical = _useState6[0],
        getHrefCanonical = _useState6[1];

    var _useState7 = (0, _react.useState)(''),
        _useState8 = _slicedToArray(_useState7, 2),
        urlRestaurantImage = _useState8[0],
        getUrlRestaurantImage = _useState8[1];

    (0, _react.useEffect)(function () {
        if (restauranteData.length > 0) {
            getTitle(restauranteData[0].nombre_restaurante + ' | Comanda digital powered by Socialpymes');
            getDescription("Comanda digital de " + restauranteData[0].nombre_restaurante + " realizar pedidos en el propio local o desde casa powered by Socialpymes");
            getHrefCanonical(window.location.protocol + '//' + window.location.host + '/?' + reduxToken);
            getUrlRestaurantImage((0, _utils.urlImage)() + restauranteData[0].imagen_restaurante);
        }
    }, [reduxToken, restauranteData]);

    //EJEMPLOS BUTTON COMPARTIR
    // TWITTER
    //     http://twitter.com/share?text=MetaTags%20b%C3%A1sicos%20para%20compartir%20en%20las%20Redes%20Sociales&url=https://www.bufa.es/metatags-basicos-redes-sociales/&via=jorge_maiden&hashtags=redessociales
    //FACEBOOK
    //     http://www.facebook.com/sharer.php?u=https://www.bufa.es/metatags-basicos-redes-sociales/&t=MetaTags%20b%C3%A1sicos%20para%20compartir%20en%20las%20Redes%20Sociales

    return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
            "title",
            null,
            tagTitle
        ),
        _react2.default.createElement("meta", { name: "description", content: tagDescrption }),
        _react2.default.createElement("meta", { name: "robots", content: "index, follow" }),
        _react2.default.createElement("meta", { name: "keywords", content: "comida para llevar, carta digital, comanda restaurante, comanda online, carta digital online, comanda restaurante digital gratis, carta restaurante, comanda Socialpymes, comida para llevar app, " }),
        _react2.default.createElement("link", { rel: "canonical", href: hrefCanonical }),
        _react2.default.createElement("meta", { name: "author", content: "Alberto Garc\xEDa El\xEDas & Joan Nicolau Jimenez Osuna, agarcweb@gmail.com" }),
        _react2.default.createElement("meta", { name: "copyright", content: "Socialpymes" }),
        _react2.default.createElement("meta", { name: "application-name", content: "ComandappFree, Comanda digital de Socialpymes para restaurantes" }),
        _react2.default.createElement("meta", { property: "og:url", content: getHrefCanonical }),
        _react2.default.createElement("meta", { property: "og:title", content: tagTitle }),
        _react2.default.createElement("meta", { property: "og:image", content: urlRestaurantImage }),
        _react2.default.createElement("meta", { property: "og:description", content: tagDescrption }),
        _react2.default.createElement("meta", { property: "og:type", content: "restaurant.menu" }),
        _react2.default.createElement("meta", { name: "twitter:title", content: tagTitle }),
        _react2.default.createElement("meta", { name: "twitter:description", content: tagDescrption }),
        _react2.default.createElement("meta", { name: "twitter:image", content: urlRestaurantImage }),
        _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" })
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HelmetSeoComponent);