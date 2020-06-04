import React, {useEffect, useState} from 'react';

const Footer = ({vermapa, vermail, datosrestaurante}) => {

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
        }
    }

    const [datosRestaurante, getDatosRestaurante] = useState({})

    useEffect(() => {
        getDatosRestaurante(datosrestaurante)
    }, [datosrestaurante]);

    return (
        <div className="cont_footer_absolut">
            <div style={style.contenedor}>
                <img
                    style={style.boton}
                    src="./assets/img/footer/ico-back.svg"
                    alt="imagen de footer"
                />
                <a href={`tel:${datosRestaurante.telefono}`}>
                    <img
                        style={style.boton}
                        src="./assets/img/footer/ico-tel.svg"
                        alt="imagen de footer"
                    />
                </a>
                <img
                    onClick={vermapa}
                    style={style.boton}
                    src="./assets/img/footer/ico-gps.svg"
                    alt="imagen de footer"
                />
                <img
                    onClick={vermail}
                    style={style.boton}
                    src="./assets/img/footer/ico-mail.svg"
                    alt="imagen de footer"
                />
            </div>
        </div>
    )
}
export default Footer;
