import React, {Fragment, useEffect, useState} from 'react';
import {ReactComponent as Buttonsubtrack} from "../icons/menos.svg";
import {substractPedidoCarta} from '../redux/actions';

const Subtrackbutton = ({dataproduct}) => {
    const sub = {
        svg: {
            width: '2em',
            fill: '#000',
            margin: '.3em'
        }
    }

    const [product, getProduct] = useState({})

    useEffect(() => {
        getProduct(dataproduct)
    }, [dataproduct])

    return (
        <Fragment>
                <Buttonsubtrack
                    style={sub.svg}
                    onClick={() => substractPedidoCarta(product)}
                />
        </Fragment>
    )
}
export default Subtrackbutton;