import React, {useState, useEffect} from 'react';
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import Micomandacarta from "./Micomandacarta";
import Micomandamenu from "./Micomandamenu";
import {connect} from 'react-redux';
import {ReactComponent as Nomenu} from "../icons/nocarta.svg";
import {ReactComponent as Nocarta} from "../icons/notapas.svg";
import DischardFullComanda from "./comandkeymenu/DischardFullComanda";
import {dischardFull} from "../redux/actions";

const Listcomandamodal = ({pedidoViewHandler, isVisiblePedido, products, productMenuSel}) => {
    const comanda = {
        cont_princ: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        cont_slider: {
            position: "relative",
            minWidth: "90%",
            maxWidth: "90%",
            maxHeight: "90%",
            minHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        },
        con_title: {
            width: '100%',
            padding: '10px',
            backgroundColor: 'rgba(156, 255, 242, 0.18',
            borderBottom: '2px solid black'
        },
        h2: {
            fontFamily: 'Papyrus',
            textAlign: 'center',

        },
        cont_sec: {
            width: '100%',
        },
        h3: {
            textAlign: 'left',
        },
        hr: {
            width: '90%',
            height: '1px',
            backgroundColor: 'grey',
            margin: '1em auto',
        },
        cont_x: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: '9999',
            backgroundColor: 'fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    };


    const [cartaproduct, getCartaProduct] = useState([]);
    const [menuproduct, getMenuProduct] = useState([]);

    useEffect(() => {
        getCartaProduct(products)
        getMenuProduct(productMenuSel)
    }, [products, productMenuSel])


// const ped = JSON.parse(localStorage.getItem('pedidosModal'))
    return (
        <div
            style={comanda.cont_princ}
            // className={!isVisiblePedido ? "displayed_none" : "displayed"}
            className={!isVisiblePedido ? "displayed_none" : "displayed"}
        >
            <div style={comanda.cont_slider}>
                <div style={comanda.cont_x}>
                    <IconClose
                        style={{color:'rgba(0,0,0,.4',width:'3em'}}
                        onClick={pedidoViewHandler}
                    />

                    <DischardFullComanda
                        />


                </div>


                <div style={comanda.con_title}>
                    <h2 style={comanda.h2}>Mi comanda</h2>
                </div>
                <div style={comanda.cont_sec}>
                    <h3 style={comanda.h3}>CARTA: </h3>
                    {Object.keys(cartaproduct).length <= 0 ?
                        <div style={{width: '100%'}}>
                            <h2 style={{textAlign: 'center', color: 'rgba(255,0,0,0.43)'}}>no hay productos</h2>
                            <Nocarta style={{width: '100%', height: '150px'}}/>
                        </div>
                        :
                        <Micomandacarta comandacarta={products}/>
                    }
                </div>
                <hr style={comanda.hr}/>
                <div style={comanda.cont_sec}>
                    <h3 style={comanda.h3}>MENÚ: </h3>
                    {Object.keys(menuproduct).length <= 0 ?
                        <div style={{width: '100%'}}>
                            <h2 style={{textAlign: 'center', color: '#ff00006e'}}>no hay productos</h2>
                            <Nomenu style={{width: '100%', height: '150px'}}/>
                        </div>
                        :
                        <Micomandamenu comandamenu={productMenuSel}/>
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu
    }
}

export default connect(mapStateToProps)(Listcomandamodal);