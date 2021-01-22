import {combineReducers} from 'redux';
import PedidosCarta from './PedidosCarta';
import PedidosMenu from './PedidosMenu';
import RestauranteData from './RestauranteData';
import Token from './Token';
import Publicidad from './Publicidad';
import ClientProfile from './ClientProfile';
import LastOrder from './LastOrder';
import Orders from './Orders';
import SwitchMenu from "./SwitchMenu";
import DataProductSelected from "./DataProductSelected";

let reducers = combineReducers({
    PedidosCarta,
    PedidosMenu,
    RestauranteData,
    Token,
    Publicidad,
    ClientProfile,
    LastOrder,
    Orders,
    SwitchMenu,
    DataProductSelected
});

export default reducers;