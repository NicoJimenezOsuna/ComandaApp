// Support functions

import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API,
    FOLDER_STORAGE
} from '../data/connect_data_restaurantes';
/*
*
* GET PROTOCOL
*
*/
// export const protocol = window.location.protocol;
/*
*
* GET HOST
*
*/
// export const host = window.location.host;
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
/**
 *
 * toFixed()
 *
 */
export const dosDecim = (number, maxToFix = 2) => {
    let toFix = parseFloat(number);
    return toFix.toFixed(maxToFix);
};
/**
 *
 * URL for one image
 *
 */
export const urlImage = () => {
    // let urlActual = HTTP_PROTOCOL + URL_MAIN + "http://restaurante.comandapp.es/storage/"
    return HTTP_PROTOCOL + URL_MAIN + FOLDER_STORAGE
}
/**
 *
 * URL IMAGE FOLDER FOR OBJECT ITERATION
 *
 */
export const urlComplete = (response) => {
    //"http://restaurante.comandapp.es/storage/" + image
    const ObjectWithNewUrlImage = response.map(item => {
        let nuevo = HTTP_PROTOCOL + URL_MAIN + FOLDER_STORAGE + item.imagen
        return item = {...item, imagen: nuevo}
    })
    return (ObjectWithNewUrlImage)
};
/**
 *
 * ORDER DATA
 *
 */
export const Ordena = (element) => {
    element.sort((a, b) => a - b)
}
/**
 *
 *
 * ADD PRODUCT TO listcomanda (  deprecated  )
 *
 * */
export const addProduct = (product, cat) => {
    const local = {...JSON.parse(localStorage.getItem('pedidosModal'))}
    let category = cat;

    if (category) {
        category = 'carta'
    } else {
        category = 'menu'
    }
    console.log('yyyy', local[category])

    let add = true;
    for (let i = 0; i < local[category].length; i++) {
        if (local[category][i].plato_id === product.plato_id && local[category][i].nombreplato === product.nombreplato) {
            local[category][i].cant++;
            add = false
        }
    }
    if (add === true) {
        local[category].push({...product, cant: 1})
    }

    if (local[category].length === 0) {
        alert(local[category].length)
        local[category].push({...product, cant: 1})
    }

    console.log('xxxxx', local[category])
    localStorage.setItem('pedidosModal', JSON.stringify(local));
}
/**
 *
 * TOTAL PRICE
 *
 * */
export const TotalComanda = (arrCarta, arrMenu) => {
    let totalCarta = 0;
    let totalMenu = 0;
    arrCarta.forEach(item => {
        if (item.cant > 1) {
            totalCarta = totalCarta + parseFloat(item.cant * item.precio)
        } else {
            totalCarta = totalCarta + parseFloat(item.precio)
        }
    });
    arrMenu.forEach(item => {
        if (item.cant > 1) {
            return totalMenu = totalMenu + parseFloat(item.cant * item.precio)
        } else {
            return totalMenu = totalMenu + parseFloat(item.precio)
        }
    });
    return (totalCarta + totalMenu).toFixed(2);
}
/**
 *
 * FORMAT AND CAPITALIZE STRINGS
 *
 * */
export const capitalizeString = (string) => {
    let convert = string.toLowerCase();
    return convert.charAt(0).toUpperCase() + convert.slice(1)
}