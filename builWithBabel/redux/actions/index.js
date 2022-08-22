'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ADD_RESTAURANTE_PROFILE = exports.ADD_DATA_PRODUCT_SELECTED = exports.ADD_RENDER_SUBCARTA = exports.ADD_ENTERPRISES = exports.ADD_PENDING_ORDERS = exports.ADD_END_ORDERS = exports.ADD_LAST_ORDER = exports.SUM_PRODUCTS_MENU = exports.ADD_CLIENT_PROFILE = exports.SET_COUNT = exports.ADD_TOKEN = exports.DISCHARD_PRODUCTS_FULL_CARTA = exports.DISCHARD_PRODUCTS_FULL_MENU = exports.DISCHARD_PRODUCTS_CARTA = exports.SUBSTRACT_PRODUCTS_MENU = exports.DELETE_PRODUCT_MENU = exports.ADD_PRODUCT_MENU = exports.DELETE_PRODUCT_CARTA = exports.ADD_PRODUCT_CARTA = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addPedidoCarta = addPedidoCarta;
exports.substractPedidoCarta = substractPedidoCarta;
exports.dischardPedidoCarta = dischardPedidoCarta;
exports.addPedidoMenu = addPedidoMenu;
exports.substractPedidoMenu = substractPedidoMenu;
exports.dischardPedidoMenu = dischardPedidoMenu;
exports.sumProductsMenu = sumProductsMenu;
exports.dischardFull = dischardFull;
exports.addProfile = addProfile;
exports.addToken = addToken;
exports.setCount = setCount;
exports.addArrPubli = addArrPubli;
exports.addClientProfile = addClientProfile;
exports.addLastOrder = addLastOrder;
exports.addEndOrders = addEndOrders;
exports.addPendingOrders = addPendingOrders;
exports.addNewStateSubcarta = addNewStateSubcarta;
exports.addNewProductSelected = addNewProductSelected;

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*
* FOR CARTA AND MENU
*
* */
var ADD_PRODUCT_CARTA = exports.ADD_PRODUCT_CARTA = 'ADD_PRODUCT_CARTA';
var DELETE_PRODUCT_CARTA = exports.DELETE_PRODUCT_CARTA = 'DELETE_PRODUCT_CARTA';
var ADD_PRODUCT_MENU = exports.ADD_PRODUCT_MENU = 'ADD_PRODUCT_MENU';
var DELETE_PRODUCT_MENU = exports.DELETE_PRODUCT_MENU = 'DELETE_PRODUCT_MENU';
var SUBSTRACT_PRODUCTS_MENU = exports.SUBSTRACT_PRODUCTS_MENU = 'SUBSTRACT_PRODUCTS_MENU';
var DISCHARD_PRODUCTS_CARTA = exports.DISCHARD_PRODUCTS_CARTA = 'DISCHARD_PRODUCTS_CARTA';
var DISCHARD_PRODUCTS_FULL_MENU = exports.DISCHARD_PRODUCTS_FULL_MENU = 'DISCHARD_PRODUCTS_FULL_MENU';
var DISCHARD_PRODUCTS_FULL_CARTA = exports.DISCHARD_PRODUCTS_FULL_CARTA = 'DISCHARD_PRODUCTS_FULL_CARTA';
var ADD_TOKEN = exports.ADD_TOKEN = 'ADD_TOKEN';
var SET_COUNT = exports.SET_COUNT = 'SET_COUNT';
var ADD_CLIENT_PROFILE = exports.ADD_CLIENT_PROFILE = 'ADD_CLIENT_PROFILE';
var SUM_PRODUCTS_MENU = exports.SUM_PRODUCTS_MENU = 'SUM_PRODUCTS_MENU';
var ADD_LAST_ORDER = exports.ADD_LAST_ORDER = 'ADD_LAST_ORDER';
var ADD_END_ORDERS = exports.ADD_END_ORDERS = 'ADD_END_ORDERS';
var ADD_PENDING_ORDERS = exports.ADD_PENDING_ORDERS = 'ADD_PENDING_ORDERS';
var ADD_ENTERPRISES = exports.ADD_ENTERPRISES = 'ADD_ENTERPRISES';
var ADD_RENDER_SUBCARTA = exports.ADD_RENDER_SUBCARTA = 'ADD_RENDER_SUBCARTA';
var ADD_DATA_PRODUCT_SELECTED = exports.ADD_DATA_PRODUCT_SELECTED = 'ADD_DATA_PRODUCT_SELECTED';

/*
*
* FOR RESTAURANTE DATA
*
* */
var ADD_RESTAURANTE_PROFILE = exports.ADD_RESTAURANTE_PROFILE = 'ADD_RESTAURANTE_PROFILE';

//PRODUCTS ACTIONS ( CARTA )
function addPedidoCarta(product) {
    _store2.default.dispatch({ type: ADD_PRODUCT_CARTA, payload: { product: product } });
}

function substractPedidoCarta(product) {
    _store2.default.dispatch({ type: DELETE_PRODUCT_CARTA, payload: { product: product } });
}

function dischardPedidoCarta(product) {
    _store2.default.dispatch({ type: DISCHARD_PRODUCTS_CARTA, payload: { product: product } });
}

//PRODUCTS ACTIONS ( MENU )
function addPedidoMenu(product) {
    _store2.default.dispatch({ type: ADD_PRODUCT_MENU, payload: { product: product } });
}

function substractPedidoMenu(internalID) {
    _store2.default.dispatch({ type: SUBSTRACT_PRODUCTS_MENU, payload: internalID });
}

function dischardPedidoMenu(product) {
    _store2.default.dispatch({ type: DELETE_PRODUCT_MENU, payload: { product: product } });
}

function sumProductsMenu(internalID) {
    _store2.default.dispatch({ type: SUM_PRODUCTS_MENU, payload: internalID });
}

//PRODUCTS ACTIONS ( MENU && CARTA)
function dischardFull() {
    _store2.default.dispatch({ type: DISCHARD_PRODUCTS_FULL_MENU, payload: [] });
    _store2.default.dispatch({ type: DISCHARD_PRODUCTS_FULL_CARTA, payload: [] });
}

//RESTAURANTE ACTIONS
function addProfile(data) {
    _store2.default.dispatch({ type: ADD_RESTAURANTE_PROFILE, payload: { data: data } });
}

//TOKEN ACTIONS
function addToken(token) {
    _store2.default.dispatch({ type: ADD_TOKEN, payload: token });
}

//PUBLICIDAD
function setCount(count) {
    _store2.default.dispatch({ type: SET_COUNT, payload: count });
}

function addArrPubli(arrEnterprises) {
    _store2.default.dispatch({ type: ADD_ENTERPRISES, payload: arrEnterprises });
}

//CLIENT_PROFILE
function addClientProfile(profile) {
    _store2.default.dispatch({ type: ADD_CLIENT_PROFILE, payload: profile });
}

//LAST_ORDER
function addLastOrder(numberOrder) {
    _store2.default.dispatch({ type: ADD_LAST_ORDER, payload: numberOrder });
}

//END ORDERS & PENDING ORDERS
function addEndOrders(orders) {
    //CAPTURE FULL ORDERS ( ARRAY OF OBJECTS )
    _store2.default.dispatch({ type: ADD_END_ORDERS, payload: orders });
}

function addPendingOrders(orders) {
    //CAPTURE ID OF ORDERS ( ARRAY OF ID )
    console.log('PAYLOAD PENDING', orders);
    _store2.default.dispatch({ type: ADD_PENDING_ORDERS, payload: orders });
}

//STATE OF COMPONET SUBCARTA (FOR MENU OPERATIONS)
function addNewStateSubcarta(subcartaNewState) {
    _store2.default.dispatch({ type: ADD_RENDER_SUBCARTA, payload: subcartaNewState });
}

//PRODUCT SELECTED FOR RENDER COMPONENTS
function addNewProductSelected(productSelected) {
    _store2.default.dispatch({ type: ADD_DATA_PRODUCT_SELECTED, payload: _extends({}, productSelected) });
}