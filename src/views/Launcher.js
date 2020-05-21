import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
/*
 * IMPORT COMPONENTS
 */
import Spinner from "../components/Spinner";
import Socialpymes from "../components/Socialpymes";
import Launch from "../components/Launch";

const Launcher = () => {
    const launcher = {
        ComandApp: {
            position: "absolute",
            left: `153px`,
            top: `466px`,
            overflow: "visible",
            width: `415px`,
            whiteSpace: "nowrap",
            textAlign: "left",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: `70px`,
            color: "rgba(112,112,112,1)"
        },
        Tu_carta_digital: {
            position: "absolute",
            left: `368px`,
            top: `577px`,
            overflow: "visible",
            width: `200px`,
            whiteSpace: "nowrap",
            textAlign: "left",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: `30px`,
            color: "rgba(112,112,112,1)"
        }
    };

    let protocol = "http://";
    let url = "restaurante.comandaapp.es/api/ws/0/";
    let token = "cLZDdvFTJcl5cWG";


    const [datos, getDatos] = useState({});

    useEffect(() => {
        
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };
        
        const firstRequest = async (protocol, url, token) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${token}`, userHeader);
                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);
                //to Localstorage
                localStorage.setItem(
                    "comandaApp",
                    JSON.stringify(response.data)
                );
                //to State
                await getDatos(toObject.data.respuesta);
            } catch (error) {
                console.log("error", error);
            }
        };
        
        firstRequest(protocol, url, token)
        
    }, [protocol, url, token]);

    return (
        <Fragment>
            {Object.keys(datos).length <=0 && !localStorage.getItem("comandaApp") ? (
                <div id="Pantalla_de_carga">
                    <div id="Grupo_2">
                        <img
                            src="./assets/img/logo.svg"
                            alt="imagen de presentación"
                        />
                    </div>
                    <div style={launcher.ComandApp}>
                        <span>ComandApp</span>
                    </div>
                    <div style={launcher.Tu_carta_digital}>
                        <span>Tu carta digital</span>
                    </div>
                    <Spinner />
                    <Socialpymes />
                </div>
            ) : (
                <Launch />
            )}
        </Fragment>
    );
};

export default Launcher;
