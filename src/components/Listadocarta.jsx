import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Buttoninfo from "./Buttoninfo";
/*
 * IMPORT SUPPORT FUNCIONS
 */
import {dosDecim, urlComplete, protocol} from "../utils/utils";
import {CONNECT_TOKEN} from '../data/restaurante';
import {fakeData1, fakeData2} from "../data/data";

const Listadocarta = ({dataid, dataSliderHandler}) => {
    const listmenu = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px"
        },
        cont_item: {
            width: "100%"
        },
        cont_name: {
            width: "60%",
            textAlign: "left"
        },
        cont_price: {
            width: "20%",
            textAlign: "center"
        },
        cont_button: {
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        font: {
            fontFamily: "Papyrus"
        }
    };

    let protocol = "http://";
    let url = "restaurante.comandapp.es/api/ws/2/";
    // let token = "cLzDdvFTJcl5cWg";
    //    http://restaurante.comandaapp.es/api/ws/1/cLzDdvFTJcl5cWg/6
    // imagenes
    // http://restaurante.comandaapp.es/storage/rest1/ensaladas-300.png

    const [products, getProducts] = useState({});

    useEffect(() => {
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };

        const catIdtRequest = async (protocol, url, token, dataid) => {
            try {
                // Make a request
                const response = await axios.get(
                    `${protocol}${url}${token}/1/${dataid}`,
                    userHeader
                );

                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);

                // if (!toObject.data.respuesta > 0) {
                //     getProducts(fakeData2.data.respuesta)
                // } else {
                    await getProducts(urlComplete(toObject.data.respuesta));
                    // urlComplete(toObject.data.respuesta)
                    // console.log(urlComplete(toObject.data.respuesta))
                // }

            } catch (error) {
                // getProducts(fakeData2.data.respuesta)
                console.log("error", error);
            }
        };

        //to State
        catIdtRequest(protocol, url, CONNECT_TOKEN, dataid);
        console.log('request listadocarta')
    }, [dataid, protocol, url]);

    return (
        <Fragment>
            {products.length > 0
                ? products.map(item => {
                    return (
                        <div style={listmenu.cont_princ} key={item.nombreplato}>
                            <div style={listmenu.cont_name}>
                                <p>{item.nombreplato}</p>
                            </div>
                            <div style={listmenu.cont_price}>
                                <p>
                                    {dosDecim(item.precio, 2)}{" "}
                                    <span style={listmenu.font}>€</span>
                                </p>
                            </div>
                            <div style={listmenu.cont_button}>
                                <Buttoninfo
                                    dataSliderHandler={dataSliderHandler}
                                    dataListaFull={products}
                                    dataIdSelf={products.indexOf(item)}
                                    noprice = {true}
                                />
                            </div>
                        </div>
                    );
                })
                : "null"}
            {/*    Aqui se mete los spiners de carga    */}
        </Fragment>
    );
};
export default Listadocarta;
