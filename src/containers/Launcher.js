import React, {Fragment, useEffect, useState} from "react";
/*
 * IMPORT COMPONENTS
 */
import Spinner from "../components/Spinner";
import Socialpymes from "../components/Socialpymes";
import Launch from "../components/Launch";
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API
} from '../data/connect_data_restaurantes';
import {ReactComponent as LogoComanda} from "../icons/logo.svg";
import Errormessage from "../components/Errormessage";
import {connect} from 'react-redux';
import axios from "axios";
import {addProfile, addToken, addArrPubli} from "../redux/actions";

const Launcher = ({reduxToken}) => {
    const launcher = {
        princ: {
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            padding: '20px'
        },
        ComandApp: {
            left: `153px`,
            top: `466px`,
            overflow: "visible",
            width: `415px`,
            whiteSpace: "nowrap",
            textAlign: "left",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: `50px`,
            color: "rgba(112,112,112,1)"
        },
        Tu_carta_digital: {
            overflow: "visible",
            whiteSpace: "nowrap",
            textAlign: "right",
            fontFamily: "Papyrus",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: `20px`,
            color: "rgba(112,112,112,1)"
        }
    };
    //no tocar(usado en firstRequest función)
    // const [datos, getDatos] = useState({});
    //-----------
    const [mensaje, getMensaje] = useState('');
    // const [noconnection, getNoconnection] = useState(false);
    // const [isreload, getIsreload] = useState(false)

    useEffect(() => {
        let isConnect = true

        let paramsNow = window.location.search
        //OBTENER TOKEN DE URL
        if ((reduxToken.length <= 0) || (paramsNow !== reduxToken && paramsNow !== '')) {
            localStorage.clear();
            let token = paramsNow.substr(1);
            addToken(token)
        }

        const firstRequest = async (
            protocol,
            url,
            pathAPI,
            token,
            getMensaje,
            // getDatos,
            header,
            getNoconnection
        ) => {
            try {
                // Make a request cLZDdvFTJcl5cWG
                // "//restaurante.comandapp.es/api/ws/0/";
                const response = await axios.get(`${protocol}${url}${pathAPI}0/${token}`, header);
                //MOSTRAR DEMO BÁSICA EN DICHO HOST
                if (window.location.host === 'democappbasica.socialpymes.com') {
                    //FOR SIMPLE COMANDA MODE
                    // if(window.location.host === 'localhost:3000' || window.location.host === '192.168.0.24:3000'){
                    response.data.data.tpsuscrip = 2
                }
                //to Localstorage
                if (isConnect) {
                    if (response.data.data.mensaje !== 'OK') {
                        getMensaje(response.data.data.mensaje)
                    } else {
                        // getMensaje(toObject.data.mensaje)
                        getMensaje(response.data.data.mensaje)
                        // addProfile(toObject.data)
                        addProfile(response.data.data)
                        // addArrPubli(toObject.data.publicidad)
                        addArrPubli(response.data.data.publicidad)
                    }
                }
                // await getDatos(response.data.data);
                // getNoconnection(false)
            } catch (error) {
                // getNoconnection(true)
                getMensaje('Error al conectar. Revise su conexión o token de acceso')
                console.log("error", error);
            }
        };


        firstRequest(HTTP_PROTOCOL, URL_MAIN, PATH_API, reduxToken, getMensaje, USER_HEADERS)

        return () => isConnect = false
    }, [reduxToken]);

    const [orientationScreen, getOrientationScreen] = useState('')

    useEffect(() => {
        function detectOrientation() {
            getOrientationScreen(window.screen.orientation.type)
        }

        window.addEventListener('orientationchange', detectOrientation)
        return () => window.removeEventListener('orientationchange', detectOrientation);
    })

    // const a = (value) => setTimeout(value => {
    //     getIsreload(false)
    // }, 3000)

    // const reload = () => {
    //     // firstRequest(protocol, URL, CONNECT_TOKEN, getMensaje, getDatos, getNoconnection);
    //     getIsreload(true)
    //     a(true)
    // }

    return (
        <div style={launcher.princ}>
            {mensaje !== 'OK' ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '100%'
                }}>
                    {orientationScreen === 'portrait-primary' ?
                        <Fragment>
                            <LogoComanda style={{height: '30%'}}/>
                            <div style={{width: '100%'}}>
                                <img src="./assets/img/comanda_free_azul_no_logo.png" alt="Comandapp free"
                                     style={{
                                         width: '100%',
                                         height: '100%'
                                     }}/>
                            </div>
                        </Fragment>
                        :
                        <div style={{width: '100%'}}>
                            <img src="./assets/img/comanda_free_azul_con_logo.png" alt="Comandapp free"
                                 style={{
                                     width: '100%',
                                     height: '100%'
                                 }}/>
                        </div>
                    }
                    <div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {mensaje === 'Error al conectar. Revise su conexión o token de acceso' ?
                            // mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                            <Errormessage mensaje={mensaje}/>
                            :
                            null
                        }
                        {mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                            // mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                            <Errormessage mensaje={mensaje}/>
                            :
                            null
                        }
                        {mensaje === '' ? <Spinner/> : null}
                    </div>
                    <Socialpymes style={{alignSelf: 'start'}}/>
                </div>
            ) : (
                <Launch/>
            )}
        </div>
    );
};


function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    }
}

export default connect(mapStateToProps)(Launcher);
