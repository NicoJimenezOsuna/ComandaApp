import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import Spinner from './Spinner';
import {iframeSrcData} from '../utils/utils';

const Mapamodal = ({verMapamodal, vermapa, datosrestaurante}) => {
    const aller = {
        princ: {
            width: "100%",
            height: "100%",
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
            flexWrap: "wrap",
            flex: 1,
            minHeight: '50vh'
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
            justifyContent: "space-between",
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
            height: '50px',
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`
        }
    };

    const [mostrarmapa, getMostrarmapa] = useState(false);
    const [datosRestaurante, getDatosRestaurante] = useState({})

    useEffect(() => {
        getMostrarmapa(verMapamodal);
        getDatosRestaurante(datosrestaurante)
    }, [verMapamodal, datosrestaurante]);

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
                    <p style={aller.h1}>¿Quieres ir al
                        local {datosRestaurante ? datosRestaurante.nombre_restaurante : 'referenciado'}?</p>
                </div>
                <div style={aller.cont_data}>
                    <iframe
                        title="localización-restaurante"
                        style={aller.iframe}
                        src={datosRestaurante ? iframeSrcData(datosRestaurante.localizacion) : <Spinner/>}
                        // zoom="21"
                        allowFullScreen=""
                        aria-hidden="false" tabIndex="0"/>
                    <div style={aller.texto}>

                        {/*intentar utilizar botón mapa , si no, indicar uasar ampliar mapa de google*/}
                        <a style={aller.botonir} href="#!">Llévame!</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mapamodal;
