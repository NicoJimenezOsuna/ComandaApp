'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import {ADD_PRODUCT_CARTA} from '../actions/index';
// import {DELETE_PRODUCT_CARTA} from '../actions/index';

var initialState = {
    pedidoCarta: []
};

function PedidosCarta() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PRODUCT_CARTA':
            var exist = state.pedidoCarta.filter(function (item) {
                return item.plato_id === action.payload.product.plato_id;
            });

            if (exist.length !== 0) {
                // action.payload.product.cant = exist[0].cant + 1
                // return {
                //     pedidoCarta: [...state.pedidoCarta, action.payload.product]
                // }
                var pedidos = state.pedidoCarta.map(function (item) {
                    if (exist[0].plato_id === item.plato_id) {
                        item.cant = item.cant + 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                return {
                    pedidoCarta: [].concat(_toConsumableArray(pedidos))
                };
            } else {
                action.payload.product.cant = 1;
                return {
                    pedidoCarta: [].concat(_toConsumableArray(state.pedidoCarta), [action.payload.product])
                };
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
            var existe = state.pedidoCarta.filter(function (item) {
                return item.plato_id === action.payload.product.plato_id;
            });

            if (existe.length >= 1) {
                var substractPedido = state.pedidoCarta.map(function (item) {
                    if (existe[0].cant >= 1 && item.plato_id === action.payload.product.plato_id) {
                        item.cant = item.cant - 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                var del = substractPedido.filter(function (item) {
                    return item.cant !== 0;
                });

                return {
                    pedidoCarta: [].concat(_toConsumableArray(del))
                };
            } else {
                var _del = state.pedidoCarta.filter(function (item) {
                    return item.plato_id !== action.payload.product.plato_id;
                });
                return {
                    pedidoCarta: [].concat(_toConsumableArray(_del))
                };
            }
        // break;

        case 'DISCHARD_PRODUCTS_CARTA':
            if (action.payload.product.cant >= 1) {
                var subs = state.pedidoCarta.map(function (item) {
                    if (item.plato_id === action.payload.product.plato_id) {
                        item.cant = item.cant - item.cant;
                        return item;
                    } else {
                        return item;
                    }
                });
                var _del2 = subs.filter(function (item) {
                    return item.cant !== 0;
                });
                return {
                    pedidoCarta: [].concat(_toConsumableArray(_del2))
                };
            } else {
                var _del3 = state.pedidoCarta.filter(function (item) {
                    return item.plato_id !== action.payload.product.plato_id;
                });
                return {
                    pedidoCarta: [].concat(_toConsumableArray(_del3))
                };
            }
        // break;

        case 'DISCHARD_PRODUCTS_FULL_CARTA':
            return {
                pedidoCarta: []
            };
        default:
            return state;
    }
}

exports.default = PedidosCarta;