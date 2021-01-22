import React, {Fragment, useEffect, useState} from 'react';
import Plusbutton from "./Plusbutton";
import Subtrackbutton from "./Subtrackbutton";
import Deletebutton from "./Deletebutton";
import {connect} from "react-redux";

const Comamandkeymap = ({data, products}) => {

    const [dataproduct, getDataproduct] = useState({});
    const [cant, getCant] = useState(0);


    useEffect(() => {
        getDataproduct(data);
        const quantityProduct = (data, products) => {
            if (Object.keys(products).length === 0) {
                getCant({})
            } else {
                getCant(products.filter(item => item.plato_id === data.plato_id));
            }
        }
        quantityProduct(data, products);

    }, [data, products]);

    return (
        <Fragment>
            {
                Object.keys(cant).length === 0 ?
                null
                :
                cant[0].cant === 1 ?
                    <Deletebutton
                        dataproduct={dataproduct}
                    />
                    :
                    <Subtrackbutton
                        dataproduct={dataproduct}
                    />
            }
            <Plusbutton
                dataproduct={dataproduct}
            />
        </Fragment>
    )
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productsmenu: state.PedidosMenu.pedidoMenu
    }
}

export default connect(mapStateToProps)(Comamandkeymap);