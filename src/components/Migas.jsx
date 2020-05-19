import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Migas = ({ data }) => {
    const mig = {
        Grupo_364: {
            width: "100%",
            left: "497px",
            top: "169px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px"
        },
        around: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontSize: "20px",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            fontSize: "30px"
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
            <div style={mig.around}>
                <Link to="/categoria">Categorías</Link>
                <p style={{ padding: " 0 10px" }}>>></p>
                <p>{migas}</p>
            </div>
            <span
                style={{
                    border: "2px solid black",
                    borderRadius: "50px",
                    padding: "20px"
                }}
            >
                ALERGENOS
            </span>
        </div>
    );
};

export default Migas;
