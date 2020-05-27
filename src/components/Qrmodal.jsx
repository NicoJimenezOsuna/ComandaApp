import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import {codigoqrimg} from "../data/data.js";

const Qrmodal = ({codigoqr, verqr}) => {
    const style = {
        princ: {
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
        second: {
            position: "relative",
            width: "90%",
            maxHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        },
        cont_data: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        },
        cont_qr: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        h1: {
            padding: '10px 0 10px 20px',
            fontSize: `1.3rem`
        }
    };

    const [codigoqrState, getCodigoqr] = useState({});
    const [mostrarqr, getMostrarqr] = useState(false);


    useEffect(() => {
        getCodigoqr(codigoqrimg);
        getMostrarqr(verqr);
    }, [verqr, codigoqrimg]);

    // console.log(qrState)

    return (
        <div
            className={verqr ? "displayed" : "displayed_none"}
            style={style.princ}
        >
            <div style={style.second}>
                <IconClose
                    className="close"
                    onClick={codigoqr}/>
                <h1 style={style.h1}>
                    Este es el código Qr <br/>
                    del establecimientos que utiliza este establecimiento.
                </h1>
                <div style={style.cont_data}>
                    <img src={codigoqrState.imageUrl} alt="Qr restaurante"/>
                </div>
            </div>
        </div>
    )


};

export default Qrmodal;
