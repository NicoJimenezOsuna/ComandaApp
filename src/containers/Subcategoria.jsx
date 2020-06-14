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


const Subcategorias = () => {
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


            let datosderetaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
            if (datosderetaurante) {
                getDatosRestaurante(datosderetaurante)
            } else {
                //hacer algo si localstorage está vacío
            }


    }, [verMapamodal, verMailmodal]);


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

    const renderCategory = () => {
        if(subcategorias.wordKey === 'carta'){
            return (
                <Fragment>
                    <Labelscarta data={titles}/>
                    <Listadocarta
                        dataid={subcategorias.id}
                        dataSliderHandler={dataSliderHandler}
                    />
                </Fragment>
            )
        }else{
            return (
                <Listadomenu
                             dataid={subcategorias.id}
                             dataSliderHandler={dataSliderHandler}
                             subcategorias={subcategorias}
                />
            )
        }
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
                    { renderCategory() }
                </div>
            </div>
            <Footer
                vermail={vermail}
                vermapa={vermapa}
                datosrestaurante={datosrestaurante}
                back={'/categoria'}
            />
        </Fragment>
    );
};

export default Subcategorias;
