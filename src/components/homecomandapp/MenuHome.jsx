import React,{useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Menusquare} from "../../icons/homecomanda/menu_square.svg";
import {connect} from 'react-redux';
import {urlImage} from "../../utils/utils";

const MenuHome = ({expandMenuHome, expandmenu, changeView, restauranteData}) => {
    const menu = {
        cont_menu: {
            position: 'absolute',
            top: 0,
            left: 0,
            // backgroundColor: 'pink',
            boxShadow: 'rgba(0, 0, 0, .376) 1px 18px 2rem',
            height: expandmenu ? '100vh' : '5em'

        },
        icon_menu: {
            marginTop: '1em',
            marginLeft: '1em',
            width: '2em',
            height: '2em',
            position: 'absolute',
            userSelect: 'none'
        }
    };

    const logoComanda = useRef();
    const [logoComandaHeight, getLogoComandaHeright] = useState('');

    const logoComandappHeight = () => {
        getLogoComandaHeright(logoComanda.current.clientHeight + 'px')
    }
    useEffect(()=>{
        logoComandappHeight();
    })

    return (
        <div style={menu.cont_menu}
             className={expandmenu ? "cont_menuhome nav-comandhome_expand" : "cont_menuhome nav-comandhome"}
             onClick={expandMenuHome}
        >
            <Menusquare style={menu.icon_menu}/>
            <ul className="uloptionsmenuhome"
                // SET PADDING-TOP TO HEIGHT OF LOGO
                style={{paddingTop:logoComandaHeight }}
            >
                <li className="lioptionsmenuhome"
                    id="datos-envio"
                    onClick={changeView}
                >
                    Datos de envío
                </li>
                <li className="lioptionsmenuhome"
                    id={'enviar-pedido'}
                    onClick={changeView}
                >
                    Envíar pedido
                </li>
                <li className="lioptionsmenuhome"
                    id={'estado-pedido'}
                    onClick={changeView}
                >Estado de pedido
                </li>
                <li className="lioptionsmenuhome"
                    id={'historico-pedidos'}
                    onClick={changeView}
                >Histórico de pedidos
                </li>
                {restauranteData.length > 0 ?
                    <li className="lioptionsmenuhome"
                        ref={logoComanda}
                    >
                        <img src={urlImage() + restauranteData[0].logo} alt=""
                             style={{
                                 width: '3em',
                                 height: 'auto'
                             }}/>
                    </li>
                    :
                    null
                }

                <li className="lioptionsmenuhome"
                    style={{
                        position: 'absolute',
                        top: '-.5em',
                        right: expandmenu ? '.7em' : '1000em'
                    }}
                >
                    <Link to={'/categoria'}>
                        <img src="assets/img/comanda_transparente.png" alt="logotipo compandapp"
                             style={{
                                 width: '5rem',
                                 height: '5rem',
                                 display: 'block',
                                 margin: '0px auto',
                                 borderRadius: '50%',
                                 background: 'linear-gradient(225deg, #8080808c, rgb(255, 255, 255))',
                                 boxShadow: 'grey -3px 8px 31px -5px'
                             }}
                        />
                        <span style={{
                            fontSize: '1.3rem',
                            textAlign: 'center',
                            display: 'block',
                            color: '#757575'
                        }}>
                        volver a
                    </span>
                        <span style={{
                            fontSize: '1.3rem',
                            textAlign: 'center',
                            display: 'block',
                            lineHeight: 0,
                            textDecoration: 'none',
                            color: '#757575'
                        }}>
                        Comandapp
                    </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
    }
}

export default connect(mapStateToProps)(MenuHome);