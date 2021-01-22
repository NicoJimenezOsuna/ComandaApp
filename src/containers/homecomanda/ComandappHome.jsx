import React, {Fragment, useEffect, useState, useRef} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import MenuHome from "../../components/homecomandapp/MenuHome";
import {ReactComponent as Confirm} from "../../icons/homecomanda/confirmar.svg";
import {ReactComponent as ErrorIcon} from "../../icons/homecomanda/atencion.svg";
import Header from "../../components/Header";
import Profileuser from "../../components/homecomandapp/Profileuser";
import SendComanda from "../../components/homecomandapp/SendComanda";
import OrderStatus from "../../components/homecomandapp/OrderStatus";
import OrderHistory from "../../components/homecomandapp/OrderHistory";
import {
    dischardFull,
    addLastOrder,
    addPendingOrders,
    addEndOrders
} from '../../redux/actions/index'
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../../data/connect_data_restaurantes';
import axios from "axios";
import {urlImage} from "../../utils/utils";
import Spinnercircle from "../../components/Spinnercircle";

const ComandappHome = ({
                           restauranteData,
                           clientProfile,
                           reduxToken,
                           pendingOrders,
                           lastOrder
                       }) => {

    const menu = {
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '1em',
            // position: 'absolute',
            top: 0,
            zIndex: '-1',

        },
        img: {
            width: '6em',
            height: '3em',
        },
    }

    const [expandmenu, getExpandMenu] = useState(false);
    const [view, getView] = useState('profile');
    const [modaltable, getModalTable] = useState(false)
    const [modalid, getModalid] = useState('');
    const [confirmbox, getConfirmBox] = useState(false);
    const [completeOrder, getCompleteOrder] = useState({});
    const [finallySend, setFinallySend] = useState(false);
    const [errormessage, getErrorMessage] = useState('');
    const [errorModalOrder, getErrorModalOrder] = useState('');
    const [princOrder, getPrincOrder] = useState({});
    const [onSpinner, getOnspinner] = useState('off');

    useEffect(() => {
        let is_unmount = true;
        //CHECK ORDERS
        if (clientProfile.telefono) {
            // http://restaurante.comandapp.es/api/ws/9/cLZDdvFTJcl5cWG/TLF/' + clientProfile.telefono
            axios.get(`${HTTP_PROTOCOL}${URL_MAIN}${PATH_API}9/${reduxToken}/${clientProfile.telefono}`, USER_HEADERS)
                .then(response => {
                    if (is_unmount) {
                        const numpedido_descend = response.data.data.respuesta.sort((a, b) => b.numpedido - a.numpedido)
                        // CLASSIFY ORDERS PENDING DELIVERY
                        //--PENDING ORDERS:
                        addPendingOrders(numpedido_descend.filter(order => order.estado_id >= 5))
                        //--END ORDERS:
                        addEndOrders(numpedido_descend.filter(order => order.estado_id < 5))
                    }
                }).catch(error => console.log(error))
        }
        return () => { // ComponentWillUnmount in Class Component
            is_unmount = false
        }
    }, [clientProfile.telefono])

    const SendComandaFull = () => {
        if (completeOrder.length === 0) return;

        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "text/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        getOnspinner('on');
        axios.post('http://restaurante.comandapp.es/api/ws/6/' + reduxToken,
            completeOrder,
            userHeader
        )
            .then(response => {
                if (response.data.data.mensaje !== 'OK') {
                    getErrorModalOrder('Error al intentar realizar el pedido. Inténtelo más tarde.')
                } else {
                    dischardFull()
                    setFinallySend(true)
                    setTimeout(() => {
                        setFinallySend(false)
                        getConfirmBox(false)

                    }, 2500);
                    getCompleteOrder({})
                    addLastOrder(response.data.data.respuesta.id);
                    localStorage.setItem('pedionline', JSON.stringify(response))
                    getOnspinner('off');
                }
            })
            .catch(error => {
                getOnspinner('off');
                getErrorModalOrder('Error en la conexión.')
            })
        getCompleteOrder({})
        console.log('pedido finalizado', completeOrder)
    }

    const deleteErrorMessage = () => {
        getErrorModalOrder('')
        getErrorModalOrder('')
        getConfirmBox(false)
    }

    const expandMenuHome = () => {
        expandmenu ? getExpandMenu(false) : getExpandMenu(true);
    }

    const changeView = (e) => {
        window.location.hash = e.target.id;
        getView(window.location.hash);
    }

    const visibleModaltable = (productid) => {
        modaltable ? getModalTable(false) : getModalTable(true)
        getModalid(productid);
    }

    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }

    return (
        <div className="subRootHome">
            {
                expandmenu ?
                    null :
                    <Header/>
            }

            {/*CONFIRM WINDOW*/}
            <div className={confirmbox ?
                "displayed absolute_medium confirm_box"
                :
                "displayed_none absolute_medium confirm_box"}
            >
                <h2 style={{paddingBottom: '.5em'}}>CONFIRMACIÓN DE PEDIDO</h2>
                <p>Se dispone a realizar su pedido a la siguiente dirección.</p>
                <p style={{color: 'grey', padding: '.5em 0'}}>Dirección: <span style={{
                    fontWeight: 'bolder',
                    color: 'black'
                }}>{clientProfile.direccion}</span></p>
                {errorModalOrder.length > 0 || finallySend ?
                    null
                    :
                    <p>¿Es correcto?</p>
                }
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '.5em 1em'
                }}>
                    {errorModalOrder.length > 0 && !finallySend ?
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <ErrorIcon style={{
                                maxWidth: '4em',
                                maxHeight: '4em',
                                fill: 'red'
                            }}/>
                            <p style={{
                                color: 'red',
                                fontFamily: 'Papyrus',
                                fontSize: '1.3em'
                            }}>{errorModalOrder}</p>
                            <button type="button"
                                    className="exit_button"
                                    onClick={deleteErrorMessage}
                            >Salir
                            </button>
                        </div>
                        :
                        onSpinner === 'on' ?
                            <Spinnercircle/>
                            :
                            !finallySend ?
                                <Fragment>
                                    <button className="confirmbox_button" type="button"
                                            onClick={() => SendComandaFull()}
                                    >SI
                                    </button>
                                    <button className="confirmbox_button" type="button"
                                            onClick={() => getConfirmBox(false)}
                                    >NO
                                    </button>
                                </Fragment>
                                :
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Confirm style={{
                                        maxWidth: '4em',
                                        maxHeight: '4em',
                                        fill: 'green'
                                    }}/>
                                    <p style={{
                                        color: 'green',
                                        fontFamily: 'Papyrus',
                                        fontSize: '1.3em'
                                    }}>Enviado con éxito</p>
                                </div>
                    }
                </div>
                <img src={urlImage() + restauranteData[0].logo} alt="logo restaurante"
                     style={{maxWidth: '25%', maxHeight: '25%'}}/>
            </div>
            {/*END CONFIRM WINDOW*/}
            <div style={{
                position: 'relative',
                minWidth: '100%',
                // height: expandmenu ? '100%' : 0,

            }}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    minWidth: '100%',
                    overflow: 'visible',
                    zIndex: '0'
                }}>
                    <MenuHome expandMenuHome={expandMenuHome}
                              expandmenu={expandmenu}
                              changeView={changeView}
                    />
                </div>
                <div className={expandmenu ? 'reduce' : 'normal'}>
                    <div
                        style={menu.cont_img}>
                        <img id="img_boton_comanda"
                             style={menu.img}
                             src="./assets/img/homecomanda/comandapp_home_300.png" alt="logo comandahome socialpymes"/>
                    </div>
                    {
                        (() => {
                            switch (view) {
                                case "#datos-envio":
                                    return <Profileuser/>;
                                    break;
                                case "#enviar-pedido":
                                    return <SendComanda
                                        modaltable={modaltable}
                                        visibleModaltable={visibleModaltable}
                                        modalid={modalid}
                                        getConfirmBox={getConfirmBox}
                                        getCompleteOrder={getCompleteOrder}
                                        errormessage={errormessage}
                                        getErrorMessage={getErrorMessage}
                                    />;
                                case "#estado-pedido":
                                    return <OrderStatus />;
                                case "#historico-pedidos":
                                    return <OrderHistory/>
                                default:
                                    return <Profileuser/>;
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        clientProfile: state.ClientProfile.clientProfile,
        reduxToken: state.Token.token,
        pendingOrders: state.Orders.pendingOrders,
        lastOrder: state.LastOrder.lastOrder
    }
}

export default connect(mapStateToProps)(ComandappHome);
