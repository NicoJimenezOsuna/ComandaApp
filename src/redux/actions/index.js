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
export const SUBSTRACT_PRODUCTS_MENU = 'SUBSTRACT_PRODUCTS_MENU';
export const DISCHARD_PRODUCTS_CARTA = 'DISCHARD_PRODUCTS_CARTA';
export const DISCHARD_PRODUCTS_FULL_MENU = 'DISCHARD_PRODUCTS_FULL_MENU';
export const DISCHARD_PRODUCTS_FULL_CARTA = 'DISCHARD_PRODUCTS_FULL_CARTA';
export const ADD_TOKEN = 'ADD_TOKEN';
export const SET_COUNT = 'SET_COUNT';
export const ADD_CLIENT_PROFILE = 'ADD_CLIENT_PROFILE';
export const SUM_PRODUCTS_MENU = 'SUM_PRODUCTS_MENU';
export const ADD_LAST_ORDER = 'ADD_LAST_ORDER';
export const ADD_END_ORDERS = 'ADD_END_ORDERS';
export const ADD_PENDING_ORDERS = 'ADD_PENDING_ORDERS';
export const ADD_ENTERPRISES = 'ADD_ENTERPRISES';
export const ADD_RENDER_SUBCARTA = 'ADD_RENDER_SUBCARTA';
export const ADD_DATA_PRODUCT_SELECTED = 'ADD_DATA_PRODUCT_SELECTED';



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

export function substractPedidoMenu(internalID) {
    store.dispatch({type: SUBSTRACT_PRODUCTS_MENU, payload: internalID})
}

export function dischardPedidoMenu(product) {
    store.dispatch({type: DELETE_PRODUCT_MENU, payload: {product}})
}

export function sumProductsMenu(internalID) {
    store.dispatch({type: SUM_PRODUCTS_MENU, payload: internalID})
}

//PRODUCTS ACTIONS ( MENU && CARTA)
export function dischardFull() {
    store.dispatch({type: DISCHARD_PRODUCTS_FULL_MENU, payload: []})
    store.dispatch({type: DISCHARD_PRODUCTS_FULL_CARTA, payload: []})
}

//RESTAURANTE ACTIONS
export function addProfile(data) {
    store.dispatch({type: ADD_RESTAURANTE_PROFILE, payload: {data}})
}

//TOKEN ACTIONS
export function addToken(token) {
    store.dispatch({type: ADD_TOKEN, payload: token})
}

//PUBLICIDAD
export function setCount(count) {
    store.dispatch({type: SET_COUNT, payload: count});
}

export function addArrPubli(arrEnterprises){
    store.dispatch({type: ADD_ENTERPRISES, payload: arrEnterprises})
}

//CLIENT_PROFILE
export function addClientProfile(profile) {
    store.dispatch({type: ADD_CLIENT_PROFILE, payload: profile})
}

//LAST_ORDER
export function addLastOrder(numberOrder) {
    store.dispatch({type: ADD_LAST_ORDER, payload: numberOrder})
}

//END ORDERS & PENDING ORDERS
export function addEndOrders(orders) {
    //CAPTURE FULL ORDERS ( ARRAY OF OBJECTS )
    store.dispatch({type: ADD_END_ORDERS, payload: orders})
}

export function addPendingOrders(orders) {
    //CAPTURE ID OF ORDERS ( ARRAY OF ID )
    console.log('PAYLOAD PENDING', orders)
    store.dispatch({type: ADD_PENDING_ORDERS, payload: orders})
}

//STATE OF COMPONET SUBCARTA (FOR MENU OPERATIONS)
export function addNewStateSubcarta(subcartaNewState) {
    store.dispatch({type: ADD_RENDER_SUBCARTA, payload: subcartaNewState})
}

//PRODUCT SELECTED FOR RENDER COMPONENTS
export function addNewProductSelected(productSelected) {
    store.dispatch({type: ADD_DATA_PRODUCT_SELECTED, payload: {...productSelected}})
}