import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
/*
 * IMPORT COMPONENTS
 */
import Spinner from "../components/Spinner";
import Socialpymes from "../components/Socialpymes";
import Launch from "../components/Launch";
import {CONNECT_TOKEN} from '../data/restaurante';
import {protocol} from '../utils/utils'

import {fakeData1} from '../data/data';

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

    const [datos, getDatos] = useState({});

    useEffect(() => {
        // http://restaurante.comandaapp.es/api/ws/0/cLZDdvFTJcl5cWG
        let url = "//restaurante.comandaapp.es/api/ws/0/";
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
                // if (!toObject.data.respuesta > 0) {
                //     localStorage.setItem(
                //         "comandaApp",
                //         JSON.stringify(fakeData1)
                //     );
                //     getDatos(fakeData1.data.respuesta)
                // } else {
                    await getDatos(toObject);
                // }

            } catch (error) {
                // localStorage.setItem(
                //     "comandaApp",
                //     JSON.stringify(fakeData1)
                // );
                // getDatos(fakeData1.data.respuesta)
                console.log("error", error);
            }
        };
        //call to API
        firstRequest(protocol, url, CONNECT_TOKEN)

    }, []);

    return (
        <Fragment>
            {Object.keys(datos).length <= 0 && !localStorage.getItem("comandaApp") ? (
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
                    <Spinner/>
                    <Socialpymes/>
                </div>
            ) : (
                <Launch/>
            )}
        </Fragment>
    );
};

export default Launcher;
