'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _connect_data_restaurantes = require('../data/connect_data_restaurantes');

var _utils = require('../utils/utils');

var _Commandkeypad = require('./Commandkeypad');

var _Commandkeypad2 = _interopRequireDefault(_Commandkeypad);

var _reactRedux = require('react-redux');

require('../App.css');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Carousel = function Carousel(_ref) {
    var datas = _ref.datas,
        dataInicios = _ref.dataInicios,
        actualizaPropDataProductId = _ref.actualizaPropDataProductId,
        wordkey = _ref.wordkey,
        products = _ref.products,
        token = _ref.token;

    var slide = {
        column: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Dosis',
            marginTop: '-.5em'
        },
        product: {
            marginBottom: '.5em'
        },
        pvp: {
            fontVariant: 'small-caps',
            color: '#808080'
        },
        datos: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        price: {},
        p: {
            fontSize: '2em',
            padding: '0.3em .6em',
            backgroundColor: '#00800033',
            borderRadius: '20px'
        },
        allergens: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        ul: {
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'baseline',
            overflowX: 'scroll',
            padding: '.5em',
            width: '100%'
        },
        li: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'start'
        },
        img: {
            borderRadius: '50px',
            margin: '1em 0',
            maxWidth: '100%',
            maxHeight: '300px'
        },
        figure: {
            width: '100%',
            borderRadius: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        descrip: {
            padding: '10px',
            textAlign: 'justify',
            fontSize: '1.2em'
            // textIndent: '1em',
        },
        divSpanButton: {
            width: '100%',
            mergin: '0 2em',
            margin: '.6em 0',
            alignSelf: 'end'
        },
        spanButtonRight: {
            padding: '.5em 1em',
            borderRadius: '20px',
            border: '1px solid black',
            float: 'right'
        },
        spanButtonLeft: {
            padding: '.5em 1em',
            borderRadius: '20px',
            border: '1px solid black',
            float: 'left'
        },
        sup: {
            fontStyle: 'oblique',
            fontSize: 'large',
            color: '#3E5062'
        },
        between: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '2em'
        },
        title: {
            textAlign: 'center'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        dataSlider = _useState2[0],
        getDataSlider = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        dataInicio = _useState4[0],
        getDataInicio = _useState4[1];

    var _useState5 = (0, _react.useState)(true),
        _useState6 = _slicedToArray(_useState5, 2),
        buttonNext = _useState6[0],
        getButtonNext = _useState6[1];

    var _useState7 = (0, _react.useState)(true),
        _useState8 = _slicedToArray(_useState7, 2),
        buttonPrevius = _useState8[0],
        getButtonPrevius = _useState8[1];

    var _useState9 = (0, _react.useState)(''),
        _useState10 = _slicedToArray(_useState9, 2),
        stwordkey = _useState10[0],
        getStWordkey = _useState10[1];

    var _useState11 = (0, _react.useState)(false),
        _useState12 = _slicedToArray(_useState11, 2),
        product = _useState12[0],
        getProduct = _useState12[1];

    var _useState13 = (0, _react.useState)([]),
        _useState14 = _slicedToArray(_useState13, 2),
        lallergens = _useState14[0],
        getAllergens = _useState14[1];

    var _useState15 = (0, _react.useState)(null),
        _useState16 = _slicedToArray(_useState15, 2),
        idplato = _useState16[0],
        getIdplato = _useState16[1];

    (0, _react.useEffect)(function () {
        getDataSlider(datas);
        getDataInicio(dataInicios);
        getStWordkey(wordkey);
        getProduct(products);
    }, [datas, dataInicios, wordkey, products]);

    (0, _react.useEffect)(function () {
        if (datas && dataInicios) {
            getIdplato(datas[dataInicios].plato_id);
        }
    }, [datas, dataInicios]);

    (0, _react.useEffect)(function () {
        if (datas.length > 0) {
            var allergensRequest = function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(headers, protocol, url, pathApi, token, idplato) {
                    var response;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return _axios2.default.get('' + protocol + url + pathApi + '3/' + token + '/' + idplato, _connect_data_restaurantes.USER_HEADERS);

                                case 3:
                                    response = _context.sent;
                                    _context.next = 6;
                                    return getAllergens(response.data.data.respuesta);

                                case 6:
                                    _context.next = 11;
                                    break;

                                case 8:
                                    _context.prev = 8;
                                    _context.t0 = _context['catch'](0);

                                    console.log("error", _context.t0);

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined, [[0, 8]]);
                }));

                return function allergensRequest(_x, _x2, _x3, _x4, _x5, _x6) {
                    return _ref2.apply(this, arguments);
                };
            }();
            allergensRequest(_connect_data_restaurantes.USER_HEADERS, _connect_data_restaurantes.HTTP_PROTOCOL, _connect_data_restaurantes.URL_MAIN, _connect_data_restaurantes.PATH_API, token, datas[dataInicios].plato_id);
        }
    }, [datas, idplato, dataInicios, dataSlider, token]);

    var renderSlider = function renderSlider() {
        return dataSlider[dataInicio];
    };

    var controllerButton = function controllerButton(e) {
        var position = 0;
        dataSlider.find(function (item) {
            if (item.plato_id === dataInicio) {
                position = dataSlider.indexOf(item);
            }
            return position;
        });
        if (e.target.id === 'next') {
            if (position === dataSlider.length - 1) {
                getButtonNext(false);
            } else {
                getButtonPrevius(true);
                getDataInicio(dataInicio + 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio + 1);
            }
        }

        if (e.target.id === 'previus') {
            if (position === 0) {
                actualizaPropDataProductId(dataInicio - 1);
            } else {
                getButtonNext(true);
                getDataInicio(dataInicio - 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio - 1);
            }
        }
    };

    return _react2.default.createElement(
        'div',
        { style: slide.column },
        dataSlider.length > 0 ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { style: slide.product },
                _react2.default.createElement(
                    'h2',
                    {
                        style: slide.title
                    },
                    renderSlider().nombreplato
                )
            ),
            _react2.default.createElement(
                'div',
                { style: slide.datos },
                !isNaN(dataInicio) ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    stwordkey === 'carta' ? _react2.default.createElement(
                        'div',
                        { style: slide.price },
                        _react2.default.createElement(
                            'p',
                            { style: slide.p },
                            _react2.default.createElement(
                                'span',
                                { style: slide.pvp },
                                'pvp ',
                                _react2.default.createElement(
                                    'span',
                                    { style: {
                                            fontVariant: 'normal',
                                            fontSize: '.7em'
                                        } },
                                    'ud:'
                                ),
                                ' '
                            ),
                            (0, _utils.dosDecim)(renderSlider().precio, 2),
                            ' \u20AC'
                        )
                    ) : null,
                    stwordkey === 'menu' ? null : _react2.default.createElement(
                        'div',
                        { style: slide.between,
                            className: stwordkey === 'carta' ? 'displayed' : 'displayed_none' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'HA PEDIDO: ',
                            _react2.default.createElement(
                                'span',
                                { style: { fontSize: '1.5em', marginRight: '1em' } },
                                product.map(function (item) {
                                    if (item.plato_id === renderSlider().plato_id) {
                                        return item.cant;
                                    }
                                })
                            )
                        ),
                        stwordkey === 'carta' ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Commandkeypad2.default, {
                                data: datas[dataInicios],
                                wordkey: stwordkey
                            })
                        ) : null
                    ),
                    _react2.default.createElement(
                        'ul',
                        { style: slide.ul },
                        lallergens.length > 0 ? lallergens.map(function (item, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: item.id,
                                    style: slide.li,
                                    className: index === 0 ? 'paddingRighttAllergensModal' : 'paddingAllergensModal'
                                },
                                _react2.default.createElement('img', { style: { width: '3em' }, src: (0, _utils.urlImage)() + item.imagen,
                                    alt: item.nombrealergeno }),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    item.nombrealergeno
                                )
                            );
                        }) : 'Alergenos no disponibles'
                    ),
                    _react2.default.createElement(
                        'figure',
                        { style: slide.figure },
                        _react2.default.createElement('img', {
                            style: slide.img,
                            src: renderSlider().imagen,
                            alt: renderSlider().nombreplato }),
                        _react2.default.createElement(
                            'figcaption',
                            null,
                            renderSlider().nombreplato
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: slide.descrip },
                        _react2.default.createElement(
                            'p',
                            { style: { fontWeight: 'bolder' } },
                            renderSlider().observaciones
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: slide.divSpanButton },
                        buttonPrevius && 0 !== dataInicios ? _react2.default.createElement(
                            'span',
                            {
                                id: 'previus',
                                onClick: controllerButton,
                                style: slide.spanButtonLeft },
                            '<< ANTERIOR'
                        ) : null,
                        buttonNext && dataSlider.length - 1 !== dataInicios ? _react2.default.createElement(
                            'span',
                            {
                                id: 'next',
                                onClick: controllerButton,
                                style: slide.spanButtonRight },
                            'SIGUIENTE >>'
                        ) : null
                    )
                ) : _react2.default.createElement(_Spinner2.default, null)
            )
        ) : _react2.default.createElement(_Spinner2.default, null)
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Carousel);