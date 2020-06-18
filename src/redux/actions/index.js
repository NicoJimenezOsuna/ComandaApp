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
export const DISCHARD_PRODUCTS_MENU = 'DISCHARD_PRODUCTS_MENU';
export const DISCHARD_PRODUCTS_CARTA = 'DISCHARD_PRODUCTS_CARTA';
export const DISCHARD_PRODUCTS_FULL_MENU = 'DISCHARD_PRODUCTS_FULL_MENU';
export const DISCHARD_PRODUCTS_FULL_CARTA = 'DISCHARD_PRODUCTS_FULL_CARTA';
export const ADD_TOKEN = 'ADD_TOKEN';


/*
*
* FOR RESTAURANTE DATA
*
* */
export const ADD_RESTAURANTE_PROFILE = 'ADD_RESTAURANTE_PROFILE';

//PRODUCTS ACTIONS ( CARTA )
export function addPedidoCarta(product) {
    store.dispatch({type: ADD_PRODUCT_CARTA, payload: {product}})
}

export function substractPedidoCarta(product) {
    store.dispatch({type: DELETE_PRODUCT_CARTA, payload: {product}})
}

export function dischardPedidoCarta(product) {
    store.dispatch({type: DISCHARD_PRODUCTS_CARTA, payload: {product}})
}


//PRODUCTS ACTIONS ( MENU )
export function addPedidoMenu(product) {
    store.dispatch({type: ADD_PRODUCT_MENU, payload: {product}})
}

export function substractPedidoMenu(product) {
    store.dispatch({type: DELETE_PRODUCT_MENU, payload: {product}})
}

export function dischardPedidoMenu(product) {
    store.dispatch({type: DISCHARD_PRODUCTS_MENU, payload: {product}})
}

//PRODUCTS ACTIONS ( MENU && CARTA)
export function dischardFull(){
    store.dispatch( {type: DISCHARD_PRODUCTS_FULL_MENU, payload:[]})
    store.dispatch( {type: DISCHARD_PRODUCTS_FULL_CARTA, payload:[]})
}

//RESTAURANTE ACTIONS
export function addProfile(data){
    store.dispatch({type: ADD_RESTAURANTE_PROFILE, payload: {data}})
}
//TOKEN ACTIONS
export function addToken(token){
    store.dispatch({type: ADD_TOKEN, payload: token})
}