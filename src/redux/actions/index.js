import store from '../store';
/*
*
* FOR CARTA AND MENU
*
* */
export const ADD_PRODUCT_CARTA = 'ADD_PRODUCT_CARTA';
export const DELETE_PRODUCT_CARTA = 'DELETE_PRODUCT_CARTA';
export const ADD_PRODUCT_MENU = 'ADD_PRODUCT_MENU';
export const DELETE_PRODUCT_MENU = 'DELETE_PRODUCT_MENU';
/*
*
* FOR RESTAURANTE DATA
*
* */
export const ADD_RESTAURANTE_PROFILE = 'ADD_RESTAURANTE_PROFILE';

//PRODUCTS ACTIONS
export function addPedidoCarta(product) {
    store.dispatch({type: ADD_PRODUCT_CARTA, payload: {product}})
}

export function addPedidoMenu(product) {
    store.dispatch({type: ADD_PRODUCT_MENU, payload: {product}})
}

export function substractPedidoCarta(product) {
    store.dispatch({type: DELETE_PRODUCT_CARTA, payload: {product}})
}

export function substractPedidoMenu(product) {
    store.dispatch({type: DELETE_PRODUCT_MENU, payload: {product}})
}

//RESTAURANTE ACTIONS
export function addProfile(data){
    store.dispatch({type: ADD_RESTAURANTE_PROFILE, payload: {data}})
}
