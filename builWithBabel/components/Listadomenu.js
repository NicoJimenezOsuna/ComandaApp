'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Labelsmenus = require('./Labelsmenus');

var _Labelsmenus2 = _interopRequireDefault(_Labelsmenus);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../utils/utils');

var _Platosmenus = require('./Platosmenus');

var _Platosmenus2 = _interopRequireDefault(_Platosmenus);

var _reactRedux = require('react-redux');

var _Spinnercircle = require('./Spinnercircle');

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _connect_data_restaurantes = require('../data/connect_data_restaurantes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Listadomenu = function Listadomenu(_ref) {
    var dataid = _ref.dataid,
        dataSliderHandler = _ref.dataSliderHandler,
        subcategorias = _ref.subcategorias,
        productMenuSel = _ref.productMenuSel,
        restauranteData = _ref.restauranteData,
        token = _ref.token,
        getValue = _ref.getValue,
        completeddMemenu = _ref.completeddMemenu,
        okmessage = _ref.okmessage,
        errormessage = _ref.errormessage,
        warningmessage = _ref.warningmessage;

    var listado = {
        between: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#8080802e',
            padding: '.7em .7em'
        },
        buttonMenu: {
            // fontSize: '1.3em',
            // padding: '.5em 2em',
            // borderRadius: '25px',
            // border: '2px solid rgb(112, 112, 112)',
            // backgroundColor: 'rgba(156, 255, 242, 0.68)',
            // display: 'inline-block',
            // cursor: 'pointer',
            // textDecoration: 'none',
            // textShadow: '0px 1px 0px #2f6627',
            // outline: 'none'
        },
        error: {
            color: 'white',
            backgroundColor: '#e50e0e',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        },
        ok: {
            color: 'white',
            backgroundColor: ' #5bbc5b',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        },
        warning: {
            color: 'white',
            backgroundColor: '#17a2b8',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        sectionsMenu = _useState2[0],
        getSectionsMenu = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        seccid = _useState4[0],
        getSeccid = _useState4[1];

    (0, _react.useEffect)(function () {
        //Will not update state if isn't mounted.
        var isSubscribed = true;

        getSeccid(dataid);

        // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/menuID
        var menusRequest = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(protocol, url, pathAPI, token, id, header) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get('' + protocol + url + pathAPI + '1/' + token + '/' + id, header);

                            case 3:
                                response = _context.sent;

                                if (isSubscribed) {
                                    getSectionsMenu(response.data.data.respuesta);
                                }
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                console.log("error", _context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 7]]);
            }));

            return function menusRequest(_x, _x2, _x3, _x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            };
        }();
        //REQUEST
        menusRequest(_connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, dataid, _connect_data_restaurantes.USER_HEADERS);

        //clean function: no update state if is unmount component
        return function () {
            return isSubscribed = false;
        };
    }, [token, dataid, productMenuSel, subcategorias]);

    if (!Object.keys(sectionsMenu).length > 0) {
        return _react2.default.createElement(_Spinnercircle2.default, null);
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(
            'div',
            { style: listado.between },
            _react2.default.createElement(
                'button',
                {
                    onClick: completeddMemenu,
                    type: 'button',
                    style: listado.buttonMenu,
                    className: 'button_comanda'
                },
                'A\xF1adir'
            ),
            _react2.default.createElement(
                'p',
                {
                    className: warningmessage ? 'displayed' : 'displayed_none ',
                    style: listado.warning },
                'A\xF1adido de nuevo este men\xFA.'
            ),
            _react2.default.createElement(
                'p',
                {
                    className: errormessage ? 'displayed' : 'displayed_none ',
                    style: listado.error },
                'seleccione un producto de cada apartado.'
            ),
            _react2.default.createElement(
                'p',
                {
                    className: okmessage ? 'displayed' : 'displayed_none ',
                    style: listado.ok
                },
                'Guardado en lista de pedidos.'
            )
        ) : null,
        _react2.default.createElement(
            'div',
            { style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1em 1em 0 1em',
                    fontSize: '1.5em',
                    margin: '0 10px'
                }
            },
            _react2.default.createElement(
                'span',
                { style: {
                        color: 'rgb(110, 104, 104)'
                    } },
                'Total'
            ),
            Object.keys(restauranteData).length > 0 ?
            // Accedemos al array restauranteData y apuntamos al objeto "respuesta" dentro de la primera llamada
            restauranteData[0].respuesta.map(function (item) {
                //Se mapea el contenido de respuesta y apuntamos al objeto "id" dentro de "respuesta"
                if (item.id === seccid) {
                    //Accedemos al objeto "precio" dentro de "id"
                    return _react2.default.createElement(
                        'span',
                        { style: {
                                background: 'rgb(177, 216, 226)',
                                padding: '.3em',
                                color: 'rgb(110, 104, 104)'
                            },
                            key: 'id' + item.id },
                        'PVP: ',
                        (0, _utils.dosDecim)(item.precio, 2),
                        ' \u20AC'
                    );
                }
            }) : _react2.default.createElement(_Spinnercircle2.default, null)
        ),
        Object.keys(sectionsMenu).length > 0 ? sectionsMenu.map(function (item) {
            // {console.log(sectionsMenu)}
            return _react2.default.createElement(
                _react.Fragment,
                { key: item.categoria },
                _react2.default.createElement(_Labelsmenus2.default, { data: item.categoria }),
                _react2.default.createElement(_Platosmenus2.default, {
                    labelsLength: sectionsMenu.length,
                    data: item.categoria,
                    catid: item.categoria_id,
                    seccid: seccid,
                    dataSliderHandler: dataSliderHandler,
                    getValue: getValue
                })
            );
        }) : _react2.default.createElement(_Spinnercircle2.default, null)
    );
};

function mapStateToProps(state) {
    return {
        productMenuSel: state.PedidosMenu.pedidoMenu,
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Listadomenu);