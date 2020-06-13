import React, {useState, useEffect, Fragment} from 'react';
import {ReactComponent as Buttonsubtrackmenu} from "../../icons/letra-x.svg";
import {substractPedidoMenu} from '../../redux/actions';

const Deletebuttonmenu = ({dataproduct}) => {
    const del = {
        svg: {
            width: '2em',
            fill: '#000',
            margin: '.3em',
            background: '#ff000045'
        }
    }

    const [product, getProduct] = useState({})

    useEffect(() => {
        getProduct(dataproduct)
    }, [dataproduct])


    return (
        <Fragment>
                <Buttonsubtrackmenu
                    onClick={() => substractPedidoMenu(product)}
                    style={del.svg}/>
        </Fragment>
    )
}
export default Deletebuttonmenu;