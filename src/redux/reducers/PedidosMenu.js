// import {ADD_PRODUCT_MENU} from '../actions/index';
// import {DELETE_PRODUCT_MENU} from '../actions/index';

const initialState = {
    pedidoMenu: []
};

function PedidosMenu(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_MENU':
            if (!action.payload.product.cant) {
                action.payload.product.cant = 1
                return {
                    pedidoMenu: [...state.pedidoMenu, action.payload.product]
                }
            } else {
                const sum = state.pedidoMenu.map(item => {
                    if (item.id === action.payload.product.id) {
                        item.cant = item.cant + 1
                        return item
                    } else {
                        return item
                    }
                })
                return {
                    pedidoMenu: [...sum]
                }
            }
            // break;

        case 'DELETE_PRODUCT_MENU':
            if (action.payload.product.cant >= 1) {
                const subs = state.pedidoMenu.map(item => {
                    if (item.id === action.payload.product.id) {
                        item.cant = item.cant - 1
                        return item
                    } else {
                        return item
                    }
                })
                const del = subs.filter(item => item.cant !== 0)
                return {
                    pedidoMenu: [...del]
                }
            } else {
                const del = state.pedidoMenu.filter(item => item.id !== action.payload.product.id)
                return {
                    pedidoMenu: [...del]
                }
            }
            // break;

        case 'DISCHARD_PRODUCTS_MENU':
            if (action.payload.product.cant >= 1) {
                const subs = state.pedidoMenu.map(item => {
                    if (item.id === action.payload.product.id) {
                        item.cant = item.cant - item.cant
                        return item
                    } else {
                        return item
                    }
                })
                const del = subs.filter(item => item.cant !== 0)
                return {
                    pedidoMenu: [...del]
                }
            } else {
                const del = state.pedidoMenu.filter(item => item.id !== action.payload.product.id)
                return {
                    pedidoMenu: [...del]
                }
            }
        // break;

        default:
            return state;
    }
}

export default PedidosMenu;