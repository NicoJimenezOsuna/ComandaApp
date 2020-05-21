import React from "react";
import Glide from "@glidejs/glide";
import { useState, useEffect } from "react";

const Carousel = ({ datas, dataInicios }) => {
    const [dataSlider, getDataSlider] = useState([]);
    const [dataInicio, getDataInicio] = useState(0);

    useEffect(() => {
        new Glide(".glide").mount();
        getDataSlider(datas);
        getDataInicio(dataInicios);
    }, [datas, dataInicios]);

    //    const [slider] = useState(new Glide(`.${element}`, options));
    //    useEffect(() => {
    ////        slider.mount();
    //
    //        // subscribe to an event
    ////        slider.on("run.before", event => {
    //            // ... do something cool here
    //        });
    //
    //        // cleanup when unmounting component
    ////        return () => slider.destroy();
    //    }, []);

    return (
        <div className="glide">
            <div data-glide-el="track" className="glide__track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <img src="./assets/img/logo192.png" alt="logo" />
                    </li>
                    <li className="glide__slide">
                        <img src="./assets/img/logo192.png" alt="logo" />
                    </li>
                    <li className="glide__slide">
                        <img src="./assets/img/logo192.png" alt="logo" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
