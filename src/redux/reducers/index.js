import {combineReducers} from 'redux';
import PedidosCarta from './PedidosCarta';
import PedidosMenu from './PedidosMenu';
import RestauranteData from './RestauranteData';

let reducers = combineReducers({
    PedidosCarta,
    PedidosMenu,
    RestauranteData
});

export default reducers;