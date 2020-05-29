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

export const urlComplete = () => {
        // let urlActual = window.location.host;
    let urlActual = "restaurante.comandaapp.es"
    console.log(`${window.location.protocol}//${urlActual}/storage/rest1/ensaladas-300.png`);
    return `${window.location.protocol}//${urlActual}/storage/rest1/ensaladas-300.png`;

};