import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Mapamodal from '../components/Mapamodal';
import Mailmodal from '../components/Mailmodal';

import {globalinfo} from "../data/data";

const Footer = () => {

    const style = {
        contenedor: {
            position: 'sticky',
            // border: '2px solid rgba(112,112,112,1)',
            backgroundColor: `rgba(230, 230, 230, 1)`,
            bottom: 0,
            width: `100%`,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            zIndex: 999,
            borderRadius: '20px'

        },
        boton: {
            width: '3em'
            // position: 'relative',
            // height: `105px`,
            // width: `105px`,
            // margin: 'auto',
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
    const [verMailmodal, getMailmodal] = useState(false);

    let vermapa = () => {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }//sirve para actualizar el estado
     const vermail = () => {
         !verMailmodal ? getMailmodal(true) : getMailmodal(false);
     }//sirve para actualizar el estado

    useEffect(() => {
        getMapamodal(verMapamodal);
        getMailmodal(verMailmodal);
    }, []);

    return (
        <div className="cont_footer_absolut">
            <Mapamodal
                vermapa={vermapa}
                verMapamodal={verMapamodal}
            />
            <Mailmodal
                vermail={vermail}
                verMailmodal={verMailmodal}
            />
            {/*<ModalMail*/}
            {/*    verMail={verMail}*/}
            {/*/>*/}

            <div style={style.contenedor}>
                <img
                    style={style.boton}
                    src="./assets/img/footer/ico-back.svg"
                    alt="imagen de footer"
                />
                <a href={`tel:${globalinfo.telefono}`}>
                    <img
                        style={style.boton}
                        src="./assets/img/footer/ico-tel.svg"
                        alt="imagen de footer"/>
                </a>
                <img
                    onClick={vermapa}
                    style={style.boton}
                    src="./assets/img/footer/ico-gps.svg"
                    alt="imagen de footer"/>
                {/*<img style={style.boton} src="./assets/img/footer/ico-gps.svg" alt="imagen de footer"/>*/}
                <img
                    onClick={vermail}
                    style={style.boton}
                    src="./assets/img/footer/ico-mail.svg"
                    alt="imagen de footer"/>
            </div>
        </div>
    )
}
export default Footer;
