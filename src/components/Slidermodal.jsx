import React, { Fragment, useEffect, useState } from "react";
import { ReactComponent as IconClose } from "../icons/times-circle-regular.svg";

const Slidermodal = ({
    isVisibleSlider,
    dataSlider,
    buttonCloseSlidermodalHandler
}) => {
    const slider = {
        cont_princ: {
            width: "100%",
            height: "100%",
            //            maxWidth: '720px',
            //            height: '100%',
            position: "fixed",
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
            width: "90%",
            maxHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        },
        close: {
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "3em"
        }
    };
    return (
        <div
            style={slider.cont_princ}
            className={!isVisibleSlider ? "displayed_none" : "displayed"}
        >
            <div style={slider.cont_slider}>
                <IconClose
                    style={slider.close}
                    onClick={buttonCloseSlidermodalHandler}
                />
                <h1>esto es el modal del slider</h1>
            </div>
        </div>
    );
};

export default Slidermodal;
