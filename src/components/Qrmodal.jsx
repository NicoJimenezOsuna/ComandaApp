import React from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import {connect} from 'react-redux';
import {urlImage} from '../utils/utils'

const Qrmodal = ({codigoqr, verqr, restauranteData}) => {
    const style = {
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
            justifyContent: "center",
            flexWrap: "wrap",
            width: `100%`
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
        },
        qr: {
            maxWidth: `100%`,
            maxHeight: '250px'
        },
        cabecera: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'flex-start'
        },
    };

    return (
        <div className={verqr ? "displayed" : "displayed_none"}
             style={style.princ}>
            <div style={style.second}>
                <div style={style.cabecera}>
                    <IconClose
                        className="close"
                        onClick={codigoqr}/>
                    <h1 style={style.h1}>
                        Este es el código Qr <br/>
                        que utiliza este establecimiento. ¡Compártelo!
                    </h1>
                </div>
                <div style={style.cont_data}>
                    <img style={style.qr}
                         src={restauranteData.length > 0 ? (urlImage() + restauranteData[0].codigoqr) : null}
                         alt="Qr restaurante"/>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Qrmodal);
