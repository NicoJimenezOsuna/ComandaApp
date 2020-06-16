import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconFlecha} from "../icons/flecha.svg";

const Migas = ({data, visible}) => {
    const mig = {
        Grupo_364: {
            // width: "100%",
            // left: "497px",
            // top: "169px",
            display: "flex",
            // flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px",
            fontSize: "17px",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
        },
        around: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            fontSize: "17px"
        }
    };

    const [migas, getMigas] = useState("uno");

    useEffect(() => {
        if (migas !== data) {
            getMigas(data);
        }
    }, [migas, data]);

    return (
        <div style={mig.Grupo_364}>
            {/*<div style={mig.around}>*/}
            <IconFlecha style={{width: '7%', marginRight: '.2em'}}/>
            <Link to="/categoria" style={{display: 'flex', alignItems: 'center'}} className="migas_a">

                Categorías

                {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
                <p style={{padding: " 0 10px"}}>>></p>
                <p>{migas}</p>
            </Link>
            {/*</div>*/}
            {/*</div>*/}
            {/*<span*/}
            {/*  onClick={visible}*/}
            {/*  style={{*/}
            {/*    border: "2px solid black",*/}
            {/*    borderRadius: "50px",*/}
            {/*    padding: "20px",*/}
            {/*    cursor: "pointer",*/}
            {/*    background: "rgba(156, 255, 242, 0.68)"*/}
            {/*  }}*/}
            {/*>*/}
            {/*  ALERGENOS*/}
            {/*</span>*/}
        </div>
    );
};

export default Migas;
