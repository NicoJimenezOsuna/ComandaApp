import React from 'react';
import {ReactComponent as Menusquare} from "../../icons/homecomanda/menu_square.svg";


const MenuHome = ({expandMenuHome, expandmenu}) => {
    const menu = {
        cont_menu: {
            width: '5em',
            height: '5em',
            position: 'absolute',
            top: 0,
            left: 0,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: 'pink',
            borderRadius: '0 0 100%',
            boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
            overflow: 'hidden'
        },
        icon_menu: {
            marginTop: '1em',
            marginLeft: '1em',
            width: '2em',
            height: '2em'
        },
        cont_options_menu: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    };

    return (
        <div style={menu.cont_menu}
             className={expandmenu ? "nav-comandhome_expand" : "nav-comandhome"}
             onClick={expandMenuHome}
        >
            <Menusquare style={menu.icon_menu}/>
            <div>
                <ul style={menu.cont_options_menu}>
                    <li>datos contacto</li>
                    <li>mi ultimo pedido</li>
                    <li>estado de pedido</li>
                    <li>pedido actual</li>
                </ul>
            </div>
        </div>
    )
}
export default MenuHome;