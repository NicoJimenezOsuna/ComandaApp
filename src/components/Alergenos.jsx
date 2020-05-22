import React, {Fragment, useEffect, useState} from 'react';
import Allergensmodal from './Allergensmodal';

import { ReactComponent as IconClose } from "../icons/times-circle-regular.svg";

/*
 * IMPORT DATA FROM SRC/DATA/DATA.JSON
 */
import { allergens } from "../data/data.js";

const Alergenos = ({visible}) => {

    const style = {
        alergenos : {
            position: 'relative',
            whidth: `194px`,
            height:  `70px`,
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            padding: `5px 25px 5px 25px`,
            alignItems: 'center',
            fontFamily: 'Papyrus',
            fontSize: `1.7rem`,
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)'
        }
    }
    // console.log(allergens);

    return (
        <Fragment>
            
            <button 
                style={style.alergenos}
                onClick={visible}
                >
                !Alérgenos¡ 

            </button>
        </Fragment>
    )

}

export default Alergenos;