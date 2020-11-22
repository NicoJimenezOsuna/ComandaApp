import React, {useState, useEffect, Fragment} from 'react';
import {ReactComponent as Buttonplus} from "../../icons/mas.svg";
import {sumProductsMenu} from "../../redux/actions";

const Plusbuttonmenu = ({dataproduct}) => {
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
                    onClick={() => sumProductsMenu(product.internalID)}
                />
        </Fragment>
    )
}
export default Plusbuttonmenu;