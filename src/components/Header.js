import React, {Fragment, useEffect, useState} from "react";
import {ReactComponent as LogoComanda} from "../icons/logo.svg";

const Header = () => {
    const header = {
        grupo_17: {
            overflow: "visible",
            // position: "absolute",
            width: `100%`,
            minHeight: `100px`,
            left: `0px`,
            top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '10px'
        },
        cont_comanda_social: {
            width: '100%',
            textAlign: 'right',
        },
        cont_comanda_social_titulo: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
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
        relativo: {
            position: 'relative',
            marginLeft: '.5em'
        },
        restaurante: {
            // backgroundColor:'red'
            fontSize: `1.3em`,
            fontFamily: 'Papyrus'
        },
        cont_logo_comanda: {
            display: 'flex',
            justifyContent: 'flex-start',
        }
    };

    const [restaurante, getRestaurante] = useState("Restaurante");

    useEffect(() => {
        //        sustituir imagenes rotas
        setTimeout(function () {
            let arrImg = document.getElementsByTagName("img");
            for (let element of arrImg) {
                // element.src = './assets/images/merca_dev.png';
                if (
                    !element.complete ||
                    typeof element.naturalWidth === "undefined" ||
                    element.naturalWidth === 0
                ) {
                    // image was broken, replace with your new image
                    // element.src = './public/assets/images/merca_dev.png';
                    element.src = "./assets/img/categorias/carne_categoria.png";
                }
            }
        }, 1000);
        let nombre_restaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
        if (nombre_restaurante) {
            getRestaurante(nombre_restaurante.nombre_restaurante)
        } else {
            //hacer algo si localstorage está vacío
        }

    }, []);


    return (
        <Fragment>
            <div style={header.grupo_17}>
                <div style={header.cont_comanda_social}>
                    <div style={header.cont_logo_comanda}>
                        <LogoComanda
                            style={header.grupo_12}
                            alt="Logo de comandaApp"
                        />
                        <div style={header.relativo}>
                            <div id="powered_by">
                                <span>powered by</span>
                            </div>
                            <img
                                style={header.img_tipo}
                                src="./assets/img/socialPymes_Imagotipo.png"
                                alt="Logo de socialpymes"
                            />
                        </div>
                    </div>
                </div>
                <div style={header.cont_comanda_social_titulo}>
                    <span style={header.restaurante}>{restaurante}</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
