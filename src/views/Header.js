import React, { Fragment, useEffect, useState } from "react";

const Header = () => {
    const header = {
        grupo_17: {
            overflow: "visible",
            position: "absolute",
            width: `720px`,
            height: `2px`,
            left: `0px`,
            top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)"
        },
        grupo_13: {
            position: "absolute",
            width: `85px`,
            height: `85px`,
            left: `28px`,
            top: `0px`,
            overflow: "visible"
        },
        grupo_12: {
            position: "absolute",
            width: `85px`,
            height: `85px`,
            left: `0px`,
            top: `0px`,
            overflow: "visible"
        },
        img_tipo: {
            position: "absolute",
            width: `150px`,
            height: `26.339px`,
            left: `0px`,
            top: `20px`,
            overflow: "visible"
        },
        grupo_14: {
            position: "absolute",
            height: `27.065px`,
            right: `15px`,
            top: `28.5px`,
            overflow: "visible"
        },
        restaurante: {
            // backgroundColor:'red'
            fontSize: `3em`
        }
    };

    const [restaurante, getRestaurante] = useState("Restaurante");
    let datosde = ''
    useEffect(() => {
        //        sustituir imagenes rotas
        setTimeout(function() {
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

        datosde = JSON.parse(localStorage.getItem("comandaApp")).data.codigo
        getRestaurante(
            JSON.parse(datosde)
        );
    }, [restaurante, datosde]);

    return (
        <Fragment>
            <div
                id="Grupo_17"
                style={{ borderBottom: "2px solid rgba(112,112,112,1)" }}
            >
                <div style={header.grupo_13}>
                    <img
                        style={header.grupo_12}
                        src="./assets/img/logo.svg"
                        alt="Logo de comandaApp"
                    />
                </div>
                <div id="Grupo_9">
                    <div id="powered_by">
                        <span>powered by</span>
                    </div>
                    <img
                        style={header.img_tipo}
                        src="./assets/img/socialPymes_Imagotipo.png"
                        alt="Logo de socialpymes"
                    />
                </div>
                <div style={header.grupo_14}>
                    <span style={header.restaurante}>{isNaN(restaurante) ? restaurante : 'Mi restaurante'}</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
