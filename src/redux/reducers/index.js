import {combineReducers} from 'redux';
import PedidosCarta from './PedidosCarta';
import PedidosMenu from './PedidosMenu';
import RestauranteData from './RestauranteData';
import Token from './Token';
import Publicidad from './Publicidad';
import ClientProfile from './ClientProfile';

let reducers = combineReducers({
    PedidosCarta,
    PedidosMenu,
    RestauranteData,
    Token,
    Publicidad,
    ClientProfile
});

export default reducers;