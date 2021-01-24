import React, {Fragment, useCallback, useEffect, useState} from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Migas from "../components/Migas";
import Labelscarta from "../components/Labelscarta";
import Listadocarta from "../components/Listadocarta";
import Listadomenu from "../components/Listadomenu";
import Allergensmodal from "../components/Allergensmodal";
import Slidermodal from "../components/Slidermodal";
import NavUtils from "../components/NavUtils";
import Qrmodal from "../components/Qrmodal";
import Mapamodal from "../components/Mapamodal";
import Mailmodal from "../components/Mailmodal";
import Listcomandamodal from "../components/Listcomandamodal";
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {
    addPedidoMenu,
    sumProductsMenu
} from "../redux/actions";
import {dosDecim} from "../utils/utils";
import Publibanner from "../components/publicidad/Publibanner";
import Login from "../components/homecomandapp/Login";
import HelmetSeoComponent from '../components/Seo/HelmetSeoComponent'

const Subcategorias = ({restauranteData, PedidosMenu, dataProductSel}) => {

    const [subcategorias, getSubcategorias] = useState({});
    const [isVisible, getIsVisible] = useState(false);
    const [isVisibleSlider, getIsVisibleSlider] = useState(false);
    const [dataSlider, getDataSlider] = useState([]);
    const [dataProductId, getDataProductId] = useState(0);
    const [verqr, getVerqr] = useState(false);
    const [datosrestaurante, getDatosRestaurante] = useState({});
    const [wordkey, getwordKey] = useState('')
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);
    const [isVisiblePedido, getIsVisiblePedido] = useState(false)
    const [viewloginmodal, getViewclosemodal] = useState(false);
    const [warningmessage, getWarningmessage] = useState(false)
    const [errormessage, getErrormessage] = useState(false)
    const [okmessage, getOkmessage] = useState(false)
    const [valuRadio, getValueradio] = useState({})
    const [numberOfsectionsforRadios, getNumberOfsectionsforRadios] = useState(null);
    const [keysofpedido, getkeysofpedido] = useState({});

    const closeLoginModal = () => {
        !viewloginmodal ? getViewclosemodal(true) : getViewclosemodal(false);
    };
    //Variables para actualizar el estado de modales
    let vermapa = () => {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }//sirve para actualizar el estado
    const vermail = () => {
        !verMailmodal ? getMailmodal(true) : getMailmodal(false);
    }//sirve para actualizar el estado

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };
    const pedidoViewHandler = () => {
        !isVisiblePedido ? getIsVisiblePedido(true) : getIsVisiblePedido(false);
    }


    const dataSliderHandler = useCallback((dataFull, dataId, wordkey) => {
        getDataSlider(dataFull);
        getDataProductId(dataId);
        getwordKey(wordkey);
        !isVisibleSlider ? getIsVisibleSlider(true) : getIsVisibleSlider(false);
    }, [isVisibleSlider])
    const buttonCloseSlidermodalHandler = () => {
        !isVisibleSlider ? getIsVisibleSlider(true) : getIsVisibleSlider(false);
    };

    const codigoqr = () => {
        !verqr ? getVerqr(true) : getVerqr(false);
    };//sirve para actualizar el estado

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            // getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
            getSubcategorias(dataProductSel);
            getMapamodal(verMapamodal);
            getMailmodal(verMailmodal);


            // let datosderetaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
            // if (datosderetaurante) {
            getDatosRestaurante(...restauranteData)
            // } else {
            //     //hacer algo si localstorage está vacío
            // }
        }
        return () => isMounted = false;

    }, [restauranteData, verMapamodal, verMailmodal, dataProductSel]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getValueradio({
                ...valuRadio,
                id: subcategorias.id,
                nombre: subcategorias.nombre,
                precio: parseFloat(dosDecim(subcategorias.precio, 2))
            })
        }
        return () => isMounted = false;
    }, [subcategorias.id, subcategorias.nombre, subcategorias.precio])

    //define y pasa por props los títulos
    const titles = {};
    titles.product = "plato";
    titles.price = "P.V.P";
    titles.info = "Info.";


    // Receive status from carousel and update props sent to carousel.
    // Update status of dataProductId to the last id seen in Carousel
    const actualizaPropDataProductId = (value) => {
        getDataProductId(value)
    }

    const getValue = (e, labelsLength) => {

        let name = e.target.name
        let value = e.target.value

        getkeysofpedido({...keysofpedido, [name]: value})
        getValueradio({...valuRadio, [name]: value});
        getNumberOfsectionsforRadios(labelsLength)
    }
//MENÚ ÚNICO CODE -----------------------------------------------------------
//     const completeddMemenu = () => {
//
//
//         if (
//             valuRadio !== null && Object.keys(keysofpedido).length === numberOfsectionsforRadios
//         ) {
//
//             //Buscamos los elementos del menú para guardar precio e identificador
//
//             // // // id 5 nombre "MENÚ LUNES" precio "6.5000" wordKey "menu" idcarta
//             valuRadio.id = subcategorias.id;
//             valuRadio.nombre = subcategorias.nombre;
//             valuRadio.precio = parseFloat(dosDecim(subcategorias.precio, 2));
//             valuRadio.cant = 1
//
//             // definimos nuevo objeto para evitar referencia
//             // const newObject = {}
//             // console.log('valuradio', valuRadio)
//
//             //BUSCAMOS EL PEDIDO EN REDUCER MENUS Y SI EXISTE LANZAMOS WARNING
//             const exist = PedidosMenu.filter(item => {
//                 if (item.id === valuRadio.id) {
//                     return item
//                 }
//             });
//
//             if (exist.length <= 0) {
//                 getOkmessage(true)
//                 setTimeout(function () {
//                     getOkmessage(false)
//                 }, 2000)
//                 return addPedidoMenu(valuRadio)
//             }
//
// //EVALUAR KEYS DE MANERA DINAMICA
//             const pedidoenredux = PedidosMenu.filter(item => item.id === valuRadio.id)
//             const pedidoredux = pedidoenredux[0]
//
//             function compareObj(pedidoredux, keysofpedido) {
//                 var aKeys = Object.keys(pedidoredux)
//                 var bKeys = Object.keys(keysofpedido)
//
//                 for (var i = 0; i < bKeys.length; i++) {
//                     if (pedidoredux[aKeys[i]] !== keysofpedido[bKeys[i]]) {
//                         return false;
//                     }
//                 }
//                 return true;
//             }
//
//             if (exist && compareObj(pedidoredux, keysofpedido)) {
//                 getWarningmessage(true)
//                 setTimeout(function () {
//                     getWarningmessage(false)
//                 }, 2000)
//             } else {
//                 getOkmessage(true)
//                 setTimeout(function () {
//                     getOkmessage(false)
//                 }, 2000)
//
//                 addPedidoMenu(valuRadio)
//             }
//
//             // addPedidoMenu(Object.assign({}, valuRadio))
//             // addPedidoMenu(valuRadio)
//         } else {
//             getErrormessage(true)
//             setTimeout(function () {
//                 getErrormessage(false)
//             }, 2000)
//         }
//     }
// END MENÚ ÚNICO CODE--------------------------------

    const multimenu = () => {
        var getProductInternalID = undefined;
        //si selección está o no vacía
        if (
            valuRadio !== null && Object.keys(keysofpedido).length === numberOfsectionsforRadios
        ) {
            //selección está completa:
            //BUSCAMOS EL PEDIDO EN REDUCER MENUS Y SI EXISTE LANZAMOS WARNING
            const exist = PedidosMenu.filter(item => item.id === valuRadio.id);

            //si existe
            if (exist.length > 0) {
                let isEqual = 0;
                for (let i = 0; i < exist.length; i++) {
                    for (let j = 0; j < numberOfsectionsforRadios; j++) {
                        if (exist[i][Object.keys(keysofpedido)[j]] === valuRadio[Object.keys(keysofpedido)[j]]) {
                            // console.log('res', valuRadio[Object.keys(keysofpedido)[j]]);
                            isEqual++;
                        } else {
                            isEqual = 0;
                        }
                        if (isEqual === numberOfsectionsforRadios) {
                            //consultaremos si posee id interno.
                            getProductInternalID = exist[i].internalID
                            isEqual = 0;
                        }
                    }
                }
            }

            if (getProductInternalID === undefined) {
                //si es undefined poner id interno y enviar a redux
                const nuevoObjeto = {...valuRadio}
                nuevoObjeto.internalID = Math.floor(Math.random() * 60000000000) + 1;
                nuevoObjeto.cant = 1;

                addPedidoMenu(nuevoObjeto)

                getOkmessage(true)
                setTimeout(function () {
                    getOkmessage(false)
                }, 2000)
            } else {
                //enviar id interno y sumar producto
                getWarningmessage(true)
                setTimeout(function () {
                    getWarningmessage(false)
                }, 2000)
                sumProductsMenu(getProductInternalID)
            }

        } else {
            //si selección está vacía
            getErrormessage(true)
            setTimeout(function () {
                getErrormessage(false)
            }, 2000)
        }
    }
    const renderCategory = () => {
        if (subcategorias.wordKey === 'carta') {
            return (
                <Fragment>
                    <Labelscarta data={titles}/>
                    <Listadocarta
                        // dataid={subcategorias.idcarta}
                        dataid={subcategorias}
                        dataSliderHandler={dataSliderHandler}
                    />
                </Fragment>
            )
        } else {
            return (
                // MENÚ ÚNICO CODE
                // <Listadomenu
                //     warningmessage={warningmessage}
                //     errormessage={errormessage}
                //     okmessage={okmessage}
                //     completeddMemenu={completeddMemenu}
                //     getValue={getValue}
                //     dataid={subcategorias.id}
                //     dataSliderHandler={dataSliderHandler}
                //     subcategorias={subcategorias}
                // />
                //FIN MENÚ ÚNICO CODE
                <Listadomenu
                    warningmessage={warningmessage}
                    errormessage={errormessage}
                    okmessage={okmessage}
                    completeddMemenu={multimenu}
                    getValue={getValue}
                    dataid={subcategorias.id}
                    dataSliderHandler={dataSliderHandler}
                    subcategorias={subcategorias}
                />
            )
        }
    }

    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }


    return (
        <Fragment>
            <HelmetSeoComponent/>
            <div className="subRoot">
                <Listcomandamodal
                    onClick={pedidoViewHandler}
                    isVisiblePedido={isVisiblePedido}
                    pedidoViewHandler={pedidoViewHandler}
                    closeloginmodal={closeLoginModal}
                />
                <Qrmodal
                    verqr={verqr}
                    codigoqr={codigoqr}
                />
                <Allergensmodal
                    dataVisible={isVisible}
                    visible={visibleHandler}
                />
                <Slidermodal
                    isVisibleSlider={isVisibleSlider}
                    data={dataSlider}
                    dataInicio={dataProductId}
                    buttonCloseSlidermodalHandler={buttonCloseSlidermodalHandler}
                    actualizaPropDataProductId={actualizaPropDataProductId}
                    wordkey={wordkey}
                />
                <Mapamodal
                    vermapa={vermapa}
                    verMapamodal={verMapamodal}
                    datosrestaurante={datosrestaurante}
                />
                <Mailmodal
                    vermail={vermail}
                    verMailmodal={verMailmodal}
                    datosrestaurante={datosrestaurante}
                />
                <Header/>
                <NavUtils
                    codigoqr={codigoqr}
                    dataVisible={isVisible}
                    visible={visibleHandler}
                    pedidoViewHandler={pedidoViewHandler}
                />
                {
                    restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                        <Publibanner background={true}/>
                        :
                        null
                }
                <div className="padre">
                    <Migas data={subcategorias.nombre} visible={visibleHandler}/>
                    {renderCategory()}
                </div>
            </div>
            <Footer
                changesubcat={false}
                vermail={vermail}
                vermapa={vermapa}
                datosrestaurante={datosrestaurante}
                back={'/categoria'}
                closeloginmodal={closeLoginModal}
            />
            <div className={viewloginmodal ? 'login_home displayed' : 'displayed_none'}>
                <Login closeloginmodal={closeLoginModal}/>
            </div>
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        PedidosMenu: state.PedidosMenu.pedidoMenu,
        dataProductSel: state.DataProductSelected.dataProductSel
    }
}

export default connect(mapStateToProps)(Subcategorias);
