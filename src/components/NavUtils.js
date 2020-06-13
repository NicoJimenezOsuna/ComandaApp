import React, {Fragment} from "react";
import Alergenos from './Alergenos';
import Qr from './Qr';
import {ReactComponent as Listicon} from "../icons/lista.svg";


const NavUtils = ({visible, codigoqr, pedidoViewHandler}) => {
    const style = {
        menu: {
            overflow: "visible",
            position: "relative",
            width: `100%`,
            height: `70px`,
            left: `0px`,
            padding: `10px`,
            // top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            // justifyContent: 'flex-end',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
        },
        list: {
            width: `100%`,
            height:  `50px`,
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            margin: '0 2.5px 0 2.5px',
            padding: '5px',
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)'
        }

    };

    return (
        <Fragment>
            <div style={style.menu}>
                <Qr codigoqr={codigoqr}/>
                <Alergenos visible={visible}/>
                <Listicon
                    style={style.list}
                    onClick={pedidoViewHandler}/>
            </div>
        </Fragment>
    );
};

export default NavUtils;