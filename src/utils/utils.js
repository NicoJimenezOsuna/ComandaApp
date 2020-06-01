import React, {useEffect} from 'react';
// Support functions
/*
 *
 * toFixed()
 *
 */
export const dosDecim = (number, maxToFix) => {
    let toFix = parseInt(number);
    return toFix.toFixed(2);
};
/*
 *
 * Dinamic URL for elements
 *
 */
export const urlComplete = (response) => {
    // let urlActual = `${window.location.protocol}//${window.location.host}/storage/`;
    let urlActual = "http://restaurante.comandaapp.es/storage/"

    const ObjectWithNewUrlImage = response.map(item => {
        let nuevo = urlActual + item.imagen
        return item = {...item, imagen: nuevo}
    })
    return (ObjectWithNewUrlImage)
};
/*
 *
 * order data
 *
 */
export const Ordena = (element) => {
    element.sort((a, b) => a - b)
}