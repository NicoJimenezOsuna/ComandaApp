import React, {useState, useEffect} from 'react';
import {ReactComponent as IconClose} from "../icons/times-circle-regular.svg";
import Micomandacarta from "./Micomandacarta";
import Micomandamenu from "./Micomandamenu";
import {connect} from 'react-redux';
import {ReactComponent as Nomenu} from "../icons/nutricion.svg";
import {ReactComponent as Nocarta} from "../icons/cocina.svg";
import DischardFullComanda from "./comandkeymenu/DischardFullComanda";
import {ReactComponent as Iconbutton} from "../icons/homecomanda/fuego.svg";
import {dischardFull} from "../redux/actions";
import {Link} from 'react-router-dom';

const Listcomandamodal = (
    {
        pedidoViewHandler,
        isVisiblePedido,
        products,
        productMenuSel,
        closeloginmodal,
        clientProfile
    }
) => {
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
            // minHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "0 10px 10px 10px",
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
            right: '0',
            width: '100%',
            zIndex: '9999',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        text: {
            textAlign: 'center',
            fontSize: '2.3em',
            // color: 'rgba(255, 0, 0, 0.53)',
            color: '#808080',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitTransform: 'translate(-50%, -50%)'
        },
        cont_boton_home: {
            width: '100%',
            height: '6em',
            backgroundColor: '#fff',
            position: 'sticky',
            bottom: 0,
            left: 0,
            padding: '.5em',
            borderTop: '1px solid #6e6868'

        },
        cont_boton: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        boton_img: {
            maxWidth: '8em',
            maxHeight: '4em',
            padding: '.5em',
        },
        boton_home: {
            maxWidth: '8em',
            maxHeight: '4em',
            padding: '.5em',
            margin: '0px 2.5px',
            alignItems: 'center',
            filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 3px 3px 6px)',
            borderRadius: '8px',
            border: '2px solid #ECECEC',
            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#fff',
            outline: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignitems: 'center'
        },
        icon_button: {
            maxHidth: '2.5em',
            maxHeight: '2.5em',
            fill: '#6e6868',
            marginRight: '.6em'
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
                        style={{color: 'rgba(0,0,0,.4', width: '3em'}}
                        onClick={pedidoViewHandler}
                    />
                    <DischardFullComanda
                    />
                </div>

                <div style={comanda.con_title}>
                    <h2 className="label_carta-menu" style={comanda.h2}>Mi comanda</h2>
                </div>
                <div style={comanda.cont_sec}>
                    <h3 style={comanda.h3}>CARTA: </h3>
                    {Object.keys(cartaproduct).length <= 0 ?
                        <div style={{width: '100%', position: 'relative'}}>
                            <h2 style={comanda.text}>sin selección</h2>
                            <Nocarta style={{width: '100%', height: '150px', fill: 'rgb(110, 104, 104, .2)'}}/>
                        </div>
                        :
                        <Micomandacarta comandacarta={products}/>
                    }
                </div>
                <hr style={comanda.hr}/>
                <div style={comanda.cont_sec}>
                    <h3 style={comanda.h3}>MENÚ: </h3>
                    {Object.keys(menuproduct).length <= 0 ?
                        <div style={{width: '100%', position: 'relative'}}>
                            <h2 style={comanda.text}>sin selección</h2>
                            <Nomenu style={{width: '100%', height: '150px', fill: 'rgb(110, 104, 104, .2)'}}/>
                        </div>
                        :
                        <Micomandamenu comandamenu={productMenuSel}/>
                    }
                </div>
                <div style={comanda.cont_boton_home}>
                    <h3 style={{fontFamily: 'Dosis', paddingBottom: '.3em'}}>Realiza tu pedido desde casa:</h3>
                    <div style={comanda.cont_boton} id="cont_boton_home">
                        <img id="img_boton_comanda"
                             style={comanda.boton_img}
                             src="./assets/img/homecomanda/comandapp_home_300.jpg" alt=""/>
                        {clientProfile.telefono.length === 0 ?
                            <button style={comanda.boton_home}
                                    onClick={closeloginmodal}
                            >
                                <Iconbutton style={comanda.icon_button}
                                />
                                Realizar pedido
                            </button>
                            :
                            <Link to="/comandappHome">
                                <button style={comanda.boton_home}
                                        onClick={closeloginmodal}
                                >
                                    <Iconbutton style={comanda.icon_button}
                                    />
                                    Realizar pedido
                                </button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu,
        clientProfile: state.ClientProfile.clientProfile
    }
}

export default connect(mapStateToProps)(Listcomandamodal);