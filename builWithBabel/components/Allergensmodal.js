"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _connect_data_restaurantes = require("../data/connect_data_restaurantes");

var _data = require("../data/data.js");

var _reactRedux = require("react-redux");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _utils = require("../utils/utils");

var _Spinnercircle = require("./Spinnercircle");

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Allergensmodal = function Allergensmodal(_ref) {
    var dataVisible = _ref.dataVisible,
        visible = _ref.visible,
        token = _ref.token,
        id = _ref.id;

    var aller = {
        princ: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        second: {
            position: "relative",
            width: "90%",
            maxHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "0px 10px 10px 10px",
            overflow: "scroll"
        },
        cont_data: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            flex: 1
        },
        h1: {
            padding: '10px 0 10px 20px',
            fontSize: "1.4rem"
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start',
            position: 'sticky',
            top: 0,
            paddingTop: '10px',
            backgroundColor: 'white'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        allergensState = _useState2[0],
        getAllergens = _useState2[1];

    (0, _react.useEffect)(function () {
        //clean call is not mounted
        var isSubscribed = true;

        var allergensRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, id, header) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get("" + protocol + url + pathAPI + "4/" + token + "/" + id, header);

                            case 3:
                                response = _context.sent;


                                if (isSubscribed) {
                                    getAllergens(response.data.data.respuesta);
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

            return function allergensRequest(_x, _x2, _x3, _x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            };
        }();
        //REQUEST
        allergensRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, id, _connect_data_restaurantes.USER_HEADERS);

        //clean function: no update state if is unmount component
        return function () {
            return isSubscribed = false;
        };
    }, [token, id]);

    if (!Object.keys(_data.allergens).length > 0) {
        return _react2.default.createElement(_Spinnercircle2.default, null);
    }

    return _react2.default.createElement(
        "div",
        {
            className: dataVisible ? "displayed" : "displayed_none",
            style: aller.princ
        },
        _react2.default.createElement(
            "div",
            { style: aller.second },
            _react2.default.createElement(
                "div",
                { style: aller.cabecera },
                _react2.default.createElement(_timesCircleRegular.ReactComponent, {
                    className: "close",
                    onClick: visible }),
                _react2.default.createElement(
                    "h1",
                    { style: aller.h1 },
                    "Estos son los alergenos ",
                    _react2.default.createElement("br", null),
                    "que utiliza este establecimiento."
                )
            ),
            _react2.default.createElement(
                "div",
                { style: aller.cont_data },
                allergensState.map(function (item) {
                    return _react2.default.createElement(
                        "div",
                        {
                            style: aller.cont_aller,
                            key: item.nombrealergeno + item.id
                        },
                        _react2.default.createElement("img", {
                            src: (0, _utils.urlImage)() + item.imagen,
                            alt: "Al\xE9rgeno " + item.nombrealergeno
                        }),
                        _react2.default.createElement(
                            "p",
                            null,
                            item.nombrealergeno
                        )
                    );
                })
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Allergensmodal);