import React, {useState} from 'react';
import axios from "axios";
import Spinnercircle from "../Spinnercircle";
import {connect} from "react-redux";
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../../data/connect_data_restaurantes';

const EndOrdersCard = ({product, index, token}) => {

    const [endOrderStatus, getOrderStatus] = useState([]);
    const [onSpinner, getOnspinner] = useState('off');

    const endOrderCall = (idOrder) => {
        if (endOrderStatus.length === 0) {
            getOnspinner('on');
            //'http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/';
            let url_stateOrders = `${HTTP_PROTOCOL}${URL_MAIN}${PATH_API}8/${token}/`
            axios.get(url_stateOrders + idOrder, USER_HEADERS)
                .then(response => {
                    console.log('endOrder', response.data.data.respuesta)
                    getOrderStatus(response.data.data.respuesta)
                    getOnspinner('off')
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div key={index}>
            <div className="full"
                 style={{
                     background: 'white',
                     width: '90%',
                     padding: '1em',
                     margin: '0 auto 1em auto',
                     border: '2px solid lightgrey',
                     boxShadow: '4px 4px 30px -10px grey'
                 }}
            >
                <div className="full"
                     style={{
                         // background: '#4e97aa',
                         background: '#B1D8E2',
                         display: 'flex',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         padding: '0 1em'
                     }}
                >
                    <h4 style={{
                        textAlign: 'left',
                        color: 'dimgrey',
                        padding: '1em 0',
                    }}>Num. Pedido: {product ? product.numpedido : null}</h4>
                    <div style={{
                        width: 'fit-content',
                        marginLeft: '5%',
                        padding: '.5em',
                        background: 'transparent',
                        border: '2px solid dimgrey',
                        color: 'dimgrey'
                        // boxShadow: '4px 4px 30px -10px lightgrey'
                    }}
                         onClick={() => endOrderCall(product.numpedido)}
                    >
                        {(product.fecha_hora.split(" ")[0])}
                    </div>
                </div>
                <div className="full" style={{
                    padding: '1em'
                }}>
                    {endOrderStatus.length > 0 ?
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: 'dimgray'
                        }}>
                            <h2>Productos</h2>
                            <h2>uds</h2>
                            <hr style={{
                                width: '100%',
                                border: '1px solid #d3d3d3',
                                marginBottom: '1em'
                            }}/>
                        </div>
                        :
                        null}
                    {endOrderStatus.length > 0 ?
                        endOrderStatus.map((plato) => {
                            return (
                                <div key={plato.nombreplato + plato.numpedido}
                                     style={{
                                         display: 'flex',
                                         justifyContent: 'space-between',
                                         alignItems: 'center',
                                         flexWrap: 'wrap',
                                         color: 'dimgray'
                                     }}>
                                    <h3 key={plato.nombreplato}>{plato.nombreplato}</h3>
                                    <h3 key={plato.unidades}>{plato.unidades}</h3>
                                </div>
                            )
                        })
                        :
                        onSpinner === 'on' ?
                            <Spinnercircle/>
                            :
                            <p style={{
                                color: 'dimgray',
                                textAlign: 'center'
                            }}>Click en la fecha para ver relación de productos
                            </p>
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(EndOrdersCard);