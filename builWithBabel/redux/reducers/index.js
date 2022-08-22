'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _PedidosCarta = require('./PedidosCarta');

var _PedidosCarta2 = _interopRequireDefault(_PedidosCarta);

var _PedidosMenu = require('./PedidosMenu');

var _PedidosMenu2 = _interopRequireDefault(_PedidosMenu);

var _RestauranteData = require('./RestauranteData');

var _RestauranteData2 = _interopRequireDefault(_RestauranteData);

var _Token = require('./Token');

var _Token2 = _interopRequireDefault(_Token);

var _Publicidad = require('./Publicidad');

var _Publicidad2 = _interopRequireDefault(_Publicidad);

var _ClientProfile = require('./ClientProfile');

var _ClientProfile2 = _interopRequireDefault(_ClientProfile);

var _LastOrder = require('./LastOrder');

var _LastOrder2 = _interopRequireDefault(_LastOrder);

var _Orders = require('./Orders');

var _Orders2 = _interopRequireDefault(_Orders);

var _SwitchMenu = require('./SwitchMenu');

var _SwitchMenu2 = _interopRequireDefault(_SwitchMenu);

var _DataProductSelected = require('./DataProductSelected');

var _DataProductSelected2 = _interopRequireDefault(_DataProductSelected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    PedidosCarta: _PedidosCarta2.default,
    PedidosMenu: _PedidosMenu2.default,
    RestauranteData: _RestauranteData2.default,
    Token: _Token2.default,
    Publicidad: _Publicidad2.default,
    ClientProfile: _ClientProfile2.default,
    LastOrder: _LastOrder2.default,
    Orders: _Orders2.default,
    SwitchMenu: _SwitchMenu2.default,
    DataProductSelected: _DataProductSelected2.default
});

exports.default = reducers;