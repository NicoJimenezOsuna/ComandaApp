import React from 'react';
import {ReactComponent as EmptyOrders} from '../../icons/homecomanda/no_date.svg'

const NoOrders = ({title}) => {

    return (
        <div style={{position: 'relative', width: '100%'}}>
            <EmptyOrders style={{
                fill: 'rgba(110, 104, 104, 0.3)',
                display: 'block',
                width: '50%',
                height: '50%',
                margin: '3em auto'
            }}/>
            <div style={{
                width: '100%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }
            }>
                <h2 style={{
                    // color: 'dimgrey',
                    fontFamily: 'Dasis',
                    textAlign: 'center',
                    fontSize: '2.3em',
                    color: 'rgb(128, 128, 128)',
                }}>{title}</h2>
            </div>
        </div>
    )
}
export default NoOrders;