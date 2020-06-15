import React, {Fragment, useState, useEffect} from 'react';
import Labelsmenus from './Labelsmenus';
import axios from "axios";
import {dosDecim, protocol} from "../utils/utils";
import {CONNECT_TOKEN} from "../data/restaurante";
import Platosmenus from "./Platosmenus";
import Spinner from "./Spinner";
import Commandkeypadmenu from "./comandkeymenu/Commandkeymenu";
import {connect} from 'react-redux';
import Spinnercircle from './Spinnercircle'

const Listadomenu = ({dataid, dataSliderHandler, subcategorias, productMenuSel, restauranteData}) => {
    const listado = {
        between: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#8080802e'
        }
    }

    const [sectionsMenu, getSectionsMenu] = useState([]);
    const [seccid, getSeccid] = useState([]);
    const [fullmenu, getFullMenu] = useState({});

    useEffect(() => {
        //clean call is not mounted
        let isSubscribed = true


        getSeccid(dataid);
        getFullMenu(subcategorias)

        // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/5
        let url = "//restaurante.comandapp.es/api/ws/1/";
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };

        const menusRequest = async (protocol, url, token, id) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${token}/${id}`, userHeader);
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
                    localStorage.setItem('comandaAppmenu', JSON.stringify(toObject.data.respuesta))
                    getSectionsMenu(toObject.data.respuesta);
                }
                // }

            } catch (error) {
                // localStorage.setItem(
                //     "comandaApp",
                //     JSON.stringify(fakeData1)
                // );
                // getSectionsMenu(fakeData1.data.respuesta)
                console.log("error", error)
            }
        }
        //REQUEST
        menusRequest(protocol, url, CONNECT_TOKEN, dataid)

        //clean function: no update state if is unmount component
        return () => isSubscribed = false

    }, [dataid, productMenuSel, subcategorias])

    if (!Object.keys(sectionsMenu).length > 0) {
        return (
            <Spinnercircle/>
        )
    }

    return (
        <Fragment>
            <div style={listado.between}>
                <p>HA PEDIDO: <span style={{fontSize: '1.5em', marginRight: '1em'}}>

                                      {
                                          productMenuSel.map(item => {
                                              if (item.id === seccid) {
                                                  return item.cant
                                              }
                                          })
                                          // productMenuSel.id === seccid ?
                                          //     productmenuselecc.cant
                                          //     :
                                          //     null
                                      }
                                  </span></p>
                <div>
                    <Commandkeypadmenu
                        data={fullmenu}
                        nonprice={false}
                        wordkey={'menu'}
                    />
                </div>
            </div>
            {Object.keys(sectionsMenu).length > 0 ?
                sectionsMenu.map(item => {
                    // {console.log(sectionsMenu)}
                    return (
                        <Fragment key={item.categoria}>
                            <Labelsmenus data={item.categoria}/>
                            <Platosmenus
                                catid={item.categoria_id}
                                seccid={seccid}
                                dataSliderHandler={dataSliderHandler}
                            />
                        </Fragment>
                    )
                })
                :
                <Spinnercircle/>
            }
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1em',
                fontSize: '1.5em',
                border: '1px solid black',
                margin: '0 10px'

            }}
                 className="price_bg"
            >
                <span>Total</span>
                {/*Si restauranteData contiene datos, continua*/}
                {Object.keys(restauranteData).length > 0 ?
                    // Accedemos al array restauranteData y apuntamos al objeto "respuesta" dentro de la primera llamada
                    restauranteData[0].respuesta.map(item => {
                        //Se mapea el contenido de respuesta y apuntamos al objeto "id" dentro de "respuesta"
                        if (item.id === seccid) {
                            //Accedemos al objeto "precio" dentro de "id"
                            return (
                                <span>PVP: {dosDecim(item.precio, 2)} €</span>
                            )
                        }
                    })
                    :
                    <Spinnercircle/>
                }


            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        productMenuSel: state.PedidosMenu.pedidoMenu,
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Listadomenu);