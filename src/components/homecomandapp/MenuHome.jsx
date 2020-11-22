import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Menusquare} from "../../icons/homecomanda/menu_square.svg";


const MenuHome = ({expandMenuHome, expandmenu, changeView}) => {
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

    return (
        <div style={menu.cont_menu}
             className={expandmenu ? "cont_menuhome nav-comandhome_expand" : "cont_menuhome nav-comandhome"}
             onClick={expandMenuHome}
        >
            <Menusquare style={menu.icon_menu}/>
            {/*<div>*/}


            <ul className="uloptionsmenuhome">
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
                    style={{
                        position: 'absolute',
                        top: '-.5em',
                        right: expandmenu ? '.7em' : '1000em'
                    }}
                >
                    <Link to={'/categoria'}>
                        <img src="assets/favicons/ms-icon-310x310.png" alt="logotipo compandapp"
                             style={{
                                 width: '5rem',
                                 height: '5rem',
                                 display: 'block',
                                 margin: '0 auto'
                             }}
                        />
                        <span style={{
                            fontSize: '1.3rem',
                            textAlign: 'center',
                            display: 'block'
                        }}>
                        volver a
                    </span>
                        <span style={{
                            fontSize: '1.3rem',
                            textAlign: 'center',
                            display: 'block',
                            lineHeight: 0,
                            textDecoration: 'none'
                        }}>
                        Comandapp
                    </span>
                    </Link>
                </li>
            </ul>
            {/*</div>*/}
        </div>
    )
}
export default MenuHome;