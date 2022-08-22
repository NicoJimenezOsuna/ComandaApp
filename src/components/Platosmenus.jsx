import React, {Fragment, useEffect, useState} from 'react';
import {urlComplete} from "../utils/utils";
import Buttoninfo from "./Buttoninfo";
import axios from "axios";
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';
import Spinnercircle from "./Spinnercircle";
import {connect} from "react-redux";

const Platosmenus = ({
                         catid,
                         seccid,
                         dataSliderHandler,
                         token,
                         data,
                         getValue,
                         labelsLength,
                         restauranteData
                     }) => {
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

        // http://restaurante.comandaapp.es/api/ws/2/cLZDdvFTJcl5cWG/seccID/platoID
        const menusRequest = async (protocol, url, pathAPI, token, seccid, id, header) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${pathAPI}2/${token}/${seccid}/${id}`, header);
                if (isSubscribed) {
                    getPlatos(urlComplete(response.data.data.respuesta));
                }
            } catch (error) {
                console.log("error", error);
            }
        }
        //REQUEST
        menusRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API,token, seccid, catid, USER_HEADERS)

        //clean function: no update state if is unmount component
        return () => isSubscribed = false

    }, [token, catid, seccid]);

    return (
        <Fragment>
            <Fragment>
                {platos.length > 0
                    ? platos.map((item, index) => {
                        return (
                            <Fragment key={item.nombreplato}>
                                <div style={listaplatos.cont_princ} key={item.nombreplato}>
                                    <div style={listaplatos.cont_name}>
                                        <p>{item.nombreplato}</p>
                                    </div>
                                    {restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                                        <Fragment>
                                            {console.log('id de platos', item.plato_id)}
                                            <div className="wrapper">
                                                <input style={{display: 'none'}}
                                                       type="radio"
                                                       name={data}
                                                       id={item.nombreplato + '_' + data}
                                                       value={item.nombreplato + '?' + item.plato_id}
                                                       onChange={(e) => getValue(e, labelsLength)}
                                                       key={item.nombreplato}
                                                       className="state"
                                                />
                                                <label className="label" htmlFor={item.nombreplato + '_' + data}>
                                                    <div className="indicator"></div>
                                                    {/*<span className="text">a) close</span>*/}
                                                </label>
                                            </div>

                                            <div style={listaplatos.cont_button}>
                                                <Buttoninfo
                                                    dataSliderHandler={dataSliderHandler}
                                                    dataListaFull={platos}
                                                    dataIdSelf={platos.indexOf(item)}
                                                    noprice={false}
                                                />
                                            </div>
                                        </Fragment>
                                        :
                                        null
                                    }
                                </div>
                                {index < (platos.length - 1) ?
                                    <hr style={{
                                        width: '80%',
                                        border: '1px solid #d3d3d3',
                                        margin: '0px auto'
                                    }}/>
                                    :
                                    null}
                            </Fragment>
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
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Platosmenus);