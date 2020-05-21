import React, { Fragment, useEffect, useState } from "react";
import Alergenos from '../components/Alergenos';
import Qr from '../components/Qr'


const NavUtils = () => {
    const style = {
        menu: {
            overflow: "visible",
            position: "relative",
            width: `720px`,
            height: `107px`,
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


    return (
        <Fragment>
            <div
                style={style.menu}
            >
                <Qr />
                <Alergenos />
            </div>
        </Fragment>
    );
};

export default NavUtils;