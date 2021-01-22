import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {urlImage} from "../utils/utils";
import {connect} from 'react-redux';
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';
import Spinnercircle from "./Spinnercircle";
import {addNewStateSubcarta} from "../redux/actions";

const Subcarta = ({restauranteData, token, sendCategory, styles, dataProductSel}) => {

    const cat = styles;
    const [idcarta, getIdcarta] = useState(null)
    const [carta, getCarta] = useState([])

    useEffect(() => {
        let isSubscribed = true
        //UPDATE STATE OF SUBCARTA FOR RENDER SUBCARTA COMPONENT
        addNewStateSubcarta(true)
        getIdcarta(dataProductSel.idcarta)

        // http://restaurante.comandapp.es/api/ws/1/4xpD2gLLNSSdrRZ/1
        const firstRequest = async (protocol, url, pathAPI, token, dataid, header) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${pathAPI}1/${token}/${dataid}`, header);
                if (isSubscribed) {
                    await getCarta(response.data.data.respuesta);
                }
            } catch (error) {
                console.log("error", error);
            }
        };
        firstRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API, token, idcarta, USER_HEADERS)

        //clean function: no update state if is unmount component
        return () => isSubscribed = false

    }, [HTTP_PROTOCOL, URL_MAIN, PATH_API, idcarta, token, restauranteData])

    return (
        <Fragment>
            {Object.keys(carta).length > 0 ?
                carta.map(item => {
                    return <div
                        className="cont_childs"
                        onClick={() => sendCategory(item.categoria_id, item.categoria, null, 'carta', idcarta, null)}
                        id={item.categoria}
                        style={cat.cat_cont}
                        key={item.categoria + item.categoria_id}
                    >
                        <div className="absolut"></div>
                        {item.imagen === undefined ?
                            <Fragment>
                                <img style={cat.plato_img}
                                     src="assets/img/menu.jpg"
                                     alt={`Imagen de categoría ${item.categoria}`}/>
                                <p style={cat.nom_cat}>
                                    {item.nombrecarta}
                                </p>
                            </Fragment>
                            :
                            <Fragment>
                                <img style={cat.plato_img}
                                     src={urlImage() + item.imagen}
                                     alt={`Imagen de categoría ${item.categoria}`}/>
                                <p className="category_title"
                                   style={cat.nom_cat}>
                                    {item.categoria}
                                </p>
                            </Fragment>
                        }
                    </div>
                })
                :
                <Spinnercircle/>
            }
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        dataProductSel: state.DataProductSelected.dataProductSel
    }
}

export default connect(mapStateToProps)(Subcarta);