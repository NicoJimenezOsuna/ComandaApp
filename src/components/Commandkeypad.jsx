import React, {Fragment, useEffect, useState} from 'react';
import Plusbutton from "./Plusbutton";
import Subtrackbutton from "./Subtrackbutton";
import Deletebutton from "./Deletebutton";
import Dischardbutton from "./Dischardbutton";
import {connect} from "react-redux";

const Comamandkeymap = ({data, products, productsmenu, wordkey}) => {

    const [dataproduct, getDataproduct] = useState({});
    // const [stwordkey, getStWordkey] = useState('');
    // const [product, getProduct] = useState({});
    const [cant, getCant] = useState(0);
    // const [productmenus, getProductsMenu] = useState({})


    useEffect(() => {
        getDataproduct(data)
        // getStWordkey(wordkey)
        // getProduct(products)
        // getProductsMenu(productsmenu)
        // const quantityProduct = useCallback((data, products) => {
        //     if (wordkey === 'menu') {
        //         if (Object.keys(productsmenu).length === 0) {
        //             getCant({})
        //         } else {
        //             getCant(productsmenu.filter(item => item.id === data.id))
        //         }
        //     }
        //     else {
        //         if (Object.keys(products).length === 0) {
        //             getCant({})
        //         } else {
        //             getCant(products.filter(item => item.plato_id === data.plato_id))
        //         }
        //     }
        // })
        const quantityProduct = (data, products) => {
            // if (wordkey === 'menu') {
            //     if (Object.keys(productsmenu).length === 0) {
            //         getCant({})
            //     } else {
            //         getCant(productsmenu.filter(item => item.id === data.id))
            //     }
            // }
            // else {
                if (Object.keys(products).length === 0) {
                    getCant({})
                } else {
                    getCant(products.filter(item => item.plato_id === data.plato_id))
                }
            // }
        }
        quantityProduct(data, products)

    }, [data, products])

    return (
        <Fragment>

            {Object.keys(cant).length === 0 ?
                null
                :
                cant[0].cant === 1 ?
                    <Deletebutton
                        dataproduct={dataproduct}
                        // wordkey={stwordkey}
                    />
                    :
                    <Subtrackbutton
                        dataproduct={dataproduct}
                        // wordkey={stwordkey}
                    />
            }
            <Plusbutton
                dataproduct={dataproduct}
                // wordkey={stwordkey}
            />
            {/*<Dischardbutton*/}
            {/*    dataproduct={dataproduct}*/}
            {/*/>*/}
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productsmenu: state.PedidosMenu.pedidoMenu
    }
}

export default connect(mapStateToProps)(Comamandkeymap);