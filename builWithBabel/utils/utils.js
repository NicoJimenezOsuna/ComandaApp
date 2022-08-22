'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.capitalizeString = exports.TotalComanda = exports.addProduct = exports.Ordena = exports.urlComplete = exports.urlImage = exports.dosDecim = exports.iframeSrcData = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Support functions

var _connect_data_restaurantes = require('../data/connect_data_restaurantes');

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
var iframeSrcData = exports.iframeSrcData = function iframeSrcData(iframe) {
    if (iframe) {
        var toSrcData = iframe;
        var keyWord = 'src';

        var stringSrc = toSrcData.split(keyWord)[1];
        var firstString = stringSrc.substr(2, stringSrc.length);

        return firstString.split('"')[0];
    }
};
/**
 *
 * toFixed()
 *
 */
var dosDecim = exports.dosDecim = function dosDecim(number) {
    var maxToFix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var toFix = parseFloat(number);
    return toFix.toFixed(maxToFix);
};
/**
 *
 * URL for one image
 *
 */
var urlImage = exports.urlImage = function urlImage() {
    // let urlActual = HTTP_PROTOCOL + URL_MAIN + "http://restaurante.comandapp.es/storage/"
    return _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.FOLDER_STORAGE;
};
/**
 *
 * URL IMAGE FOLDER FOR OBJECT ITERATION
 *
 */
var urlComplete = exports.urlComplete = function urlComplete(response) {
    //"http://restaurante.comandapp.es/storage/" + image
    var ObjectWithNewUrlImage = response.map(function (item) {
        var nuevo = _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.FOLDER_STORAGE + item.imagen;
        return item = _extends({}, item, { imagen: nuevo });
    });
    return ObjectWithNewUrlImage;
};
/**
 *
 * ORDER DATA
 *
 */
var Ordena = exports.Ordena = function Ordena(element) {
    element.sort(function (a, b) {
        return a - b;
    });
};
/**
 *
 *
 * ADD PRODUCT TO listcomanda (  deprecated  )
 *
 * */
var addProduct = exports.addProduct = function addProduct(product, cat) {
    var local = _extends({}, JSON.parse(localStorage.getItem('pedidosModal')));
    var category = cat;

    if (category) {
        category = 'carta';
    } else {
        category = 'menu';
    }
    console.log('yyyy', local[category]);

    var add = true;
    for (var i = 0; i < local[category].length; i++) {
        if (local[category][i].plato_id === product.plato_id && local[category][i].nombreplato === product.nombreplato) {
            local[category][i].cant++;
            add = false;
        }
    }
    if (add === true) {
        local[category].push(_extends({}, product, { cant: 1 }));
    }

    if (local[category].length === 0) {
        alert(local[category].length);
        local[category].push(_extends({}, product, { cant: 1 }));
    }

    console.log('xxxxx', local[category]);
    localStorage.setItem('pedidosModal', JSON.stringify(local));
};
/**
 *
 * TOTAL PRICE
 *
 * */
var TotalComanda = exports.TotalComanda = function TotalComanda(arrCarta, arrMenu) {
    var totalCarta = 0;
    var totalMenu = 0;
    arrCarta.forEach(function (item) {
        if (item.cant > 1) {
            totalCarta = totalCarta + parseFloat(item.cant * item.precio);
        } else {
            totalCarta = totalCarta + parseFloat(item.precio);
        }
    });
    arrMenu.forEach(function (item) {
        if (item.cant > 1) {
            return totalMenu = totalMenu + parseFloat(item.cant * item.precio);
        } else {
            return totalMenu = totalMenu + parseFloat(item.precio);
        }
    });
    return (totalCarta + totalMenu).toFixed(2);
};
/**
 *
 * FORMAT AND CAPITALIZE STRINGS
 *
 * */
var capitalizeString = exports.capitalizeString = function capitalizeString(string) {
    var convert = string.toLowerCase();
    return convert.charAt(0).toUpperCase() + convert.slice(1);
};