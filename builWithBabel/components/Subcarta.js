"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _utils = require("../utils/utils");

var _reactRedux = require("react-redux");

var _connect_data_restaurantes = require("../data/connect_data_restaurantes");

var _Spinnercircle = require("./Spinnercircle");

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _actions = require("../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Subcarta = function Subcarta(_ref) {
    var restauranteData = _ref.restauranteData,
        token = _ref.token,
        sendCategory = _ref.sendCategory,
        styles = _ref.styles,
        dataProductSel = _ref.dataProductSel;


    var cat = styles;

    var _useState = (0, _react.useState)(null),
        _useState2 = _slicedToArray(_useState, 2),
        idcarta = _useState2[0],
        getIdcarta = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        carta = _useState4[0],
        getCarta = _useState4[1];

    (0, _react.useEffect)(function () {
        var isSubscribed = true;
        //UPDATE STATE OF SUBCARTA FOR RENDER SUBCARTA COMPONENT
        (0, _actions.addNewStateSubcarta)(true);
        getIdcarta(dataProductSel.idcarta);

        // http://restaurante.comandapp.es/api/ws/1/4xpD2gLLNSSdrRZ/1
        var firstRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, dataid, header) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get("" + protocol + url + pathAPI + "1/" + token + "/" + dataid, header);

                            case 3:
                                response = _context.sent;

                                if (!isSubscribed) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 7;
                                return getCarta(response.data.data.respuesta);

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

            return function firstRequest(_x, _x2, _x3, _x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            };
        }();
        firstRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, idcarta, _connect_data_restaurantes.USER_HEADERS);

        //clean function: no update state if is unmount component
        return function () {
            return isSubscribed = false;
        };
    }, [idcarta, token, restauranteData]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        Object.keys(carta).length > 0 ? carta.map(function (item) {
            return _react2.default.createElement(
                "div",
                {
                    className: "cont_childs",
                    onClick: function onClick() {
                        return sendCategory(item.categoria_id, item.categoria, null, 'carta', idcarta, null);
                    },
                    id: item.categoria,
                    style: cat.cat_cont,
                    key: item.categoria + item.categoria_id
                },
                _react2.default.createElement("div", { className: "absolut" }),
                item.imagen === undefined ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement("img", { style: cat.plato_img,
                        src: "assets/img/menu.jpg",
                        alt: "Imagen de categor\xEDa " + item.categoria }),
                    _react2.default.createElement(
                        "p",
                        { style: cat.nom_cat },
                        item.nombrecarta
                    )
                ) : _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement("img", { style: cat.plato_img,
                        src: (0, _utils.urlImage)() + item.imagen,
                        alt: "Imagen de categor\xEDa " + item.categoria }),
                    _react2.default.createElement(
                        "p",
                        { className: "category_title",
                            style: cat.nom_cat },
                        item.categoria
                    )
                )
            );
        }) : _react2.default.createElement(_Spinnercircle2.default, null)
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        dataProductSel: state.DataProductSelected.dataProductSel
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Subcarta);