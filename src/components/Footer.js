import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Publibanner from "./publicidad/Publibanner";
import {addNewStateSubcarta} from '../redux/actions';
import {accessComandaHome} from '../data/tokens_access_comanda_home';

const Footer = ({
                    vermapa,
                    vermail,
                    restauranteData,
                    back,
                    closeloginmodal,
                    token,
                    clientProfile,
                    subcarta
                }) => {

    const style = {
        contenedor: {
            position: 'sticky',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            zIndex: 999,
        },
        boton: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            // background: 'white',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '-5px 5px 10px #bfbfbf, 5px -5px 10px #ffffff',

        },
        boton2: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '5px 5px 10px #e0e0e0, -5px -5px 10px #ffffff',

        },
        boton_retroceso: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            // background: 'white',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: 'rgb(255 0 0) 0px 0px 10px, rgb(226 226 226) 5px 5px 10px'
        },
        link_boton: {
            border: 'none !important',
            position: 'relative',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
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
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            boxShadow: '-10px 10px 20px #bfbfbf',
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
            width: '6.5em',
            height: '3.5em',
            padding: '.4em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '2px solid grey',
            borderRadius: '20px',
            // background: 'white',
            overflow: 'hidden',

            position: 'relative',
            background: 'linear-gradient(225deg, #e6e6e6, #ffffff)',
            // boxShadow:  '-10px 10px 20px #bfbfbf, 10px -10px 20px #ffffff',
            boxShadow: '-10px 10px 20px #bfbfbf',
        },
        comanda_home_img: {
            width: '100%',
            // height: '100%'
        },
        botonera: {
            // boxShadow:  '5px 5px 10px #e0e0e0, 0px 0px 10px #ffffff',
            // boxShadow:  '5px 5px 10px #e0e0e0',
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

    let linkWathsapp = 'whatsapp://send?text=' + restauranteData[0].nombre_restaurante + ' ' + window.location.protocol + '//' + window.location.host + '?' + token;
    let linkTelegram = 'tg:msg_url?url=' + window.location.protocol + '//' + window.location.host + '?' + token + '&text=' + restauranteData[0].nombre_restaurante;

    return (
        <div className="cont_footer_absolut">
            <div style={style.contenedor}>
                {
                    //GO BACK ICON
                    back === '/' ?
                        subcarta ?
                            // <span>subcarta</span>//cambiar addNewStateSubcarta a false
                            //SUBCARTA(RENDER HERE) -> TO CAT [-* SUBCARTA *-]
                            <Fragment>
                                <img
                                    onClick={() => addNewStateSubcarta(false)}
                                    style={style.link_boton}
                                    src="./assets/img/footer/ico-back.svg"
                                    alt="imagen de footer"
                                />
                            </Fragment>
                            :
                            // <span>cat men & cart</span>
                            // CATEGORY(RENDER HERE) -> INIT APP [-* CATEGORY MENU AND CARTA *-]
                            <Link style={style.link_boton} to={back}>
                                <img
                                    style={style.boton_retroceso}
                                    src="./assets/img/footer/ico-back.svg"
                                    /*ico-back-red.svg*/
                                    alt="imagen de footer"
                                />
                            </Link>
                        :
                        subcarta ?
                            // <span>subcarta carta</span>
                            //SUBCAT(RENDER HERE) -> TO SUBCARTA [-* SUBCATEGORY OF CARTA *-]
                            <Fragment>
                                <Link style={style.link_boton} to={back}>
                                    <img
                                        style={style.link_boton}
                                        src="./assets/img/footer/ico-back.svg"
                                        alt="imagen de footer"
                                    />
                                </Link>
                            </Fragment>
                            :
                            // <span>subcarta menu</span>
                            //SUBCAT(RENDER HERE) -> TO MENU CATEGORY [-* SUBCATEGORY OF MENU *-]
                            // use wordKey of selectedProduct reducer to render menu category
                            <Fragment>
                                <Link style={style.link_boton} to={back}>
                                    <img
                                        style={style.link_boton}
                                        src="./assets/img/footer/ico-back.svg"
                                        alt="imagen de footer"
                                    />
                                </Link>
                            </Fragment>
                }
                {/*// REST OF ICONS*/}
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

                            <ul style={style.botonera}
                                className={viewinfo ? 'opacity cont_extra submenu' : 'opacity_none submenu'}>
                                <li className={viewinfo ? 'child_1 no_opa_trans' : null}>
                                    <a style={style.boton2}
                                       href={`tel:${restauranteData.length > 0 ? restauranteData[0].telefono : null}`}>
                                        <img
                                            style={style.boton2}
                                            src="./assets/img/footer/ico-tel.svg"
                                            alt="imagen de footer"
                                        />
                                    </a>
                                </li>
                                <li className={viewinfo ? 'child_2 no_opa_trans' : null}>
                                    <img
                                        onClick={vermapa}
                                        style={style.boton2}
                                        src="./assets/img/footer/ico-gps.svg"
                                        alt="imagen de footer"
                                    />
                                </li>
                                <li className={viewinfo ? 'child_3 no_opa_trans' : null}>
                                    <img
                                        onClick={vermail}
                                        style={style.boton2}
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
                            <ul style={style.botonera}
                                className={viewshare ? 'opacity cont_extra submenu' : 'opacity_none submenu'}>
                                <li className={viewshare ? 'child_1 no_opa_trans' : null}>
                                    <a href={linkTelegram}
                                    >
                                        <img
                                            // onClick={vermail}
                                            className={'telegram'}
                                            style={style.boton}
                                            src="./assets/img/footer/telegrama.svg"
                                            alt="icono de Telegram"
                                        />
                                    </a>
                                </li>
                                <li className={viewshare ? 'child_2 no_opa_trans' : null}>
                                    <a href={linkWathsapp}
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
                        {accessComandaHome.find(existToken => existToken.token === token) ?
                            clientProfile.telefono.length === 0 ?
                                <div style={style.comanda_home_cont_button}
                                     onClick={closeloginmodal}
                                >
                                    <img style={style.comanda_home_img}
                                         src="./assets/img/homecomanda/comandapp_home_300.png"
                                         alt="imagen botón comandaHome"/>
                                </div>
                                :
                                <Link to="/comandappHome">
                                    <div style={style.comanda_home_cont_button}
                                         onClick={closeloginmodal}
                                    >
                                        <img style={style.comanda_home_img}
                                             src="./assets/img/homecomanda/comandapp_home_300.png"
                                             alt="imagen botón comandaHome"/>
                                    </div>
                                </Link>
                            :
                            <div style={style.comanda_home_cont_button}
                                 className="lightOpacity"
                            >
                                <img style={style.comanda_home_img}
                                     src="./assets/img/homecomanda/comandapp_home_300.png"
                                     alt="imagen botón comandaHome"/>

                            </div>
                        }
                    </Fragment>
                    :
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
        token: state.Token.token,
        clientProfile: state.ClientProfile.clientProfile,
        subcarta: state.SwitchMenu.subcarta
    }
}

export default connect(mapStateToProps)(Footer);
