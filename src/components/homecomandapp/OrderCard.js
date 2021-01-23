import React, {useEffect, useState} from 'react';
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
                   }) => {

    const [productsOrder, getProductsOrder] = useState([]);
    const [onSpinner, getOnspinner] = useState('off');

    useEffect(() => {
        getOnspinner('on')
        //http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/ + numero de pedido
        axios.get(`${HTTP_PROTOCOL}${URL_MAIN}${PATH_API}8/${reduxToken}/${item.numpedido}`, USER_HEADERS)
            .then(response => {
                getOnspinner('off')
                getProductsOrder(response.data.data.respuesta)
            })
            .catch(error => {
                console.log(error)
            })
    }, [item.numpedido])

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
                    productsOrder.length > 0 ?
                        productsOrder.map((item, index) => {
                            return (
                                <div key={index}
                                     style={{
                                         padding: '.5em'
                                     }}>
                                    <h4>{item.nombreplato}</h4>
                                    <hr style={{
                                        width: '100%',
                                        border: '1px solid #d3d3d3',
                                        marginBottom: '1em'
                                    }}/>
                                    <p>Estado del producto: <span style={{
                                        display: 'inline-block',
                                        textIndent: '.5em',
                                        color: 'rgb(78, 151, 170)',
                                        fontWeight: 'bold',
                                        fontStyle: 'oblique'
                                    }}>
                                        {item.estado}</span></p>
                                    <p>Última modificación: <span style={{
                                        display: 'inline-block',
                                        textIndent: '.5em',
                                        color: 'rgb(78, 151, 170)',
                                        fontWeight: 'bold',
                                        fontStyle: 'oblique'
                                    }}>
                                        {item.modificado.split(' ')[1]}
                                    </span>
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginTop: '1em'
                                        }}
                                    >
                                        <p>Unidades: {item.unidades}</p>
                                        <p style={{textAlign: 'right'}}>Precio: {dosDecim(item.precio)} €</p>
                                    </div>
                                </div>
                            )
                        })
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
        clientProfile: state.ClientProfile.clientProfile
    }
}

export default connect(mapStateToProps)(OrderCard);