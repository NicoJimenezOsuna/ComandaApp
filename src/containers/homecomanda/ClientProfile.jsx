import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import MenuHome from "../../components/homecomandapp/MenuHome";

const ClientProfile = ({restauranteData, clientProfile}) => {

    const [expandmenu, getExpandMenu] = useState(false);

    const expandMenuHome = () => {
        expandmenu ? getExpandMenu(false) : getExpandMenu(true);
    }

    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }

    return (
        <div className="subRoot">
            <MenuHome expandMenuHome={expandMenuHome}
                      expandmenu={expandmenu}
            />
            <h1>hola esto es profile</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        clientProfile: state.ClientProfile.clientProfile,
    }
}

export default connect(mapStateToProps)(ClientProfile);
