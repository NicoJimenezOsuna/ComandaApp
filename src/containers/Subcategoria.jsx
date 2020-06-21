import React, {Fragment, useEffect, useState, useCallback} from "react";
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
import {addPedidoMenu} from "../redux/actions";
import {dosDecim} from "../utils/utils";


const Subcategorias = ({restauranteData, PedidosMenu}) => {
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
        getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
        getMapamodal(verMapamodal);
        getMailmodal(verMailmodal);


        // let datosderetaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
        // if (datosderetaurante) {
        getDatosRestaurante(...restauranteData)
        // } else {
        //     //hacer algo si localstorage está vacío
        // }


    }, [restauranteData, verMapamodal, verMailmodal]);


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

    const [warningmessage, getWarningmessage] = useState(false)
    const [errormessage, getErrormessage] = useState(false)
    const [okmessage, getOkmessage] = useState(false)
    const [valuRadio, getValueradio] = useState({})
    const [numberOfsectionsforRadios, getNumberOfsectionsforRadios] = useState(null);
    const [keysofpedido, getkeysofpedido] = useState({})

    const getValue = (e, labelsLength) => {

        let name = e.target.name
        let value = e.target.value

        getkeysofpedido({...keysofpedido, [name]: value})
        getValueradio({...valuRadio, [name]: value});
        getNumberOfsectionsforRadios(labelsLength)
    }

    const completeddMemenu = () => {


        if (
            valuRadio !== null && Object.keys(keysofpedido).length === numberOfsectionsforRadios
        ) {

            //Buscamos los elementos del menú para guardar precio ye identificador

            // // // id 5 nombre "MENÚ LUNES" precio "6.5000" wordKey "menu" idcarta
            valuRadio.id = subcategorias.id;
            valuRadio.nombre = subcategorias.nombre;
            valuRadio.precio = parseFloat(dosDecim(subcategorias.precio, 2));
            valuRadio.cant = 1

            // definimos nuevo objeto para evitar referencia
            // const newObject = {}
            // console.log('valuradio', valuRadio)

            //BUSCAMOS EL PEDIDO EN REDUCER MENUS Y SI EXISTE LANZAMOS WARNING
            const exist = PedidosMenu.filter(item => {
                if(item.id === valuRadio.id){
                    return item
                }
            });

            if (exist.length <= 0) {
                getOkmessage(true)
                setTimeout(function () {
                    getOkmessage(false)
                }, 2000)
                return addPedidoMenu(valuRadio)
            }

//EVALUAR KEYS DE MANERA DINAMICA
            const pedidoenredux = PedidosMenu.filter(item => item.id === valuRadio.id)
            const pedidoredux = pedidoenredux[0]
console.log('pedidoenredux',pedidoredux)
            function compareObj(pedidoredux, keysofpedido) {
                var aKeys = Object.keys(pedidoredux)
                var bKeys = Object.keys(keysofpedido)

                for (var i = 0; i < bKeys.length; i++) {
                    if (pedidoredux[aKeys[i]] !== keysofpedido[bKeys[i]]) {
                        return false;
                    }
                }
                return true;
            }

            if (exist && compareObj(pedidoredux,keysofpedido)) {
                getWarningmessage(true)
                setTimeout(function () {
                    getWarningmessage(false)
                }, 2000)
            } else {
                getOkmessage(true)
                setTimeout(function () {
                    getOkmessage(false)
                }, 2000)

                addPedidoMenu(valuRadio)
            }

            // addPedidoMenu(Object.assign({}, valuRadio))
            // addPedidoMenu(valuRadio)
        } else {
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
                <Listadomenu
                    warningmessage={warningmessage}
                    errormessage={errormessage}
                    okmessage={okmessage}
                    completeddMemenu={completeddMemenu}
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
            <div className="subRoot">
                <Listcomandamodal
                    onClick={pedidoViewHandler}
                    isVisiblePedido={isVisiblePedido}
                    pedidoViewHandler={pedidoViewHandler}
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
            />
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        PedidosMenu: state.PedidosMenu.pedidoMenu
    }
}

export default connect(mapStateToProps)(Subcategorias);
