import React, {Fragment, useState, useEffect} from 'react';
import Labelsmenus from './Labelsmenus';
import axios from "axios";
import {dosDecim} from "../utils/utils";
import Platosmenus from "./Platosmenus";
import {connect} from 'react-redux';
import Spinnercircle from './Spinnercircle';
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';

const Listadomenu = ({
                         dataid,
                         dataSliderHandler,
                         subcategorias,
                         productMenuSel,
                         restauranteData,
                         token,
                         getValue,
                         completeddMemenu,
                         okmessage,
                         errormessage,
                         warningmessage
                     }) => {
    const listado = {
        between: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#8080802e',
            padding: '.7em .7em'
        },
        buttonMenu: {
            // fontSize: '1.3em',
            // padding: '.5em 2em',
            // borderRadius: '25px',
            // border: '2px solid rgb(112, 112, 112)',
            // backgroundColor: 'rgba(156, 255, 242, 0.68)',
            // display: 'inline-block',
            // cursor: 'pointer',
            // textDecoration: 'none',
            // textShadow: '0px 1px 0px #2f6627',
            // outline: 'none'
        },
        error: {
            color: 'white',
            backgroundColor: '#e50e0e',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        },
        ok: {
            color: 'white',
            backgroundColor: ' #5bbc5b',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        },
        warning: {
            color: 'white',
            backgroundColor: '#17a2b8',
            padding: '.8em',
            borderRadius: '10px',
            position: 'absolute'
        }
    }

    const [sectionsMenu, getSectionsMenu] = useState([]);
    const [seccid, getSeccid] = useState([]);


    useEffect(() => {
        //Will not update state if isn't mounted.
        let isSubscribed = true

        getSeccid(dataid);

        // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/menuID
        const menusRequest = async (protocol, url, pathAPI, token, id, header) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${pathAPI}1/${token}/${id}`, header);
                if (isSubscribed) {
                    getSectionsMenu(response.data.data.respuesta);
                }
            } catch (error) {
                console.log("error", error)
            }
        }
        //REQUEST
        menusRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API, token, dataid, USER_HEADERS)

        //clean function: no update state if is unmount component
        return () => isSubscribed = false

    }, [token, dataid, productMenuSel, subcategorias])

    if (!Object.keys(sectionsMenu).length > 0) {
        return (
            <Spinnercircle/>
        )
    }

    return (
        <Fragment>
            {restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                <div style={listado.between}>
                    <button
                        onClick={completeddMemenu}
                        type="button"
                        style={listado.buttonMenu}
                        className="button_comanda"
                    >
                        Añadir
                    </button>

                    <p
                        className={warningmessage ? 'displayed' : 'displayed_none '}
                        style={listado.warning}>
                        Añadido de nuevo este menú.
                    </p>
                    <p
                        className={errormessage ? 'displayed' : 'displayed_none '}
                        style={listado.error}>
                        seleccione un producto de cada apartado.
                    </p>
                    <p
                        className={okmessage ? 'displayed' : 'displayed_none '}
                        style={listado.ok}
                    >Guardado en lista de pedidos.</p>
                </div>
                :
                null
            }
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1em 1em 0 1em',
                fontSize: '1.5em',
                margin: '0 10px'
            }}
            >
				<span style={{
                    color: 'rgb(110, 104, 104)'
                }}>Total</span>
                {/*Si restauranteData contiene datos, continua*/}
                {Object.keys(restauranteData).length > 0 ?
                    // Accedemos al array restauranteData y apuntamos al objeto "respuesta" dentro de la primera llamada
                    restauranteData[0].respuesta.map(item => {
                        //Se mapea el contenido de respuesta y apuntamos al objeto "id" dentro de "respuesta"
                        if (item.id === seccid) {
                            //Accedemos al objeto "precio" dentro de "id"
                            return (
                                <span style={{
                                    background: 'rgb(177, 216, 226)',
                                    padding: '.3em',
                                    color: 'rgb(110, 104, 104)'
                                }}
                                      key={'id' + item.id}>PVP: {dosDecim(item.precio, 2)} €</span>
                            )
                        }
                    })
                    :
                    <Spinnercircle/>
                }


            </div>
            {Object.keys(sectionsMenu).length > 0 ?
                sectionsMenu.map(item => {
                    // {console.log(sectionsMenu)}
                    return (
                        <Fragment key={item.categoria}>
                            <Labelsmenus data={item.categoria}/>
                            <Platosmenus
                                labelsLength={sectionsMenu.length}
                                data={item.categoria}
                                catid={item.categoria_id}
                                seccid={seccid}
                                dataSliderHandler={dataSliderHandler}
                                getValue={getValue}
                            />
                        </Fragment>
                    )
                })
                :
                <Spinnercircle/>
            }
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        productMenuSel: state.PedidosMenu.pedidoMenu,
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Listadomenu);