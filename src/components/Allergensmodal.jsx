import React, { useEffect, useState } from "react";
import { ReactComponent as IconClose } from "../icons/times-circle-regular.svg";
/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';
import { allergens } from "../data/data.js";
import {connect} from "react-redux";
import axios from "axios";
import {urlImage} from "../utils/utils";
import Spinnercircle from "./Spinnercircle";

const Allergensmodal = ({
                            dataVisible,
                            visible,
                            token,
                            id,
                        }) => {
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
            padding: "0px 10px 10px 10px",
            overflow: "scroll"
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
            flex: 1
        },
        h1 : {
            padding: '10px 0 10px 20px',
            fontSize: `1.4rem`,
        },
        cabecera: {
            display: "flex",
            justifyContent:"space-between",
            alignItems: 'flex-start',
            position: 'sticky',
            top: 0,
            paddingTop: '10px',
            backgroundColor: 'white'
        },
    };

    const [allergensState, getAllergens] = useState([]);

    useEffect( () => {
    //clean call is not mounted
    let isSubscribed = true

    const allergensRequest = async (protocol, url, pathAPI, token, id, header) => {
        try {
            // Make a request //restaurante.comandapp.es/api/ws/4/
            const response = await axios.get(`${protocol}${url}${pathAPI}4/${token}/${id}`, header);

            if (isSubscribed) {
                getAllergens(response.data.data.respuesta);
            }

        } catch (error) {
            console.log("error", error)
        }
    }
    //REQUEST
    allergensRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API, token, id, USER_HEADERS)

    //clean function: no update state if is unmount component
    return () => isSubscribed = false

}, [token, id])

if (!Object.keys(allergens).length > 0) {
    return (
        <Spinnercircle/>
    )
}

    return (
        <div
            className={dataVisible ? "displayed" : "displayed_none"}
            style={aller.princ}
        >
            <div style={aller.second}>
                <div style={aller.cabecera}>
                <IconClose
                    className="close"
                    onClick={visible} />
                <h1 style={aller.h1}>
                    Estos son los alergenos <br />
                    que utiliza este establecimiento.
                </h1>
                </div>
                <div style={aller.cont_data}>
                    {allergensState.map(item => {
                        return (
                            <div
                                style={aller.cont_aller}
                                key={item.nombrealergeno + item.id}
                            >
                                <img
                                    src={urlImage() + item.imagen}
                                    alt={`Alérgeno ${item.nombrealergeno}`}
                                />
                                <p>{item.nombrealergeno}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Allergensmodal);