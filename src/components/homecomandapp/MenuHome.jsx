import React from 'react';
import {ReactComponent as Menusquare} from "../../icons/homecomanda/menu_square.svg";


const MenuHome = ({expandMenuHome, expandmenu}) => {
    const menu = {
        cont_menu: {
            position: 'absolute',
            top: 0,
            left: 0,
            // backgroundColor: 'pink',
            boxShadow: 'rgba(0, 0, 0, .376) 1px 18px 2rem'

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
                <li className="lioptionsmenuhome">Datos de envío</li>
                <li className="lioptionsmenuhome">Envíar pedido</li>
                <li className="lioptionsmenuhome">Estado de pedido</li>
                <li className="lioptionsmenuhome">Histórico pedidos</li>
            </ul>
            {/*</div>*/}
        </div>
    )
}
export default MenuHome;