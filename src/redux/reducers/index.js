import {combineReducers} from 'redux';
import PedidosCarta from './PedidosCarta';
import PedidosMenu from './PedidosMenu';
import RestauranteData from './RestauranteData';
import Token from './Token';

let reducers = combineReducers({
    PedidosCarta,
    PedidosMenu,
    RestauranteData,
    Token
});

export default reducers;