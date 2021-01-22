import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import Spinner from './Spinner';
import {iframeSrcData} from '../utils/utils';
import {connect} from 'react-redux';

const Mapamodal = ({verMapamodal, vermapa, restauranteData}) => {
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
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            marginTop: `15px`
        }
    };

    const [mostrarmapa, getMostrarmapa] = useState(false);

    useEffect(() => {
        getMostrarmapa(verMapamodal);
    }, [verMapamodal]);

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
                        local {restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : 'referenciado'}?</p>
                </div>
                <div style={aller.cont_data}>
                    <iframe
                        title="localización-restaurante"
                        style={aller.iframe}
                        src={restauranteData.length > 0 ? iframeSrcData(restauranteData[0].localizacion) : <Spinner/>}
                        // zoom="21"
                        allowFullScreen=""
                        aria-hidden="false" tabIndex="0"/>
                    <div style={aller.texto}>
                        <p style={aller.botonir} >Pulsa <span style={{color: '#3c7186'}}>"Ampliar el mapa"</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state){
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Mapamodal);
