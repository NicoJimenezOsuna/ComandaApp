import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import {globalinfo} from "../data/data"

const Mailmodal = ({verMailmodal, vermail}) => {
    const aller = {
        princ: {
            width: "100%",
            height: "100%",
            //            maxWidth: '720px',
            //            height: '100%',
            position: "absolute",
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
            overflow: "scroll",
            display: "flex",
            flexWrap: "wrap"
        },
        cont_data: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            width: `100%`
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)",
        },
        texto: {
            padding: '0 0 10px 20px',
            fontSize: `1.3rem`,
            fontWeight: "bold"
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start'
        },
        botonsi: {
            // width: 'auto',
            // height: '50px',
            backgroundColor: `rgb(0,255,0,0.5)`,
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`,
            textDecoration: 'none'
        },
        botonno: {
            // width: 'auto',
            // height: '50px',
            backgroundColor: `rgb(255,0,0,0.5)`,
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`,
            textDecoration: 'none',
            color: 'black'
        },
        botonnoHover: {
            color: 'black'
        }
    };

    // const [vermapaState, getVermapa] = useState();
    const [mostrarmail, getMostrarmail] = useState(false);

// console.log(mostrarmapa)

    useEffect(() => {
        // getVermapa(globalinfo);
        getMostrarmail(verMailmodal);
    }, [verMailmodal]);
    // console.log(globalinfo)

    return (
        <div
            className={mostrarmail ? "displayed" : "displayed_none"}
            style={aller.princ}
        >
            <div style={aller.second}>
                <div style={aller.cabecera}>
                    <IconClose
                        className="close"
                        onClick={vermail}/>
                    <p style={aller.texto}>¿Quieres mandar un correo
                        a {globalinfo.name ? globalinfo.name : "este establecimiento"}?</p>
                </div>
                <div style={aller.cont_data}>
                    <a style={aller.botonsi} href={`mailto:${globalinfo.mail}`}>Si!</a>
                    <a style={aller.botonno}>No!</a>
                </div>
            </div>
        </div>
    );
};

export default Mailmodal;
