import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import {globalinfo} from "../data/data"

const Mapamodal = ({verMapamodal, vermapa}) => {
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
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        },
        cont_aller: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            width: "calc(100%  - 75%)"
        },
        h1: {
            padding: '0 0 10px 20px',
            fontSize: `1.3rem`,
            fontWeight: "bold"
        },
        iframe: {
            flexWrap: "wrap",
            width: `100%`,
            height: `70%`,
            frameBorder: "0",
            border: "0",
            borderRadius: `20px`
        },
        cabecera: {
            display: "flex",
            justifyContent:"space-between",
            alignItems: 'flex-start'
        },
        texto: {
            width: `100%`,
            fontSize: "1.2rem",
            textAlign: "center",
            flexWrap: "wrap"
        },
        botonir: {
            width: 'auto',
            height:  '50px',
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`
        }
    };

    // const [vermapaState, getVermapa] = useState();
    const [mostrarmapa, getMostrarmapa] = useState(false);
    const iframe = globalinfo.localizacionmaps;

// console.log(mostrarmapa)

    useEffect(() => {
        // getVermapa(globalinfo);
        getMostrarmapa(verMapamodal);
    }, [verMapamodal]);
    // console.log(globalinfo)
    

    return (
        <div
            className={mostrarmapa ? "displayed" : "displayed_none"}
            style={aller.princ}
        >
            <div style={aller.second}>
                <div style={aller.cabecera}>
                    <IconClose
                        className="close"
                        onClick={vermapa}/>
                    {/*<h1 style={aller.h1}>*/}
                    {/*    Esta es la localización GPS de {globalinfo.name ? globalinfo.name : "este establecimiento"}.*/}
                    {/*</h1>*/}
                    <p style={aller.h1}>¿Quieres ir al local {globalinfo.name}?</p>
                </div>

                {/*{iframe}*/}
                <div style={aller.cont_data}>
                    <iframe
                        style={aller.iframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.47340645303!2d-0.5015954687885393!3d39.40770125212401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1590518444632!5m2!1ses!2ses"
                        // zoom="21"
                        allowFullScreen=""
                        aria-hidden="false" tabIndex="0"></iframe>
                    <div style={aller.texto}>

                        <a style={aller.botonir} href={globalinfo.localizacionmaps}>Llévame!</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mapamodal;
