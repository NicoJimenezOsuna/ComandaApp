import React, { Fragment, useEffect, useState } from "react";
/*
 * IMPORT COMPONENTS
 */
import Header from '../views/Header';
import Footer from '../views/Footer';
import Migas from "./Migas";
import Labelsubcategory from "./Labelsubcategory";

const Subcategorias = ({ categoryData }) => {
    const [subcategorias, getSubcategorias] = useState({});

    useEffect(() => {
        getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
    }, []);

    return (
        <Fragment>
            <Header />
            <div className="padre">
                <Migas data={subcategorias.nombre} />
                <Labelsubcategory />
                <h1>hola</h1>
                {
                    <p>{`Viene desde categoría ${subcategorias.id} y ${subcategorias.nombre}`}</p>
                }
            </div>
            <Footer />
        </Fragment>
    );
};

export default Subcategorias;
