import React, {Fragment} from 'react';
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import {connect} from "react-redux";
import EndOrdersCard from "./EndOrdersCard";
import NoOrders from './NoOrders'


const OrderHistory = ({
                          endOrders
                      }) => {

    // const [endOrderStatus, getOrderStatus] = useState([]);
    // const [isEmpty, getIsEmpty] = useState('off');
    //
    // const endOrderCall = (idOrder) => {
    //     if (endOrderStatus.length === 0) {
    //         getIsEmpty('on');
    //         let url_stateOrders = 'http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/';
    //         axios.get(url_stateOrders + idOrder)
    //             .then(response => {
    //                 console.log('endOrder', response.data.data.respuesta)
    //                 getOrderStatus(response.data.data.respuesta)
    //                 getIsEmpty('off')
    //             })
    //             .catch(error => console.log(error))
    //     }
    // }

    return (
        <Fragment>
            <TitleSection title={'Pedidos anteriores'}/>
            <ExplanationSection
                explanation={'Consulta tus anteriores pedidos'}
            />
            {
                endOrders.length > 0 ?
                    endOrders.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <EndOrdersCard
                                    product={item}
                                    index={item.numpedido}
                                />
                            </Fragment>
                        )
                    })
                    :
                    <NoOrders
                        title={'No tienes pedidos anteriores'}
                    />
            }
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        endOrders: state.Orders.endOrders,
        clientProfile: state.ClientProfile.clientProfile
    }
}

export default connect(mapStateToProps)(OrderHistory);