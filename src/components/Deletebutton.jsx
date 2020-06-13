import React, {useState, useEffect, Fragment} from 'react';
import {ReactComponent as Buttonsubtrack} from "../icons/letra-x.svg";
import {substractPedidoCarta} from '../redux/actions';

const Deletebutton = ({dataproduct}) => {
    const del = {
        svg: {
            width: '2em',
            fill: '#000',
            margin: '.3em',
            background: '#ff000045'
        }
    }

    const [product, getProduct] = useState({})
    // const [category, getCategory] = useState({})

    useEffect(() => {
        getProduct(dataproduct)
        // getCategory(wordkey)
    }, [dataproduct])


    return (
        <Fragment>
                <Buttonsubtrack
                    onClick={() => substractPedidoCarta(product)}
                    style={del.svg}/>
        </Fragment>
    )
}
export default Deletebutton;