import React, { Fragment, useEffect, useState } from "react";
import Alergenos from '../components/Alergenos';
import Qr from '../components/Qr'

import { qr } from "../data/data.js";


const NavUtils = ({visible, codigoqr}) => {
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
        }

    };


// console.log(codigoqr)

    return (
        <Fragment>
            <div
                style={style.menu}
            >
                <Qr 
                    codigoqr={codigoqr}/>
                <Alergenos
                    visible={visible} 
                    />
            </div>
        </Fragment>
    );
};

export default NavUtils;