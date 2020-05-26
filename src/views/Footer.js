import React, {Fragment, useEffect, useState} from 'react';
import Mapamodal from '../components/Mapamodal';
// import Mailmodal from '../components/Mailmodal';

import {globalinfo} from "../data/data";

const Footer = () => {

    const style = {
        contenedor: {
            // position: 'relative',
            // border: '2px solid rgba(112,112,112,1)',
            backgroundColor: `rgba(230, 230, 230, 1)`,
            borderRadius: `100px`,
            position: 'absolute',
            top: '1116px',
            left: `40px`,
            height: `105px`,
            width: `639px`,
            margin: 'auto',
            display: 'flex'

        },
        boton: {
            position: 'relative',
            height: `105px`,
            width: `105px`,
            margin: 'auto',
            //  },
            // boton : {
            //   filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            //   position: 'relative',
            //   overflow: 'visible',
            //   width: `105px`,
            //   height: `105px`,
            //   // left: `0px`,
            //   // top: `0px`,
            //   // textAlign: 'center',
            //   // fontFamily: 'Tahoma',
            //   // fontSize: `40px`,
            //   color: 'rgba(112, 112, 112, 1)',
            //   borderRadius: `50px`,
            //   // border: `2px rgba(112, 112, 112, 1) solid`,
            //   backgroundColor: 'white'
        }

    }

    const [verMapamodal, getMapamodal] = useState(false);
    // const [verModalMail, getVerModalMail] = useState(false);

    let vermapa = () => {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }//sirve para actualizar el estado
    // const verMail = () => {
    //     !verModalMail ? getVerModalMail(true) : getVerModalMail(false);
    // }//sirve para actualizar el estado

    useEffect(() => {
        getMapamodal(verMapamodal);
    }, []);

    return (
        <Fragment>
            <Mapamodal
                vermapa={vermapa}
                verMapamodal={verMapamodal}
            />
            {/*<ModalMail*/}
            {/*    verMail={verMail}*/}
            {/*/>*/}

            <div style={style.contenedor}>
                <img
                    style={style.boton} src="./assets/img/footer/ico-back.svg" alt="imagen de footer"
                />
                <a
                    style={style.boton}
                    href={`tel:${globalinfo.telefono}`}
                >
                    <img src="./assets/img/footer/ico-tel.svg" alt="imagen de footer"/>
                </a>
                <a
                    style={style.boton}
                    onClick={vermapa}
                >
                    <img src="./assets/img/footer/ico-gps.svg" alt="imagen de footer"/>
                </a>
                {/*<img style={style.boton} src="./assets/img/footer/ico-gps.svg" alt="imagen de footer"/>*/}
                <img style={style.boton} src="./assets/img/footer/ico-mail.svg" alt="imagen de footer"/>
            </div>
        </Fragment>
    )
}
export default Footer;
