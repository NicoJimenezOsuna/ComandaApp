
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
 * Dinamic URL for one image
 *
 */
export const urlImage = () => {
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
/*
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