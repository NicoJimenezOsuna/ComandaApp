import React, {Fragment, useEffect, useState} from 'react';
import Plusbuttonmenu from "./Plusbuttonmenu";
import Subtrackbuttonmenu from "./Substrackbuttonmenu";
import Deletebuttonmenu from "./Deletebuttonmenu";
import Dischardbutton from "../Dischardbutton";
import {connect} from "react-redux";
import Dischardbuttonmenu from "./Dischardbuttonmenu";

const Comamandkeymenu = ({data, productsmenu}) => {

    const [dataproduct, getDataproduct] = useState({});
    const [stwordkey, getStWordkey] = useState('');
    const [product, getProduct] = useState({});
    const [cant, getCant] = useState(0);
    const [productmenus, getProductsMenu] = useState({})


    useEffect(() => {
        getDataproduct(data)
        // getStWordkey(wordkey)
        // getProduct(products)
        getProductsMenu(productsmenu)
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
        const quantityProduct = (data, productsmenu) => {
            // if (wordkey === 'menu') {
                if (Object.keys(productsmenu).length === 0) {
                    getCant({})
                } else {
                    getCant(productsmenu.filter(item => item.internalID === data.internalID))
                }
            // }
            // else {
            //     if (Object.keys(products).length === 0) {
            //         getCant({})
            //     } else {
            //         getCant(products.filter(item => item.plato_id === data.plato_id))
            //     }
            // }
        }
        quantityProduct(data, productsmenu)

    }, [data, productsmenu])

    return (
        <Fragment>

            {Object.keys(cant).length === 0 ?
                null
                :
                cant[0].cant === 1 ?
                    <Deletebuttonmenu
                        dataproduct={dataproduct}
                        // wordkey={stwordkey}
                    />
                    :
                    <Subtrackbuttonmenu
                        dataproduct={dataproduct}
                        // wordkey={stwordkey}
                    />


            }
            <Plusbuttonmenu
                dataproduct={dataproduct}
                // wordkey={stwordkey}
            />

            {/*// MENÚ ÚNICO CODE--------------------------------*/}
            {/*<Dischardbuttonmenu*/}
            {/*    dataproduct={dataproduct}*/}
            {/*    />*/}
            {/*// END MENÚ ÚNICO CODE--------------------------------*/}
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productsmenu: state.PedidosMenu.pedidoMenu
    }
}

export default connect(mapStateToProps)(Comamandkeymenu);