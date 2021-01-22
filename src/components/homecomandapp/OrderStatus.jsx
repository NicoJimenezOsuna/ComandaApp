import React, {
    Fragment
} from 'react';
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import {connect} from 'react-redux';
import OrderCard from './OrderCard';
import NoOrders from './NoOrders'

const OrderStatus = ({
                         pendingOrders
                     }) => {

    return (
        <Fragment>
            <TitleSection title={'Estado de pedido'}/>
            <ExplanationSection
                explanation={'Consulta el estado de tus pedidos pendientes de entrega.'}
            />
            {
                pendingOrders.length > 0 ?
                    pendingOrders.map((item, index) => {
                        return (
                            <OrderCard
                                item={item}
                                key={index}
                            />
                        )
                    })
                    :
                    <NoOrders
                        title={'No has realizado ningún pedido'}
                    />
            }
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        pendingOrders: state.Orders.pendingOrders,
    }
}

export default connect(mapStateToProps)(OrderStatus);