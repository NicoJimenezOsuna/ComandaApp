import React, { Fragment, useEffect, useState } from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from "../views/Header";
import Footer from "../views/Footer";
import Migas from "./Migas";
import Labelsubcategory from "./Labelsubcategory";
import Listadomenu from './Listadomenu'

const Subcategorias = () => {
    const [subcategorias, getSubcategorias] = useState({});

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
            <Header />
            <div className="padre">
                <Migas data={subcategorias.nombre} />
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
