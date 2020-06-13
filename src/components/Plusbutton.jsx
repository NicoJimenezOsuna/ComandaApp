import React, {useState, useEffect, Fragment} from 'react';
import {ReactComponent as Buttonplus} from "../icons/mas.svg";
import {addPedidoCarta} from "../redux/actions";

const Plusbutton = ({dataproduct}) => {
    const plus = {
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
                <Buttonplus
                    style={plus.svg}
                    onClick={() => addPedidoCarta(product)}
                />
        </Fragment>
    )
}
export default Plusbutton;