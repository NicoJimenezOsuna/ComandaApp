import React, {useEffect, useState} from "react";
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import {connect} from 'react-redux';


const Mailmodal = ({verMailmodal, vermail, restauranteData}) => {
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
            overflow: "scroll",
            display: "flex",
            flexWrap: "wrap",
            padding: '1em 2em 2em 2em'
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
            // backgroundColor: `rgb(0, 255, 0, 0.5)`,
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`,
            textDecoration: 'none',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        },
        botonno: {
            // backgroundColor: `rgb(255, 0, 0, 0.5)`,
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)',
            marginTop: `15px`,
            textDecoration: 'none',
            color: 'black',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        },
        botonnoHover: {
            color: 'black'
        }
    };

    const [mostrarmail, getMostrarmail] = useState(false);

    useEffect(() => {
        getMostrarmail(verMailmodal);
    }, [verMailmodal]);
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
                        a {restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : "este establecimiento"}?</p>
                </div>
                <div style={aller.cont_data}>
                    <a style={aller.botonsi}
                       href={`mailto:${restauranteData.length > 0 ? restauranteData[0].email : null}`}>Si!</a>
                    <a href="#!"
                       onClick={vermail}
                       style={aller.botonno}
                    >
                        No!
                    </a>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Mailmodal);
