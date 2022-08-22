import React, {useEffect, useState, Fragment} from 'react';
import {dosDecim} from "../../utils/utils";
import {connect} from 'react-redux';
import axios from "axios";
import {ReactComponent as Calendario} from '../../icons/homecomanda/calendario.svg'
import {ReactComponent as Reloj} from '../../icons/homecomanda/reloj.svg'
import Spinnercircle from "../Spinnercircle";
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../../data/connect_data_restaurantes';

const OrderCard = ({
                       item,
                       index,
                       reduxToken,
                       restauranteData
                   }) => {

    const card = {
        blue_span: {
            display: 'inline-block',
            textIndent: '.5em',
            color: 'rgb(78, 151, 170)',
            fontWeight: 'bold',
            fontStyle: 'oblique'
        }
    }

    const [productsOrder, getProductsOrder] = useState([]);
    const [groupOrder, getGroupOrder] = useState([]);
    const [keys, getKeys] = useState([]);
    const [precioCarta, getPrecioCarta] = useState(0);
    const [precioMenu, getPrecioMenu] = useState([]);
    const [sizeWindow, getSizeWindow] = useState(window.innerWidth);
    const [onSpinner, getOnspinner] = useState('off');

    useEffect(() => {
        let is_unmount = true;
        getOnspinner('on')
        if (productsOrder.length === 0) {
            //http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/ + numero de pedido
            axios.get(`${HTTP_PROTOCOL}${URL_MAIN}${PATH_API}8/${reduxToken}/${item.numpedido}`, USER_HEADERS)
                .then(response => {
                    if (is_unmount) {
                        getOnspinner('off')
                        getProductsOrder(response.data.data.respuesta)
                        getGroupOrder([
                            response.data.data.respuesta.reduce((newItem, key) => {
                                key.nombrecarta in newItem ? newItem[key.nombrecarta].push(key) : newItem[key.nombrecarta] = [key];
                                return newItem;
                            }, {})
                        ]);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        return () => { // ComponentWillUnmount in Class Component
            is_unmount = false
        }
    }, [reduxToken, item.numpedido])

    useEffect(() => {
        let is_unmount = true;
        if (groupOrder.length > 0) {
            getKeys(Object.keys(groupOrder[0]))
        }
        return () => { // ComponentWillUnmount in Class Component
            is_unmount = false
        }
    }, [groupOrder])
    const t = []
    useEffect(() => {
        if (keys.length > 0) {
            keys.map(key => {
                if (restauranteData.filter(plato => plato.nombrecarta === key)[0].esmenu) {
                    console.log('hhhhhhhhhhhhhhh', key)
                    // const nameMen = key;
                    // const precMen = restauranteData.filter(plato => plato.nombrecarta === key)[0].precio;
                    // const cntMnu = groupOrder[0][key].find(item=>item.maxmenu);
                    const defMenu = {
                        name: key,
                        precio: restauranteData.filter(plato => plato.nombrecarta === key)[0].precio,
                        cantidad: groupOrder[0][key].find(item => !isNaN(item.maxmenu)).maxmenu
                    }
                    t.push(defMenu)
                } else {
                    const precCart = dosDecim(groupOrder[0][key].reduce((init, item) => {
                        return (item.unidades * item.precio) + init
                    }, 0))
                    getPrecioCarta(precCart)
                }
            })
            console.log('eette')
        }
        getPrecioMenu(t)
    }, [keys])

    function rotate() {
        getSizeWindow(window.screen.width)
    }

    useEffect(() => {
        window.addEventListener('orientationchange', rotate, false);
        return () => window.removeEventListener("mousedown", rotate);
    }, [rotate])

    const seePropsMenu = (key, prop) => {
        return precioMenu.find(item => item.name === key)[prop]
    }

    return (
        <div className="full"
             key={index}
             style={{
                 background: 'white',
                 width: '90%',
                 padding: '1em',
                 margin: '0 auto 1em auto',
                 border: '2px solid lightgrey',
                 boxShadow: '4px 4px 30px -10px grey'
             }}
        >
            <div className="full">
                <h4 style={{
                    textAlign: 'left',
                    color: 'dimgrey',
                    background: '#B1D8E2',
                    textIndent: '1em',
                    padding: '1em',
                }}>Num. Pedido: {item ? item.numpedido : null}</h4>
            </div>
            <div style={{
                padding: '1em 1em 0 1em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Calendario style={{
                        padding: '0 .5em',
                        width: '3em',
                        height: '3em',
                        fill: 'dimgrey'
                    }}/>
                    <p>{item.fecha_hora ? (item.fecha_hora).split(" ")[0] : null}</p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Reloj style={{
                        padding: '0 .5em',
                        width: '3em',
                        height: '3em',
                        fill: 'dimgrey'
                    }}/>
                    <p>{item.fecha_hora ? (item.fecha_hora).split(" ")[1] : null}</p>
                </div>
            </div>
            <p style={{
                fontSize: '1.4em',
                color: 'darkslategrey',
                padding: '1em',
                display: 'flex',
                flexWrap: 'wrap'
            }}>ESTADO: <span style={{color: 'rgb(78, 151, 170)', marginLeft: '.5em'}}>
                    {item ? item.estado : null}
            </span></p>
            {
                item.observaciones ?
                    <div style={{
                        width: '100%',
                        minHeight: '3em',
                        border: '3px solid #d3d3d3',
                        position: 'relative',
                        padding: '1em .5em'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-1rem',
                            left: '1rem',
                            background: 'white',
                            padding: '.5em'
                        }}>
                            <p style={{color: 'dimgrey'}}>Observaciones</p>
                        </div>
                        {item.observaciones}
                    </div>
                    :
                    null
            }
            <div>
                {
                    keys.length > 0 ?
                        keys.map((key, index) => {
                                // console.log('esmenu',  restauranteData.filter(plato => plato.nombrecarta === Object.keys(item)[0])[0].esmenu);
                                // console.log(restauranteData.filter(plato => plato.nombrecarta === key)[0].esmenu)
                                // console.log(groupOrder[0][key])
                                if (!restauranteData.filter(plato => plato.nombrecarta === key)[0].esmenu) {
                                    return (
                                        groupOrder[0][key].map((carta) => {
                                            return (
                                                <div key={index / 4 + carta.nombreplato}
                                                     style={{
                                                         padding: '.5em'
                                                     }}>
                                                    <h4>{carta.nombreplato}</h4>
                                                    <hr style={{
                                                        width: '100%',
                                                        border: '1px solid #d3d3d3',
                                                        marginBottom: '1em'
                                                    }}/>
                                                    <p>Estado del producto: <span
                                                        style={card.blue_span}>{carta.estado}</span></p>
                                                    <p>Última modificación: <span
                                                        style={card.blue_span}>{carta.modificado.split(' ')[1]}</span>
                                                    </p>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginTop: '1em'
                                                        }}
                                                    >
                                                        <p>Unidades: {carta.unidades}</p>
                                                        <p style={{textAlign: 'right'}}>Precio: {dosDecim(carta.precio)} €</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                } else {
                                    return (
                                        <Fragment key={index + key}>
                                            <div
                                                style={{
                                                    padding: '.5em'
                                                }}>
                                                <h4 style={{textTransform: 'uppercase'}}>{key}</h4>
                                                <hr style={{
                                                    width: '100%',
                                                    border: '1px solid #d3d3d3',
                                                    marginBottom: '1em'
                                                }}/>

                                                <ul id="list_menu" style={{margin: '0px .5rem 0 1rem'}}>
                                                    {groupOrder[0][key].map((menu, index) => {
                                                        return (
                                                            <li key={menu.nombreplato + index}>
                                                                <ul>
                                                                    <li style={{padding: '.2rem'}}>
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            alignItems: 'flex-start',
                                                                            // borderBottom: '1px solid rgb(211, 211, 211)'
                                                                        }}>
                                                                            <p style={{
                                                                                fontStyle: 'oblique',
                                                                                fontWeight: 'bold',
                                                                                width: '75%'
                                                                            }}>{menu.nombreplato}</p>
                                                                            <p>
                                                                        <span style={{
                                                                            color: '#4e97aa'
                                                                        }}
                                                                        >{sizeWindow < 470 ?
                                                                            'Uds: '
                                                                            :
                                                                            'Unidades: '}
                                                                        </span>{menu.unidades}
                                                                            </p>
                                                                        </div>
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'start',
                                                                            alignItems: 'flex-start',
                                                                            flexWrap: 'wrap',
                                                                            padding: '0 .5em'
                                                                        }}>
                                                                            <p style={{margin: '0 5px'}}>Unidades: <span
                                                                                style={card.blue_span}> {menu.estado}</span>
                                                                            </p>
                                                                            {/*<span style={{*/}
                                                                            {/*    margin: '0 5px',*/}
                                                                            {/*    color: 'dimgrey'*/}
                                                                            {/*}}>|</span>*/}
                                                                            <p style={{margin: '0 5px'}}>Ult.
                                                                                modificación: <span
                                                                                    style={card.blue_span}> {menu.modificado.split(' ')[1]}</span>
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    {/*<hr style={{*/}
                                                                    {/*    width: '100%',*/}
                                                                    {/*border: '1px solid #d3d3d3',*/}
                                                                    {/*    marginBottom: '1em'}}/>*/}
                                                                    {/*}*/}
                                                                </ul>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '.5em 0',
                                                    flexWrap: 'wrap'
                                                }}>
                                                    <p>Unidades: <span>{precioMenu.length > 0 ? seePropsMenu(key, 'cantidad') + ' uds. x ' + dosDecim(seePropsMenu(key, 'precio')): null}€</span>
                                                    </p>
                                                    <p>Precio: <span>{precioMenu.length > 0 ? dosDecim(seePropsMenu(key, 'cantidad') * seePropsMenu(key, 'precio')) + '€' : null}</span></p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                }
                            }
                        )
                        :
                        onSpinner === 'on' ?
                            <Spinnercircle/>
                            :
                            null
                }
                <hr style={{
                    width: '100%',
                    border: '1px solid #d3d3d3',
                    marginBottom: '1em'
                }}/>
                <p style={{textAlign: 'right', paddingRight: '.5em'}}>TOTAL: {
                    productsOrder ?
                        dosDecim(productsOrder.reduce((init, item) => {
                            return (item.unidades * item.precio) + init
                        }, 0))
                        :
                        null
                } €</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        reduxToken: state.Token.token,
        clientProfile: state.ClientProfile.clientProfile,
        restauranteData: state.RestauranteData.RestauranteProfile[0].respuesta
    }
}

export default connect(mapStateToProps)(OrderCard);