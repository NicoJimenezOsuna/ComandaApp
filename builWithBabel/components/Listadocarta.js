"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Buttoninfo = require("./Buttoninfo");

var _Buttoninfo2 = _interopRequireDefault(_Buttoninfo);

var _Spinnercircle = require("../components/Spinnercircle");

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _utils = require("../utils/utils");

var _reactRedux = require("react-redux");

var _connect_data_restaurantes = require("../data/connect_data_restaurantes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Listadocarta = function Listadocarta(_ref) {
    var dataid = _ref.dataid,
        dataSliderHandler = _ref.dataSliderHandler,
        token = _ref.token,
        restauranteData = _ref.restauranteData,
        productsCarta = _ref.productsCarta;

    var listmenu = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px",
            fontFamily: "Dosis"
        },
        cont_item: {
            width: "100%"
        },
        cont_name: {
            width: "55%",
            textAlign: "left"
        },
        cont_price: {
            width: "25%",
            textAlign: "center"
        },
        cont_button: {
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        font: {
            fontFamily: "Papyrus"
        }
    };

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        products = _useState2[0],
        getProducts = _useState2[1];

    (0, _react.useEffect)(function () {
        //    http://restaurante.comandapp.es/api/ws/2/token/platoID/cartaID
        var subcatCartatRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, dataid, idcarta, header) {
                var response, toObjectWithIdOfCarta;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get("" + protocol + url + pathAPI + "2/" + token + "/" + idcarta + "/" + dataid, header);

                            case 3:
                                response = _context.sent;

                                //Incorporamos una key a la lista de productos con el id de la carta
                                toObjectWithIdOfCarta = response.data.data.respuesta.map(function (item) {
                                    item.carta_id = idcarta;
                                    return item;
                                });
                                _context.next = 7;
                                return getProducts((0, _utils.urlComplete)(toObjectWithIdOfCarta));

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](0);

                                console.log("error", _context.t0);

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 9]]);
            }));

            return function subcatCartatRequest(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
                return _ref2.apply(this, arguments);
            };
        }();

        //to State
        subcatCartatRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, dataid.id, dataid.idcarta, _connect_data_restaurantes.USER_HEADERS);
    }, [token, dataid]);

    if (!Object.keys(products).length > 0) {
        return _react2.default.createElement(_Spinnercircle2.default, null);
    }
    var MiniatureOrder = function MiniatureOrder(item) {

        var element = productsCarta.filter(function (itempedido) {
            return itempedido.plato_id === item && itempedido.cant > 0;
        });

        if (element.length > 0) {
            return element[0].cant;
        }
    };
    return _react2.default.createElement(
        _react.Fragment,
        null,
        products.length > 0 ? products.map(function (item, index) {
            var number = MiniatureOrder(item.plato_id);
            return _react2.default.createElement(
                _react.Fragment,
                { key: index },
                _react2.default.createElement(
                    "div",
                    { style: listmenu.cont_princ, key: item.nombreplato },
                    _react2.default.createElement(
                        "div",
                        { style: listmenu.cont_name },
                        _react2.default.createElement(
                            "p",
                            null,
                            item.nombreplato
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { style: listmenu.cont_price },
                        _react2.default.createElement(
                            "p",
                            null,
                            (0, _utils.dosDecim)(item.precio, 2),
                            " ",
                            _react2.default.createElement(
                                "span",
                                { style: listmenu.font },
                                "\u20AC"
                            )
                        )
                    ),
                    restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(
                        "div",
                        { style: listmenu.cont_button },
                        _react2.default.createElement(_Buttoninfo2.default, {
                            dataSliderHandler: dataSliderHandler,
                            dataListaFull: products,
                            dataIdSelf: products.indexOf(item)
                            //wordkey for display prices and buttons plus and substract in caroussel
                            , wordkey: 'carta'
                        })
                    ) : null
                ),
                _react2.default.createElement(
                    "div",
                    { style: { width: '100%' } },
                    number > 0 ? _react2.default.createElement(
                        "p",
                        { style: { paddingLeft: '20px', color: 'green' } },
                        number === 1 ? number + '  unidad' : number + '  unidades'
                    ) : null,
                    index < products.length - 1 ? _react2.default.createElement("hr", { style: {
                            width: '80%',
                            border: '1px solid #d3d3d3',
                            margin: '0px auto'
                        } }) : null
                )
            );
        }) : _react2.default.createElement(_Spinnercircle2.default, null)
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        productsCarta: state.PedidosCarta.pedidoCarta
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Listadocarta);