import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CONNECT_TOKEN, firstRequest, URL} from "../data/restaurante";
import {protocol} from "../utils/utils";

const Footer = ({vermapa, vermail, restauranteData, back, changesubcat, changedView}) => {

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
        }
    }

    //
    //
    // useEffect(() => {
    //     if(!restauranteData){
    //         firstRequest(protocol, URL, CONNECT_TOKEN)
    //     }
    // }, [restauranteData]);

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
                <a style={style.boton} href={`tel:${restauranteData.length > 0 ? restauranteData[0].telefono : null}`}>
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

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Footer);
