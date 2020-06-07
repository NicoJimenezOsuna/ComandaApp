import React, {Fragment, useEffect, useState} from "react";
import { Redirect } from 'react-router-dom'
/*
 * IMPORT COMPONENTS
 */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Migas from "../components/Migas";
import Labelscarta from "../components/Labelscarta";
import Listadocarta from "../components/Listadocarta";
import Listadomenu from "../components/Listadomenu";
import Alergenos from "../components/Alergenos";
import Allergensmodal from "../components/Allergensmodal";
import Slidermodal from "../components/Slidermodal";
import NavUtils from "../components/NavUtils";
import Qrmodal from "../components/Qrmodal";
import Qr from '../components/Qr';
import Mapamodal from "../components/Mapamodal";
import Mailmodal from "../components/Mailmodal";


const Subcategorias = () => {
    const [subcategorias, getSubcategorias] = useState({});
    const [isVisible, getIsVisible] = useState(false);
    const [isVisibleSlider, getIsVisibleSlider] = useState(false);
    const [dataSlider, getDataSlider] = useState([]);
    const [dataProductId, getDataProductId] = useState(0);
    const [verqr, getVerqr] = useState(false);
    const [datosrestaurante, getDatosRestaurante] = useState({});
    const [nonprice, getNonprice] = useState(false)
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);

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

    const dataSliderHandler = (dataFull, dataId, nonprice) => {
        getDataSlider(dataFull);
        getDataProductId(dataId);
        getNonprice(nonprice);
        !isVisibleSlider ? getIsVisibleSlider(true) : getIsVisibleSlider(false);
    };
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
           return (
               <Redirect to="/" />
           )
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

    return (
        <Fragment>
            <div className="subRoot">
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
                    nonprice={nonprice}
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
                />
                <div className="padre">
                    <Migas data={subcategorias.nombre} visible={visibleHandler}/>
                    {subcategorias.wordKey === 'carta' ?
                        <Fragment>
                            <Labelscarta data={titles}/>
                            <Listadocarta
                                dataid={ subcategorias.wordKey !== 'carta' ? null : subcategorias.id}
                                dataSliderHandler={ subcategorias.wordKey !== 'carta' ? null : dataSliderHandler}
                            />
                        </Fragment>
                        :
                        <Listadomenu
                            dataid={subcategorias.id}
                            dataSliderHandler={dataSliderHandler}
                        />
                    }
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
