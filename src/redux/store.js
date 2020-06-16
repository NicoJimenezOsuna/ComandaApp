import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {save,load} from 'redux-localstorage-simple'

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers,composeEnhancers());
const createStoreWithMiddleware = applyMiddleware(
    save({
        states:[
            'PedidosMenu',
            'PedidosCarta',
            "RestauranteData"]
    }), // Saving done here
)(createStore);
const store = createStoreWithMiddleware(
    reducers,
    load({
        states:[
            'PedidosMenu',
            'PedidosCarta',
            // "RestauranteData"
        ]
    }), // Loading done here
    composeEnhancers(),
);

export default store;