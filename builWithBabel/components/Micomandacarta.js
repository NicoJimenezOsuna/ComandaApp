'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Commandkeypad = require('./Commandkeypad');

var _Commandkeypad2 = _interopRequireDefault(_Commandkeypad);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Micomandacarta = function Micomandacarta(_ref) {
    var comandacarta = _ref.comandacarta;

    var com = {
        cont: {
            display: 'flex',
            margin: '5px',
            flexDirection: 'column',
            background: '#fff',
            border: '1px solid grey',
            boxShadow: '0 1px 1px rgba(0,0,0,0.12),' + '0 2px 2px rgba(0, 0, 0, 0.12),' + '0 4px 4px rgba(0, 0, 0, 0.12),' + '0 8px 8px rgba(0, 0, 0, 0.12),' + '0 16px 16px rgba(0, 0, 0, 0.12)',
            borderRadius: '5px'
        },
        img: {
            width: '20%',
            margin: '5px'
        },
        cont_title: {
            width: '80%',
            padding: '5px'
        },
        title: {
            fontWeight: 'bolder'
        },
        hr: {
            width: '90%',
            height: '1px',
            backgroundColor: 'grey',
            margin: '0 auto'
        },
        price: {
            padding: '0.3em 0.6em',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            borderRadius: '20px',
            textAlign: 'right',
            display: 'inline-block',
            float: 'right',
            color: '#808080'
        },
        sup: {
            fontStyle: 'oblique',
            fontSize: 'large',
            color: '#3E5062'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        comandacartalista = _useState2[0],
        getComandacartalista = _useState2[1];

    (0, _react.useEffect)(function () {
        getComandacartalista(comandacarta);
    }, [comandacarta]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        comandacartalista.map(function (item, index) {
            return _react2.default.createElement(
                'div',
                { style: com.cont, key: item.nombreplato + index },
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _react2.default.createElement(
                        'div',
                        { style: com.img },
                        _react2.default.createElement('img', { style: { width: '100%' }, src: item.imagen, alt: item.nombreplato })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: com.cont_title },
                        _react2.default.createElement(
                            'p',
                            { style: com.title },
                            item.nombreplato
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: com.price },
                            'PVP ud.: ',
                            _react2.default.createElement(
                                'span',
                                { style: { color: '#000' } },
                                (0, _utils.dosDecim)(item.precio, 2),
                                ' \u20AC'
                            )
                        )
                    )
                ),
                _react2.default.createElement('hr', { style: com.hr }),
                _react2.default.createElement(
                    'div',
                    { style: {
                            width: '100%',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        } },
                    _react2.default.createElement(
                        'p',
                        { style: { fontSize: '1.3em' } },
                        item.cant === 1 ? 'Ud.: ' : 'Uds.: ',
                        _react2.default.createElement(
                            'span',
                            null,
                            item.cant
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_Commandkeypad2.default
                        //pasamos el producto
                        , { data: item
                            //si es carta true, si es menu false
                            , nonprice: true,
                            wordkey: 'carta'
                        })
                    )
                )
            );
        })
    );
};
exports.default = Micomandacarta;