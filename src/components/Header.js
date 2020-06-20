import React, {Fragment, useEffect} from "react";
import {ReactComponent as LogoComanda} from "../icons/logo.svg";
import {connect} from 'react-redux';
import {urlImage} from "../utils/utils";
import {ReactComponent as Logocomanda} from "../icons/logo.svg";

const Header = ({restauranteData}) => {
    const header = {
        grupo_17: {
            overflow: "visible",
            // position: "absolute",
            width: `100%`,
            // minHeight: `100px`,
            left: `0px`,
            top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '10px'
        },
        cont_comanda_social: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        cont_comanda_social_titulo: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'end'

        },
        grupo_12: {
            width: `2em`,
            height: `2em`
        },
        img_tipo: {
            position: "absolute",
            width: `4em`,
            left: `0px`,
            top: `20px`,
            overflow: "visible"
        },
        relativo: {
            position: 'relative',
            marginLeft: '.5em'
        },
        restaurante: {
            // backgroundColor:'red'
            fontSize: `1.3em`,
            fontFamily: 'Papyrus'
        },
        cont_logo_comanda: {
            display: 'flex',
            // marginRight: '4em',
            marginTop: '0.2em',
            width: '100%'
        },
        cont_logo_comanda_sp: {
            paddingTop: '5px',
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '4em',
            marginTop: '-.5em',
            width: '100%'
        }
    };

    return (
        <Fragment>
            <div style={header.grupo_17}>
                <div style={header.cont_comanda_social}>
                    <div style={header.cont_logo_comanda_sp}>
                    <LogoComanda
                        style={header.grupo_12}
                        alt="Logo de comandaApp"
                    />
                    <a href="https://socialpymesvlc.es">
                        <div style={header.relativo}>
                            <div id="powered_by">
                                <span style={{fontSize: '.6em'}}>powered by</span>
                            </div>
                            <img
                                style={header.img_tipo}
                                src="./assets/img/socialPymes_Imagotipo.png"
                                alt="Logo de socialpymes"
                            />
                        </div>
                    </a>
                </div>
                </div>
                    <div style={header.cont_logo_comanda}>
                        <div style={header.cont_comanda_social_titulo}>
                            {restauranteData.length > 0 ?
                                <img src={urlImage() + restauranteData[0].logo} alt="Logo de restaurante"
                                     style={{width: '25%'}}
                                />
                                :
                                // <Logocomanda/>
                                <img src={urlImage() + restauranteData[0].logo} alt=""/>
                            }
                            <span className="text-shadow"
                                  style={header.restaurante}
                            >
                        {restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : 'Restaurante'}
                            </span>
                        </div>
                    </div>


                {/*<div style={header.cont_comanda_social_titulo}>*/}
                {/*    {restauranteData.length > 0 ?*/}
                {/*        <img src={urlImage() + restauranteData[0].logo} alt="Logo de restaurante"*/}
                {/*             style={{width: '25%'}}*/}
                {/*        />*/}
                {/*        :*/}
                {/*        // <Logocomanda/>*/}
                {/*        <img src={urlImage() + restauranteData[0].logo} alt=""/>*/}
                {/*    }*/}
                {/*    <span className="text-shadow"*/}
                {/*          style={header.restaurante}*/}
                {/*    >*/}
                {/*        {restauranteData.length > 0 ? restauranteData[0].nombre_restaurante : 'Restaurante'}*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(Header);
