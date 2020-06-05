import React, {useEffect} from 'react';
// Support functions
/*
*
* GET PROTOCOL
*
*/
export const protocol = window.location.protocol;
/*
*
* GET HOST
*
*/
export const host = window.location.host;
/*
*
* GET URL MAP FOR IFRAME
*
*/
export const iframeSrcData = iframe => {
    if (iframe) {
        let toSrcData = iframe;
        let keyWord = 'src';

        let stringSrc = toSrcData.split(keyWord)[1];
        let firstString = stringSrc.substr(2, stringSrc.length);

        return firstString.split('"')[0];
    }
}
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
 * Dinamic URL for object iteration
 *
 */
export const urlImage = () =>{
    // let urlActual = `${protocol}//${host}/storage/`;
    let urlActual = "http://restaurante.comandapp.es/storage/"

    return urlActual
}
/*
 *
 * Dinamic URL for object iteration
 *
 */
export const urlComplete = (response) => {
    // let urlActual = `${protocol}//${host}/storage/`;
    let urlActual = "http://restaurante.comandapp.es/storage/"
console.log('response', response)
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