import React, {Fragment, useEffect, useState} from 'react';
import {substractPedidoMenu} from '../../redux/actions';
import {ReactComponent as Buttonsubtrackmenu} from "../../icons/menos.svg";

const Subtrackbuttonmenu = ({dataproduct}) => {
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
                <Buttonsubtrackmenu
                    style={sub.svg}
                    onClick={() => substractPedidoMenu(product)}
                />
        </Fragment>
    )
}
export default Subtrackbuttonmenu;