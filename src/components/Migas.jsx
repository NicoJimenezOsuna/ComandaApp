import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Migas = ({ data }) => {
    const mig = {
        Grupo_364: {
            width: "100%",
            height: "67px",
            left: "497px",
            top: "169px",
            backgroundColor: "red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px"
        }
    };

    const [migas, getMigas] = useState("uno");

    useEffect(() => {
        if (migas !== data) {
            getMigas(data);
        }
    }, [migas]);

    return (
        <div style={mig.Grupo_364}>
            <div>
                <Link to="/categoria">{migas}</Link>
            </div>
            <span>ALERGENOS</span>
        </div>
    );
};

export default Migas;
