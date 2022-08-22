'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Commandkeymenu = require('./comandkeymenu/Commandkeymenu');

var _Commandkeymenu2 = _interopRequireDefault(_Commandkeymenu);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Micomandamenu = function Micomandamenu(_ref) {
    var comandamenu = _ref.comandamenu;

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
        },
        cont_platos: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        env_platos: {
            width: '89%',
            padding: '.5em'
        },
        platos: {
            color: 'grey'

        },
        spanplatos: {
            fontWeight: 'bolder',
            color: '#000'
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        comandamenulista = _useState2[0],
        getComandamenulista = _useState2[1];

    (0, _react.useEffect)(function () {
        getComandamenulista(comandamenu);
    }, [comandamenu]);

    if (!comandamenulista) {
        return null;
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        comandamenulista.map(function (item, index, key) {

            var keys = Object.keys(item);
            var validkeys = keys.filter(function (key) {
                return key !== 'id' && key !== 'nombre' && key !== 'precio' && key !== 'cant' && key !== 'internalID';
            });

            return _react2.default.createElement(
                'div',
                { style: com.cont, key: item.id + index },
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _react2.default.createElement(
                        'div',
                        { style: com.img },
                        _react2.default.createElement('img', { style: { width: '100%' }, src: './assets/img/menu.jpg', alt: item.nombre })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: com.cont_title },
                        _react2.default.createElement(
                            'p',
                            { style: com.title },
                            item.nombre
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: com.price },
                            'PVP ud.: ',
                            _react2.default.createElement(
                                'span',
                                {
                                    style: { color: '#000' } },
                                (0, _utils.dosDecim)(item.precio, 2),
                                ' \u20AC'
                            ),
                            _react2.default.createElement(
                                'sup',
                                { style: com.sup },
                                ' + iva'
                            )
                        )
                    )
                ),
                _react2.default.createElement('hr', { style: com.hr }),
                _react2.default.createElement(
                    'div',
                    { style: com.cont_platos },
                    _react2.default.createElement(
                        'div',
                        { style: com.env_platos },
                        validkeys.map(function (prop, index) {
                            return _react2.default.createElement(
                                'ul',
                                { key: Math.random() },
                                _react2.default.createElement(
                                    'li',
                                    { style: { fontWeight: 'bolder', color: 'grey' } },
                                    prop + ':'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { style: { listStyle: 'none', fontWeight: 'bolder' } },
                                    item[prop].split('?')[0]
                                )
                            );
                        })
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
                        _react2.default.createElement(_Commandkeymenu2.default
                        //pasamos el producto
                        , { data: item
                            //si es carta true, si es menu false
                            , nonprice: false,
                            wordkey: 'menu'
                        })
                    )
                )
            );
        })
    );
};
exports.default = Micomandamenu;