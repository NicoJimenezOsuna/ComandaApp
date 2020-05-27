import React, { Fragment, useEffect, useState } from "react";
import { ReactComponent as IconClose } from "../icons/times-circle-regular.svg";
import Carousel from './Carousel'
/*
* Glide.js import
*/


const Slidermodal = ({
    isVisibleSlider,
    data,
    dataInicio,
    buttonCloseSlidermodalHandler
}) => {
    
    const slider = {
        cont_princ: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        cont_slider: {
            position: "relative",
            minWidth: "90%",
            maxWidth: "90%",
            maxHeight: "90%",
            minHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        }
    };

    const [dataToCar, getDataToCar] = useState([]);
    const [dataInicioToCar, getDataInicioToCar] = useState([]);
  
    useEffect(()=>{
          getDataToCar(data)
          getDataInicioToCar(dataInicio)
    }, [data, dataInicio])
   
    return (
        <div
            style={slider.cont_princ}
            className={!isVisibleSlider ? "displayed_none" : "displayed"}
        >
            <div style={slider.cont_slider}>
                <IconClose
                    className="close"
                    onClick={buttonCloseSlidermodalHandler}
                />
                <Carousel
                    datas={dataToCar}
                    dataInicios={dataInicioToCar}
                    />
            </div>
        </div>
    );
};

export default Slidermodal;
