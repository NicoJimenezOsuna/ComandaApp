import React, {Fragment, useEffect, useState} from "react";
/*
 * IMPORT COMPONENTS
 */
import Spinner from "../components/Spinner";
import Socialpymes from "../components/Socialpymes";
import Launch from "../components/Launch";
import {CONNECT_TOKEN, URL} from '../data/restaurante';
import {protocol} from '../utils/utils';
import {ReactComponent as LogoComanda} from "../icons/logo.svg";
import Errormessage from "../components/Errormessage";
// import {firstRequest} from '../data/restaurante';
import {ReactComponent as Refresh} from "../icons/refresh.svg";
import {connect} from 'react-redux';
import axios from "axios";
import {addProfile, addToken} from "../redux/actions";
import Seo from "../components/Seo/Seo";

const Launcher = ({restauranteData, reduxToken}) => {
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
    const [datos, getDatos] = useState({});
    //-----------
    const [mensaje, getMensaje] = useState('');
    const [noconnection, getNoconnection] = useState(false);
    const [isreload, getIsreload] = useState(false)

    useEffect(() => {
        let isConnect = true

        let paramsNow = window.location.search
        //OBTENER TOKEN DE URL
        if ((reduxToken.length <= 0) || (paramsNow !== reduxToken && paramsNow !== '')) {
            localStorage.clear();
            let token = paramsNow.substr(1);
            addToken(token)
        }


        let url = "//restaurante.comandapp.es/api/ws/0/";

        const firstRequest = async (
            protocol,
            url,
            token,
            getMensaje,
            getDatos,
            getNoconnection
        ) => {
            try {

                const userHeader = {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    }
                };
                // Make a request
                const response = await axios.get(`${protocol}${url}${token}`, userHeader);
                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);
                //MOSTRAR DEMO BÁSICA EN DICHO HOST
                if(window.location.host === 'democappbasica.socialpymes.com'){
                // if(window.location.host === 'localhost:3000' || window.location.host === '192.168.0.24:3000'){
                    toObject.data.tpsuscrip = 2
                }
                //to Localstorage
                if (isConnect) {
                    if (toObject.data.mensaje !== 'OK') {
                        getMensaje(toObject.data.mensaje)
                    } else {
                        getMensaje(toObject.data.mensaje)
                        addProfile(toObject.data)
                    }
                }
                await getDatos(toObject);
                // getNoconnection(false)
            } catch (error) {
                // getNoconnection(true)
                getMensaje('Error al conectar. Revise su conexión o token de acceso')
                console.log("error", error);
            }
        };


        firstRequest(protocol, url, reduxToken, getMensaje, getDatos)

        return () => isConnect = false
    }, [isreload, reduxToken]);

    const a = (value) => setTimeout(value => {
        getIsreload(false)
    }, 3000)

    const reload = () => {
        // firstRequest(protocol, URL, CONNECT_TOKEN, getMensaje, getDatos, getNoconnection);
        getIsreload(true)
        a(true)
    }

    return (
        <div style={launcher.princ}>
            {mensaje !== 'OK' ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <LogoComanda style={{height: '30%'}}/>
                    <div>
                        <div style={launcher.ComandApp}>
                            <span>ComandApp</span>
                        </div>
                        <div style={launcher.Tu_carta_digital}>
                            <span>Tu carta digital</span>
                        </div>
                    </div>
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
