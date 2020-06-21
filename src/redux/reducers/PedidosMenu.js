// import {ADD_PRODUCT_MENU} from '../actions/index';
// import {DELETE_PRODUCT_MENU} from '../actions/index';

const initialState = {
    pedidoMenu: []
};

function PedidosMenu(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_MENU':
            // if (!action.payload.product.cant) {
            //     action.payload.product.cant = 1
            //     return {
            //         pedidoMenu: [...state.pedidoMenu, action.payload.product]
            //     }
            // } else {
            //     const sum = state.pedidoMenu.map(item => {
            //         if (item.id === action.payload.product.id) {
            //             item.cant = item.cant + 1
            //             return item
            //         } else {
            //             return item
            //         }
            //     })
            //     return {
            //         pedidoMenu: [...sum]
            //     }
            // }
            // break;

            // if (!action.payload.product.cant) {
            //     action.payload.product.cant = 1
            //     // action.payload.product.id_now = Math.floor(Math.random() * (100000 - 1)) + 1;
            //     // action.payload.product.key = Math.floor(Math.random() * (100000 - 1)) + 1;
            //
            //     return {
            //         pedidoMenu: [...state.pedidoMenu, action.payload.product]
            //     }
            // } else {
            //     const sum = state.pedidoMenu.map(item => {
            //         if (
            //             item.plato1 === action.payload.product.plato1 &&
            //             item.plato2 === action.payload.product.plato2 &&
            //             item.dessert === action.payload.product.dessert &&
            //             item.drink === action.payload.product.drink
            //         ) {
            //             item.cant = item.cant + 1
            //             return item
            //         }
            //         if (
            //             (item.plato1 !== action.payload.product.plato1 ||
            //                 item.plato2 !== action.payload.product.plato2 ||
            //                 item.dessert !== action.payload.product.dessert ||
            //                 item.drink !== action.payload.product.drink) &&
            //             (item.id === action.payload.product.id)
            //         ) {
            //             return {...action.payload.product}
            //         }
            //     })
            //     return {
            //         pedidoMenu: [...sum]
            //     }
            // }
            // console.log(action.payload.product)
            if (state.pedidoMenu.length === 0) {
                return {
                    pedidoMenu: [action.payload.product]
                }
            }
            const exist = state.pedidoMenu.map(item => item.id === action.payload.product.id);
            if (exist) {
                // alert('exist')
                const updateElement = state.pedidoMenu.filter(item => item.id !== action.payload.product.id)
                updateElement.push(action.payload.product)
                // alert('update')
                console.log(updateElement)
                return {
                    pedidoMenu: [...updateElement]
                }
            }else{
                // alert('else')
                return {
                    pedidoMenu: [...state.pedidoMenu, action.payload.product]
                }
            }
            break;
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

        case 'DISCHARD_PRODUCTS_FULL_MENU':
            return {
                pedidoMenu: []
            }

        default:
            return state;
    }
}

export default PedidosMenu;