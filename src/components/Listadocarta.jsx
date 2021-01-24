import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Buttoninfo from "./Buttoninfo";
import Spinnercircle from '../components/Spinnercircle';
import {dosDecim, urlComplete} from "../utils/utils";
import {connect} from "react-redux";
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';

const Listadocarta = ({
                          dataid,
                          dataSliderHandler,
                          token,
                          restauranteData,
                          productsCarta
                      }) => {
    const listmenu = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px",
            fontFamily: "Dosis"
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

    const [products, getProducts] = useState({});

    useEffect(() => {
        //    http://restaurante.comandapp.es/api/ws/2/token/platoID/cartaID
        const subcatCartatRequest = async (protocol, url, pathAPI, token, dataid, idcarta, header) => {
            try {
                // Make a request
                const response = await axios.get(
                    `${protocol}${url}${pathAPI}2/${token}/${idcarta}/${dataid}`,
                    header
                )
                //Incorporamos una key a la lista de productos con el id de la carta
                const toObjectWithIdOfCarta = response.data.data.respuesta.map(item => {
                    item.carta_id = idcarta;
                    return item;
                })
                await getProducts(urlComplete(toObjectWithIdOfCarta));

            } catch (error) {
                console.log("error", error);
            }
        };

        //to State
        subcatCartatRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API, token, dataid.id, dataid.idcarta, USER_HEADERS);

    }, [token, dataid]);

    if (!Object.keys(products).length > 0) {
        return (
            <Spinnercircle/>
        )
    }
    const MiniatureOrder = (item) => {

        const element = productsCarta.filter(itempedido => itempedido.plato_id === item && itempedido.cant > 0)

        if (element.length > 0) {
            return element[0].cant
        }
    }
    return (
        <Fragment>
            {products.length > 0
                ? products.map((item, index) => {
                    let number = MiniatureOrder(item.plato_id)
                    return (
                        <Fragment key={index}>
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
                                {restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                                    <div style={listmenu.cont_button}>
                                        <Buttoninfo
                                            dataSliderHandler={dataSliderHandler}
                                            dataListaFull={products}
                                            dataIdSelf={products.indexOf(item)}
                                            //wordkey for display prices and buttons plus and substract in caroussel
                                            wordkey={'carta'}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div style={{width: '100%'}}>
                                {number > 0 ?
                                    <p style={{paddingLeft: '20px', color: 'green'}}>
                                        {number === 1 ?
                                            number + '  unidad'
                                            :
                                            number + '  unidades'
                                        }
                                    </p>
                                    :
                                    null
                                }
                                {index < (products.length - 1) ?
                                    <hr style={{
                                        width: '80%',
                                        border: '1px solid #d3d3d3',
                                        margin: '0px auto'
                                    }}/>
                                    :
                                    null}
                            </div>
                        </Fragment>
                    );
                })
                :
                <Spinnercircle/>
            }
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        productsCarta: state.PedidosCarta.pedidoCarta,
    }
}

export default connect(mapStateToProps)(Listadocarta);
