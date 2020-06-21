import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {protocol, urlImage} from "../utils/utils";
import {connect} from 'react-redux';
import Spinnercircle from "./Spinnercircle";

const Subcarta = ({changedView, restauranteData, token, sendCategory, styles}) => {

const cat = styles;
    const [idcarta, getIdcarta] = useState(null)
    const [carta, getCarta] = useState([])

    useEffect(() => {
        let isSubscribed = true

        getIdcarta(JSON.parse(localStorage.getItem('categorySelected')).idcarta)


        // http://restaurante.comandapp.es/api/ws/1/cLZDdvFTJcl5cWG/1
        // http://restaurante.comandapp.es/api/ws/1/4xpD2gLLNSSdrRZ/1
        let url = "//restaurante.comandapp.es/api/ws/1/";
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };

        const firstRequest = async (protocol, url, token, dataid) => {
            try {
                // console.log('CategoriaRequest', `${protocol}${url}${token}/${dataid}`)
                // Make a request
                const response = await axios.get(`${protocol}${url}${token}/${dataid}`, userHeader);
                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);
                //to Localstorage
                // localStorage.setItem(
                //     "comandaAppCarta",
                //     JSON.stringify(response.data)
                // );
                //to State
                // if (!toObject.data.respuesta > 0) {
                //     localStorage.setItem(
                //         "comandaAppCarta",
                //         JSON.stringify(fakeData1)
                //     );
                //     getCarta(fakeData1.data.respuesta)
                // } else {
                if (isSubscribed) {

                    await getCarta(toObject.data.respuesta);
                }
                // }

            } catch (error) {
                // localStorage.setItem(
                //     "comandaAppCarta",
                //     JSON.stringify(fakeData1)
                // );
                // getCarta(fakeData1.data.respuesta)
                console.log("error", error);
            }
        };
        //call to API
        // if (idcarta !== null) {
        //     firstRequest(protocol, url, token, idcarta)
        //     getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
        // }
        firstRequest(protocol, url, token, idcarta)
        // getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));

        //clean function: no update state if is unmount component
        return () => isSubscribed = false

    }, [idcarta, token, restauranteData])
// console.log('carta nueva', carta)

    return (
        <Fragment>
            {/*<h1 onClick={changedView}*/}
            {/*>Atras</h1>*/}
            {Object.keys(carta).length > 0 ?
                carta.map(item => {
                 return    <div
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
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Subcarta);