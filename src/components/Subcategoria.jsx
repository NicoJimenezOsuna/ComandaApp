import React, { Fragment, useEffect, useState } from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from "../views/Header";
import Footer from "../views/Footer";
import Migas from "./Migas";
import Labelsubcategory from "./Labelsubcategory";
import Listadomenu from './Listadomenu';
import Allergensmodal from './Allergensmodal';

const Subcategorias = () => {
    const [subcategorias, getSubcategorias] = useState({});
    const [isVisible, getIsVisible] = useState(false);
    
    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    }

    useEffect(() => {
        getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
    }, []);

    //define y pasa por props los títulos
    const titles = {};
    titles.product = "plato";
    titles.price = "P.V.P";
    titles.info = "Info.";

    return (
        <Fragment>
            <Allergensmodal dataVisible={isVisible} visible={visibleHandler}/>
            <Header />
            <div className="padre">
                <Migas 
                    data={subcategorias.nombre}
                    visible={visibleHandler}
                    />
                <Labelsubcategory data={titles} />
                {
                    <Fragment>
                        <Listadomenu dataid={subcategorias.id}/>
                    </Fragment>
                }
            </div>
            <Footer />
        </Fragment>
    );
};

export default Subcategorias;
