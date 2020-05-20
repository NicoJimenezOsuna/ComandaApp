import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
/*
 * IMPORT COMPONENTS
 */
import Spinner from "../components/Spinner";
import Socialpymes from "../components/Socialpymes";
import Launch from "../components/Launch";

//fake data
// const datas = {
//     "app": {
//         "nombre_restaurante": "Mi restaurante"
//     },
//     "categorias": [
//         {
//             "id": 1,
//             "nombre": "arroces",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 2,
//             "nombre": "carnes",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 3,
//             "nombre": "pescados",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 4,
//             "nombre": "ensaladas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 5,
//             "nombre": "bebidas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 6,
//             "nombre": "postres",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         }
//     ],
//     "menu 2": [
//         {
//             "id": 1,
//             "nombre": "paella",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 2,
//             "nombre": "osubuco",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 3,
//             "nombre": "rabiolis",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 4,
//             "nombre": "lentejas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 5,
//             "nombre": "pizza",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 6,
//             "nombre": "pescado",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         }
//     ]
// }

//const datas = {
//    "data": {
//        "codigo": 'Mi restaurante',
//        "mensaje": "OK",
//        "respuesta": [
//            {
//                "orden": 1,
//                "categoria_id": 6,
//                "categoria": "Tapas",
//                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//            },
//            {
//                "orden": 4,
//                "categoria_id": 2,
//                "categoria": "Entremeses",
//                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//            },
//            {
//                "orden": 3,
//                "categoria_id": 1,
//                "categoria": "Carnes",
//                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//            },
//            {
//                "orden": 2,
//                "categoria_id": 5,
//                "categoria": "Pescados",
//                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//            }
//        ]
//    }
//}

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
