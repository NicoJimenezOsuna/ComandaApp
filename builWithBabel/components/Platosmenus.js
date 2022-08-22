"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils/utils");

var _Buttoninfo = require("./Buttoninfo");

var _Buttoninfo2 = _interopRequireDefault(_Buttoninfo);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _connect_data_restaurantes = require("../data/connect_data_restaurantes");

var _Spinnercircle = require("./Spinnercircle");

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Platosmenus = function Platosmenus(_ref) {
    var catid = _ref.catid,
        seccid = _ref.seccid,
        dataSliderHandler = _ref.dataSliderHandler,
        token = _ref.token,
        data = _ref.data,
        getValue = _ref.getValue,
        labelsLength = _ref.labelsLength,
        restauranteData = _ref.restauranteData;

    var listaplatos = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px",
            fontFamily: 'Dosis'
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

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        platos = _useState2[0],
        getPlatos = _useState2[1];

    (0, _react.useEffect)(function () {
        //clean call is not mounted
        var isSubscribed = true;

        // http://restaurante.comandaapp.es/api/ws/2/cLZDdvFTJcl5cWG/seccID/platoID
        var menusRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, seccid, id, header) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get("" + protocol + url + pathAPI + "2/" + token + "/" + seccid + "/" + id, header);

                            case 3:
                                response = _context.sent;

                                if (isSubscribed) {
                                    getPlatos((0, _utils.urlComplete)(response.data.data.respuesta));
                                }
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);

                                console.log("error", _context.t0);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 7]]);
            }));

            return function menusRequest(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
                return _ref2.apply(this, arguments);
            };
        }();
        //REQUEST
        menusRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, seccid, catid, _connect_data_restaurantes.USER_HEADERS);

        //clean function: no update state if is unmount component
        return function () {
            return isSubscribed = false;
        };
    }, [token, catid, seccid]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            _react.Fragment,
            null,
            platos.length > 0 ? platos.map(function (item, index) {
                return _react2.default.createElement(
                    _react.Fragment,
                    { key: item.nombreplato },
                    _react2.default.createElement(
                        "div",
                        { style: listaplatos.cont_princ, key: item.nombreplato },
                        _react2.default.createElement(
                            "div",
                            { style: listaplatos.cont_name },
                            _react2.default.createElement(
                                "p",
                                null,
                                item.nombreplato
                            )
                        ),
                        restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(
                            _react.Fragment,
                            null,
                            console.log('id de platos', item.plato_id),
                            _react2.default.createElement(
                                "div",
                                { className: "wrapper" },
                                _react2.default.createElement("input", { style: { display: 'none' },
                                    type: "radio",
                                    name: data,
                                    id: item.nombreplato + '_' + data,
                                    value: item.nombreplato + '?' + item.plato_id,
                                    onChange: function onChange(e) {
                                        return getValue(e, labelsLength);
                                    },
                                    key: item.nombreplato,
                                    className: "state"
                                }),
                                _react2.default.createElement(
                                    "label",
                                    { className: "label", htmlFor: item.nombreplato + '_' + data },
                                    _react2.default.createElement("div", { className: "indicator" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { style: listaplatos.cont_button },
                                _react2.default.createElement(_Buttoninfo2.default, {
                                    dataSliderHandler: dataSliderHandler,
                                    dataListaFull: platos,
                                    dataIdSelf: platos.indexOf(item),
                                    noprice: false
                                })
                            )
                        ) : null
                    ),
                    index < platos.length - 1 ? _react2.default.createElement("hr", { style: {
                            width: '80%',
                            border: '1px solid #d3d3d3',
                            margin: '0px auto'
                        } }) : null
                );
            }) : _react2.default.createElement(_Spinnercircle2.default, null)
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Platosmenus);