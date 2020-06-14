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
import {firstRequest} from '../data/restaurante';
import {ReactComponent as Refresh} from "../icons/refresh.svg";

const Launcher = () => {
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
        firstRequest(protocol, URL, CONNECT_TOKEN, getMensaje, getDatos)
        // a()
        //OBTENER TOKEN DE URL
        let url = document.referrer;
        let longToken = 15;
        const token = url.substr(url.length - longToken);
        // alert(token)
    }, [isreload]);

    return (
        <div style={launcher.princ}>
            {mensaje !== 'OK' && !localStorage.getItem("comandaApp") ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <LogoComanda style={{height: '30%'}}/>
                    <div style={{width: '100%'}}>
                        <div style={launcher.ComandApp}>
                            <span>ComandApp</span>
                        </div>
                        <div style={launcher.Tu_carta_digital}>
                            <span>Tu carta digital</span>
                        </div>
                    </div>
                    <div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {noconnection === false ?
                            mensaje === 'ERROR NO HAY RESTAURANTE O RESTAURANTE INACTIVO' ?
                                <Errormessage mensaje={mensaje}/>
                                :
                                <Spinner/>
                            :
                            isreload === false ?
                                <Fragment>
                                    <Errormessage mensaje={'No existe conexión a intenet. Revise su cobertura'}/>
                                    <Refresh style={{width: '50%'}}
                                             onClick={reload}
                                    />
                                    <h1>Click to reload</h1>
                                </Fragment>
                                :
                                <Fragment>
                                    <Errormessage
                                        mensaje={'No existe conexión a intenet. Revise su cobertura'}/>
                                    <Refresh className={isreload ? 'reload' : null}
                                             style={{width: '50%'}}
                                             onClick={reload}
                                    />
                                    <h1>Loading...</h1>
                                </Fragment>
                        }
                    </div>
                    <Socialpymes style={{alignSelf: 'start'}}/>
                </div>
            ) : (
                <Launch/>
            )}
        </div>
    );
};

export default Launcher;
