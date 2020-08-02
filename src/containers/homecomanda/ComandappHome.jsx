import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import MenuHome from "../../components/homecomandapp/MenuHome";
import Header from "../../components/Header";
import Profileuser from "../../components/homecomandapp/Profileuser";

const ComandappHome = ({restauranteData, clientProfile}) => {

    const menu = {
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '1em'

        },
        img: {
            width: '6em',
            height: '3em',
        },
    }

    const [expandmenu, getExpandMenu] = useState(false);

    const expandMenuHome = () => {
        expandmenu ? getExpandMenu(false) : getExpandMenu(true);
    }

    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }

    return (
        <div className="subRootHome">
            <Header/>
            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                <MenuHome expandMenuHome={expandMenuHome}
                          expandmenu={expandmenu}
                />
                <div style={menu.cont_img}>
                    <img id="img_boton_comanda"
                         style={menu.img}
                         src="./assets/img/homecomanda/comandapp_home_300.png" alt="logo comandahome socialpymes"/>
                </div>
                <div className={expandmenu ? 'reduce' : 'normal'}>
                    <Profileuser/>

                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        clientProfile: state.ClientProfile.clientProfile,
    }
}

export default connect(mapStateToProps)(ComandappHome);
