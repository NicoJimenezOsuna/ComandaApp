import React from "react";
import { Glide } from 'react-glide';
// import 'react-glide/lib/reactGlide.css'
import { useState, useEffect } from "react";

const Carousel = ({ datas, dataInicios }) => {
    const carous = {
        carousel : {
            width: '200px!important',
            height: '200px!important'
        },
        imagen : {
            maxWidth: '100px',

        }
    }

    const [dataSlider, getDataSlider] = useState([]);
    const [dataInicio, getDataInicio] = useState(0);

    useEffect(() => {
        getDataSlider(datas);
        getDataInicio(dataInicios);
    }, [datas, dataInicios]);

    return (
        <div style={{width: '100%', height: '100%'}}>
            <p>hola</p>
        </div>
    );
};

export default Carousel;
