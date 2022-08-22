"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
/*
 * IMPORT COMPONENTS
 */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Spinner = require("../components/Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Socialpymes = require("../components/Socialpymes");

var _Socialpymes2 = _interopRequireDefault(_Socialpymes);

var _Launch = require("../components/Launch");

var _Launch2 = _interopRequireDefault(_Launch);

var _connect_data_restaurantes = require("../data/connect_data_restaurantes");

var _logo = require("../icons/logo.svg");

var _Errormessage = require("../components/Errormessage");

var _Errormessage2 = _interopRequireDefault(_Errormessage);

var _reactRedux = require("react-redux");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _actions = require("../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Launcher = function Launcher(_ref) {
    var reduxToken = _ref.reduxToken;

    var launcher = {
        princ: {
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            padding: '20px'
        },
        ComandApp: {
            left: "153px",
            top: "466px",
            overflow: "visible",
            width: "415px",
            whiteSpace: "nowrap",
            textAlign: "left",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "50px",
            color: "rgba(112,112,112,1)"
        },
        Tu_carta_digital: {
            overflow: "visible",
            whiteSpace: "nowrap",
            textAlign: "right",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            color: "rgba(112,112,112,1)"
        }
    };
    //no tocar(usado en firstRequest función)
    // const [datos, getDatos] = useState({});
    //-----------

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        mensaje = _useState2[0],
        getMensaje = _useState2[1];
    // const [noconnection, getNoconnection] = useState(false);
    // const [isreload, getIsreload] = useState(false)

    (0, _react.useEffect)(function () {
        var isConnect = true;

        var paramsNow = window.location.search;
        //OBTENER TOKEN DE URL
        if (reduxToken.length <= 0 || paramsNow !== reduxToken && paramsNow !== '') {
            localStorage.clear();
            var token = paramsNow.substr(1);
            (0, _actions.addToken)(token);
        }

        var firstRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, getMensaje,
            // getDatos,
            header, getNoconnection) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get("" + protocol + url + pathAPI + "0/" + token, header);

                            case 3:
                                response = _context.sent;

                                //MOSTRAR DEMO BÁSICA EN DICHO HOST
                                if (window.location.host === 'democappbasica.socialpymes.com') {
                                    //FOR SIMPLE COMANDA MODE
                                    // if(window.location.host === 'localhost:3000' || window.location.host === '192.168.0.24:3000'){
                                    response.data.data.tpsuscrip = 2;
                                }
                                //to Localstorage
                                if (isConnect) {
                                    if (response.data.data.mensaje !== 'OK') {
                                        getMensaje(response.data.data.mensaje);
                                    } else {
                                        // getMensaje(toObject.data.mensaje)
                                        getMensaje(response.data.data.mensaje);
                                        // addProfile(toObject.data)
                                        (0, _actions.addProfile)(response.data.data);
                                        // addArrPubli(toObject.data.publicidad)
                                        (0, _actions.addArrPubli)(response.data.data.publicidad);
                                    }
                                }
                                // await getDatos(response.data.data);
                                // getNoconnection(false)
                                _context.next = 12;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](0);

                                // getNoconnection(true)
                                getMensaje('Error al conectar. Revise su conexión o token de acceso');
                                console.log("error", _context.t0);

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 8]]);
            }));

            return function firstRequest(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
                return _ref2.apply(this, arguments);
            };
        }();

        firstRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, reduxToken, getMensaje, _connect_data_restaurantes.USER_HEADERS);

        return function () {
            return isConnect = false;
        };
    }, [reduxToken]);

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        orientationScreen = _useState4[0],
        getOrientationScreen = _useState4[1];

    (0, _react.useEffect)(function () {
        function detectOrientation() {
            getOrientationScreen(window.screen.orientation.type);
        }

        window.addEventListener('orientationchange', detectOrientation);
        return function () {
            return window.removeEventListener('orientationchange', detectOrientation);
        };
    });

    // const a = (value) => setTimeout(value => {
    //     getIsreload(false)
    // }, 3000)

    // const reload = () => {
    //     // firstRequest(protocol, URL, CONNECT_TOKEN, getMensaje, getDatos, getNoconnection);
    //     getIsreload(true)
    //     a(true)
    // }

    return _react2.default.createElement(
        "div",
        { style: launcher.princ },
        mensaje !== 'OK' ? _react2.default.createElement(
            "div",
            { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '100%'
                } },
            orientationScreen === 'portrait-primary' ? _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_logo.ReactComponent, { style: { height: '30%' } }),
                _react2.default.createElement(
                    "div",
                    { style: { width: '100%' } },
                    _react2.default.createElement("img", { src: "./assets/img/comanda_free_azul_no_logo.png", alt: "Comandapp free",
                        style: {
                            width: '100%',
                            height: '100%'
                        } })
                )
            ) : _react2.default.createElement(
                "div",
                { style: { width: '100%' } },
                _react2.default.createElement("img", { src: "./assets/img/comanda_free_azul_con_logo.png", alt: "Comandapp free",
                    style: {
                        width: '100%',
                        height: '100%'
                    } })
            ),
            _react2.default.createElement(
                "div",
                { style: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                mensaje === 'Error al conectar. Revise su conexión o token de acceso' ?
                // mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                _react2.default.createElement(_Errormessage2.default, { mensaje: mensaje }) : null,
                mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                // mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                _react2.default.createElement(_Errormessage2.default, { mensaje: mensaje }) : null,
                mensaje === '' ? _react2.default.createElement(_Spinner2.default, null) : null
            ),
            _react2.default.createElement(_Socialpymes2.default, { style: { alignSelf: 'start' } })
        ) : _react2.default.createElement(_Launch2.default, null)
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Launcher);