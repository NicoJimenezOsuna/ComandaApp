'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLocalstorageSimple = require('redux-localstorage-simple');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

// const store = createStore(reducers,composeEnhancers());
var createStoreWithMiddleware = (0, _redux.applyMiddleware)((0, _reduxLocalstorageSimple.save)({
    states: ['PedidosMenu', 'PedidosCarta', "RestauranteData", 'Token', 'ClientProfile', 'LastOrder', 'Orders']
}) // Saving done here
)(_redux.createStore);
var store = createStoreWithMiddleware(_reducers2.default, (0, _reduxLocalstorageSimple.load)({
    states: ['PedidosMenu', 'PedidosCarta', 'Token', 'ClientProfile', 'LastOrder', 'Orders'
    // "RestauranteData"
    ]
}), // Loading done here
composeEnhancers());

exports.default = store;