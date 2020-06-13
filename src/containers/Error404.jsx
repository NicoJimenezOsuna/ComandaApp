import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LogoComanda} from "../icons/logo.svg";

const Error404 = () => {
    const styles = {
        cont_logo_comanda: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        cont_comanda_social: {
            width: '100%',
            textAlign: 'right',
            position: 'absolute'
        },
        grupo_12: {
            width: `45px`,
            height: `45px`
        },
        img_tipo: {
            position: "absolute",
            width: `7em`,
            left: `0px`,
            top: `20px`,
            overflow: "visible"
        },
        cont: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignitems: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden'

        },
        centerEnd: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        relativo: {
            position: 'relative',
            marginLeft: '.5em'
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        top: {
            alignSelf: 'start'
        },
        h1: {
            fontFamily: "Fontdiner Swanky",
            fontSize: '2rem'
        },
        h3: {
            fontWeight: '500',
        },
        enlace : {
            color: '#1EA098',
            marginTop: '2rem',
            fontSize: '1.3em'
        }
    }

    return (
        <div className="subRoot">
            <div style={styles.cont}>
                <div style={styles.cont_comanda_social}>
                    <div style={styles.cont_logo_comanda}>
                        <LogoComanda
                            style={styles.grupo_12}
                            alt="Logo de comandaApp"
                        />
                        <div style={styles.relativo}>
                            <div id="powered_by">
                                <span>powered by</span>
                            </div>
                            <img
                                style={styles.img_tipo}
                                src="./assets/img/socialPymes_Imagotipo.png"
                                alt="Logo de socialpymes"
                            />
                        </div>
                    </div>
                </div>
                <div style={styles.centerEnd}>
                    <img src="./assets/img/dog_error.png" alt=""/>
                </div>
                <div style={styles.column}>
                    <div style={styles.top}>
                        <h1 style={styles.h1}>OOOOPSS!...</h1>
                        <h3 style={styles.h3}>
                            Este no es el servicio que buscas...
                        </h3>
                    </div>
                    <Link style={styles.enlace} to="/">Tengo hambre. ¡Sácame de aquí!</Link>
                </div>
            </div>
        </div>
    )
}
export default Error404;