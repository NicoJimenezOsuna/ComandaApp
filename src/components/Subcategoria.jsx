import React, {Fragment, useEffect, useState} from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from "../views/Header";
import Footer from "../views/Footer";
import Migas from "./Migas";
import Labelsubcategory from "./Labelsubcategory";
import Listadomenu from "./Listadomenu";
import Alergenos from "./Alergenos";
import Allergensmodal from "./Allergensmodal";
import Slidermodal from "./Slidermodal";
import NavUtils from "../views/NavUtils";
import Qrmodal from "./Qrmodal";
import Qr from '../components/Qr'


const Subcategorias = () => {
    const [subcategorias, getSubcategorias] = useState({});
    const [isVisible, getIsVisible] = useState(false);
    const [isVisibleSlider, getIsVisibleSlider] = useState(false);
    const [dataSlider, getDataSlider] = useState([]);
    const [dataProductId, getDataProductId] = useState(0);
    const [verqr, getVerqr] = useState(false);

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };

    const dataSliderHandler = (dataFull, dataId) => {
        getDataSlider(dataFull);
        getDataProductId(dataId);
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
    }, []);

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
                {/*<Allergensmodal*/}
                {/*    dataVisible={isVisible}*/}
                {/*    visible={visibleHandler}/>*/}
                <Slidermodal
                    isVisibleSlider={isVisibleSlider}
                    data={dataSlider}
                    dataInicio={dataProductId}
                    buttonCloseSlidermodalHandler={buttonCloseSlidermodalHandler}
                    actualizaPropDataProductId={actualizaPropDataProductId}
                />
                <Header/>
                <NavUtils
                    codigoqr={codigoqr}
                    dataVisible={isVisible}
                    visible={visibleHandler}
                />
                <div className="padre">
                    <Migas data={subcategorias.nombre} visible={visibleHandler}/>
                    <Labelsubcategory data={titles}/>
                    {
                        <Fragment>
                            <Listadomenu
                                dataid={subcategorias.id}
                                dataSliderHandler={dataSliderHandler}
                            />
                        </Fragment>
                    }
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default Subcategorias;
