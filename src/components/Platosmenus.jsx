import React, {Fragment, useEffect, useState} from 'react';
import {protocol, urlComplete} from "../utils/utils";
import Buttoninfo from "./Buttoninfo";
import axios from "axios";
import {CONNECT_TOKEN} from "../data/restaurante";
import Spinnercircle from "./Spinnercircle";
import {connect} from "react-redux";

const Platosmenus = ({catid, seccid, dataSliderHandler, token, data, getValue, getMenu}) => {
    const listaplatos = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px",
            fontFamily: 'Dosis'
        },
        cont_item: {
            width: "100%"
        },
        cont_name: {
            width: "55%",
            textAlign: "left"
        },
        cont_price: {
            width: "25%",
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

    const [platos, getPlatos] = useState([]);


    useEffect(() => {
            //clean call is not mounted
            let isSubscribed = true

            // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/5
            let url = "//restaurante.comandapp.es/api/ws/2/";
            const userHeader = {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                }
            };

            const menusRequest = async (protocol, url, token, seccid, id) => {

                try {
                    // Make a request
                    const response = await axios.get(`${protocol}${url}${token}/${seccid}/${id}`, userHeader);
                    const toString = JSON.stringify(response.data);
                    const toObject = JSON.parse(toString);
                    //to Localstorage
                    // localStorage.setItem(
                    //     "comandaApp",
                    //     JSON.stringify(response.data)
                    // );
                    //to State
                    // if (!toObject.data.respuesta > 0) {
                    //     localStorage.setItem(
                    //         "comandaApp",
                    //         JSON.stringify(fakeData1)
                    //     );
                    //     getDatos(fakeData1.data.respuesta)
                    // } else {
                    if (isSubscribed) {
                        getPlatos(urlComplete(toObject.data.respuesta));
                    }
                    // }

                } catch (error) {
                    // localStorage.setItem(
                    //     "comandaApp",
                    //     JSON.stringify(fakeData1)
                    // );
                    // getSectionsMenu(fakeData1.data.respuesta)
                    console.log("error", error);
                }
            }
            //REQUEST
            menusRequest(protocol, url, token, seccid, catid)

            //clean function: no update state if is unmount component
            return () => isSubscribed = false

        }, [token, catid, seccid]);

    return (
        <Fragment>
            <Fragment>
                {platos.length > 0
                    ? platos.map(item => {
                        return (
                            <div style={listaplatos.cont_princ} key={item.nombreplato}>
                                <div style={listaplatos.cont_name}>
                                    <p>{item.nombreplato}</p>
                                </div>
                                {/*<div style={listaplatos.cont_price}>*/}
                                {/*    <p>*/}
                                {/*        {dosDecim(item.precio, 2)}{" "}*/}
                                {/*        <span style={listaplatos.font}>€</span>*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                                <div>
                                    <input
                                        type="radio"
                                        name={data}
                                        id={item.nombreplato}
                                        value={item.nombreplato}
                                        onChange={(e)=>getValue(e)}
                                    />
                                </div>
                                <div style={listaplatos.cont_button}>
                                    <Buttoninfo
                                        dataSliderHandler={dataSliderHandler}
                                        dataListaFull={platos}
                                        dataIdSelf={platos.indexOf(item)}
                                        noprice={false}
                                    />
                                </div>
                            </div>
                        );
                    })
                    :
                    <Spinnercircle/>
                }
                {/*    Aqui se mete los spiners de carga    */}
            </Fragment>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Platosmenus);