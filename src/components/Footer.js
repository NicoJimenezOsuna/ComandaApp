import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CONNECT_TOKEN, firstRequest, URL} from "../data/restaurante";
import {protocol, urlImage} from "../utils/utils";
import Publibanner from "./publicidad/Publibanner";
import {ReactComponent as Close} from "../icons/footer/cerrar.svg";

const Footer = ({vermapa, vermail, restauranteData, back, changesubcat, changedView, closeloginmodal, token}) => {

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
            width: '3em',
            height: '3em'
        },
        cont_logo_basica_footer: {
            // maxWidth: '80%',
            maxHeight: '3em',
        },
        logo_basica_footer: {
            maxHeight: '3em',
            maxWidth: '100%'
        },
        div_boton: {
            position: 'relative',
            width: '3em',
            height: '3em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            border: '1.5px solid #707070',
            background: 'white',
        },
        img_div_info_rest: {
            width: '2.2em',
            height: '2.2em',
        },
        img_div_info_rest_close: {
            width: '2.2em',
            height: '2.2em',
            padding: '.3em'
        },
        img_div: {
            width: '2em',
            height: '2em',
            marginRight: '.3em'
        },
        cont_down_arrow: {
            opacity: '1',
            transform: 'none',
            transition: 'none'
        },
        down_arrow: {
            width: '1em',
            height: '1em',
            margin: '0 auto'
        },
        comanda_home_cont_button: {
            width: '6em',
            height: '3em',
            padding: '.3em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid grey',
            borderRadius: '20px',
            background: 'white',
            overflow: 'hidden'
        },
        comanda_home_img: {
            width: '100%',
            height: '100%'
        }
    }

    const [viewinfo, getViewinfo] = useState(false)
    const [viewshare, getViewshare] = useState(false)


    const viewInfo = () => {
        viewinfo ? getViewinfo(false) : getViewinfo(true)
        if (viewshare) {
            getViewshare(false)
        }
    }

    const viewShare = () => {
        viewshare ? getViewshare(false) : getViewshare(true);
        if (viewinfo) {
            getViewinfo(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', () => {

        })
    })

    let link = 'whatsapp://send?text='+ restauranteData[0].nombre_restaurante + ' ' + window.location.protocol + '//' + window.location.host + '?' + token;

    return (
        <div className="cont_footer_absolut">
            <div style={style.contenedor}>
                {changesubcat === false ?
                    back === '/categoria' ?
                        <Link style={style.boton} to={back}>
                            <img
                                style={style.boton}
                                src="./assets/img/footer/ico-back.svg"
                                alt="imagen de footer"
                            />
                        </Link>
                        :
                        <Link style={style.boton} to={back}>
                            <img
                                style={style.boton}
                                src="./assets/img/footer/ico-back_red.svg"
                                alt="imagen de footer"
                            />
                        </Link>
                    :
                    <img
                        onClick={changedView}
                        style={style.boton}
                        src="./assets/img/footer/ico-back.svg"
                        alt="imagen de footer"
                    />
                }
                {restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                    <Fragment>
                        <div className="menu"
                             style={style.div_boton}
                             onClick={viewInfo}
                        >
                            {viewinfo ?
                                <img
                                    style={style.img_div_info_rest_close}
                                    src="./assets/img/footer/cerrar_red.svg"
                                    alt="imagen de footer"
                                />
                                :
                                <img
                                    style={style.img_div_info_rest}
                                    src="./assets/img/footer/info_rest.svg"
                                    alt="imagen de footer"
                                />
                            }

                            <ul className={viewinfo ? 'opacity cont_extra submenu' : 'opacity_none submenu'}>
                                <li className={viewinfo ? 'child_1 no_opa_trans' : null}>
                                    <a style={style.boton}
                                       href={`tel:${restauranteData.length > 0 ? restauranteData[0].telefono : null}`}>
                                        <img
                                            style={style.boton}
                                            src="./assets/img/footer/ico-tel.svg"
                                            alt="imagen de footer"
                                        />
                                    </a>
                                </li>
                                <li className={viewinfo ? 'child_2 no_opa_trans' : null}>
                                    <img
                                        onClick={vermapa}
                                        style={style.boton}
                                        src="./assets/img/footer/ico-gps.svg"
                                        alt="imagen de footer"
                                    />
                                </li>
                                <li className={viewinfo ? 'child_3 no_opa_trans' : null}>
                                    <img
                                        onClick={vermail}
                                        style={style.boton}
                                        src="./assets/img/footer/ico-mail.svg"
                                        alt="imagen de footer"
                                    />
                                </li>
                                <li style={style.cont_down_arrow}>
                                    <img
                                        style={style.down_arrow}
                                        src="./assets/img/footer/arrow_down.svg"
                                        alt="down arrow"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="menu"
                             style={style.div_boton}
                             onClick={viewShare}
                        >
                            {viewshare ?
                                <img
                                    style={style.img_div_info_rest_close}
                                    src="./assets/img/footer/cerrar_red.svg"
                                    alt="imagen de footer"
                                />
                                :
                                <img
                                    style={style.img_div}
                                    src="./assets/img/footer/compartir.svg"
                                    alt="imagen de footer"
                                />
                            }
                            <ul className={viewshare ? 'opacity cont_extra submenu' : 'opacity_none submenu'}>
                                <li className={viewshare ? 'child_1 no_opa_trans' : null}>
                                    <img
                                        // onClick={vermail}
                                        style={style.boton}
                                        src="./assets/img/footer/telegrama.svg"
                                        alt="icono de Telegram"
                                    />
                                </li>
                                <li className={viewshare ? 'child_2 no_opa_trans' : null}>
                                    <a href={link}
                                    >
                                        <img
                                            // onClick={vermail}
                                            style={style.boton}
                                            src="./assets/img/footer/whatsapp.svg"
                                            alt="icono de whatsapp"
                                        />
                                    </a>
                                </li>
                                <li style={style.cont_down_arrow}>
                                    <img
                                        style={style.down_arrow}
                                        src="./assets/img/footer/arrow_down.svg"
                                        alt="down arrow"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div style={style.comanda_home_cont_button}
                             onClick={closeloginmodal}
                        >
                            <img style={style.comanda_home_img}
                                 src="./assets/img/homecomanda/comandapp_home_300.png" alt=""/>
                        </div>
                    </Fragment>
                    :
                    // null
                    // <div style={style.cont_logo_basica_footer}>
                    // 	<img style={style.logo_basica_footer} src={urlImage() + restauranteData[0].logo} alt=""/>
                    // </div>
                    <div style={style.cont_logo_basica_footer}>
                        <Publibanner/>
                    </div>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Footer);
