// import {ADD_PRODUCT_CARTA} from '../actions/index';
// import {DELETE_PRODUCT_CARTA} from '../actions/index';

const initialState = {
    pedidoCarta: []
};

function PedidosCarta(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_CARTA':
            let exist = state.pedidoCarta.filter(item => item.plato_id === action.payload.product.plato_id);

            if (exist.length !== 0) {
                // action.payload.product.cant = exist[0].cant + 1
                // return {
                //     pedidoCarta: [...state.pedidoCarta, action.payload.product]
                // }
                const pedidos = state.pedidoCarta.map(item => {
                    if (exist[0].plato_id === item.plato_id) {
                        item.cant = item.cant + 1;
                        return item;
                    } else {
                        return item
                    }
                })
                return {
                    pedidoCarta: [...pedidos]
                }
            } else {
                action.payload.product.cant = 1
                return {
                    pedidoCarta: [...state.pedidoCarta, action.payload.product]
                }
            }
        // const sum = state.pedidoCarta.map(item => {
        //     if (item.plato_id === action.payload.product.plato_id) {
        //         item.cant = item.cant + 1
        //         return item
        //     }else{
        //         return 'false'
        //     }
        // })
        // console.log('sum', sum)
        // if (!action.payload.product.cant && sum.length === 0 && exist.length === 0) {
        //     action.payload.product.cant = 1
        //     return {
        //         pedidoCarta: [...state.pedidoCarta, action.payload.product]
        //     }
        // } else {
        //     return {
        //         pedidoCarta: [...sum]
        //     }
        // }
        // break;

        case 'DELETE_PRODUCT_CARTA':
            // if (action.payload.product.cant >= 1) {
            //     const subs = state.pedidoCarta.map(item => {
            //         if (item.plato_id === action.payload.product.plato_id) {
            //             item.cant = item.cant - 1
            //             return item
            //         } else {
            //             return item
            //         }
            //     })
            //     const del = subs.filter(item => item.cant !== 0)
            //     return {
            //         pedidoCarta: [...del]
            //     }
            // } else {
            //     const del = state.pedidoCarta.filter(item => item.plato_id !== action.payload.product.plato_id)
            //     return {
            //         pedidoCarta: [...del]
            //     }
            // }
            //
            let existe = state.pedidoCarta.filter(item => item.plato_id === action.payload.product.plato_id);

            if (existe.length >= 1) {
                const substractPedido = state.pedidoCarta.map(item => {
                    if(existe[0].cant >= 1 && item.plato_id === action.payload.product.plato_id){
                        item.cant = item.cant - 1;
                        return item
                    }else{
                        return item
                    }
                });
                const del = substractPedido.filter(item => item.cant !== 0)

                return {
                    pedidoCarta:  [...del]
                }
            }else{
                const del = state.pedidoCarta.filter(item=> item.plato_id !== action.payload.product.plato_id);
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

        case 'DISCHARD_PRODUCTS_FULL_CARTA':
            return {
                pedidoCarta: []
            }
        default:
            return state;
    }
}

export default PedidosCarta;