// import {ADD_PRODUCT_CARTA} from '../actions/index';
// import {DELETE_PRODUCT_CARTA} from '../actions/index';

const initialState = {
    pedidoCarta: []
};

function PedidosCarta(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_CARTA':
            if (!action.payload.product.cant) {
                action.payload.product.cant = 1
                return {
                    pedidoCarta: [...state.pedidoCarta, action.payload.product]
                }
            } else {
                const sum = state.pedidoCarta.map(item => {
                    if (item.plato_id === action.payload.product.plato_id) {
                        item.cant = item.cant + 1
                        return item
                    } else {
                        return item
                    }
                })
                return {
                    pedidoCarta: [...sum]
                }
            }
            // break;

        case 'DELETE_PRODUCT_CARTA':
            if (action.payload.product.cant >= 1) {
                const subs = state.pedidoCarta.map(item => {
                    if (item.plato_id === action.payload.product.plato_id) {
                        item.cant = item.cant - 1
                        return item
                    } else {
                        return item
                    }
                })
                const del = subs.filter(item => item.cant !== 0)
                return {
                    pedidoCarta: [...del]
                }
            } else {
                const del = state.pedidoCarta.filter(item => item.plato_id !== action.payload.product.plato_id)
                return {
                    pedidoCarta: [...del]
                }
            }
            // break;

        case 'DISCHARD_PRODUCTS_CARTA':
            if (action.payload.product.cant >= 1) {
                const subs = state.pedidoCarta.map(item => {
                    if (item.plato_id === action.payload.product.plato_id) {
                        item.cant = item.cant - item.cant
                        return item
                    } else {
                        return item
                    }
                })
                const del = subs.filter(item => item.cant !== 0)
                return {
                    pedidoCarta: [...del]
                }
            } else {
                const del = state.pedidoCarta.filter(item => item.plato_id !== action.payload.product.plato_id)
                return {
                    pedidoCarta: [...del]
                }
            }
        // break;
        default:
            return state;
    }
}

export default PedidosCarta;