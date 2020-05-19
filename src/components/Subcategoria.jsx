import React, { Fragment, useEffect, useState } from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from "../views/Header";
import Footer from "../views/Footer";
import Migas from "./Migas";
import Labelsubcategory from "./Labelsubcategory";

const Subcategorias = ({ categoryData }) => {
    const [subcategorias, getSubcategorias] = useState({});

    useEffect(() => {
        getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
    }, []);

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
                    <fragment>
                        <p>{`Viene desde categoría ${subcategorias.id} y ${subcategorias.nombre}`}</p>
                    </fragment>
                }
            </div>
            <Footer />
        </Fragment>
    );
};

export default Subcategorias;
