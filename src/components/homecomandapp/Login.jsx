import React, {Fragment, useState, useEffect} from 'react';
import {ReactComponent as Phoneicon} from "../../icons/homecomanda/llamada.svg";
import {ReactComponent as IconClose} from "../../icons/times-circle-regular.svg";
import Input from "./Input";
import Buttonsubmit from "./Buttonsubmit";
import {connect} from 'react-redux';
import axios from "axios";
import {userHeader} from '../../utils/utils';
import {addClientProfile} from '../../redux/actions/index';
import {Redirect} from 'react-router'

const Login = ({
                   closeloginmodal,
                   reduxToken
               }) => {
    const login = {
        cont_form: {
            width: '100%',
            height: 'auto',
            position: 'relative'
        },
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',


        },
        img: {
            width: '10em',
            height: '5em'
        },
        error: {
            position: 'absolute',
            textAlign: 'center',
            width: '80%',
            color: 'white',
            // margin: '.2em 1em',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '.5em 0',
            background: '#fe4949',
            borderRadius: '10px',

            // height: '5em',
            marginBottom: '30px'
        }
    }
    const [messageErrorConection, getMessageErrorConection] = useState('');
    const [phone, getPhone] = useState('')
    const [errorsProfile, getErrorsProfile] = useState({
        telefono: ''
    })
    const [inputok, getInputOk] = useState(false);
    const [redirectAppHomeView, getRedirectAppHomeView] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let numphone = phone;
        const token = reduxToken;
        const url = `http://restaurante.comandapp.es/api/ws/5/${token}/${numphone}`;
        // http://restaurante.comandapp.es/api/ws/5/cLZDdvFTJcl5cWG/666666666
        if (inputok) {
            let datos;
            axios.get(url, userHeader)
                .then(response => {
                    // addClientProfile({telefono: response.})
                    // cp: null
                    // direccion: "Las Gaunas"
                    // email: null
                    // htpcliente_id: 1
                    // nombre: "Aurelio"
                    // poblacion: null
                    if (response.data.data.mensaje === 'OK') {
                        datos = response.data.data.respuesta[0];
                        datos = {...datos, telefono: numphone};
                        addClientProfile(datos)
                    } else {
                        addClientProfile({telefono: numphone});
                    }
                    getRedirectAppHomeView(true);
                })
                .catch(error => {
                    getMessageErrorConection('¡¡Error!!. Imposible conectar con el servidor.')
                    setTimeout(function () {
                        getMessageErrorConection('');
                    }, 2000)
                })
        } else {
            getErrorsProfile({telefono: 'Debes introducir un número de teléfono'})
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        if (value === '') {
            getErrorsProfile({
                ...errorsProfile,
                "telefono": "El campo es requerido"
            })
            getInputOk(false);
            return;
        }
        if (!/[0-9]/.test(value)) {
            getErrorsProfile({
                ...errorsProfile,
                "telefono": "Sólo se admiten números"
            })
            getInputOk(false);
            return;
        }
        if (value.length < 9 && value !== '') {
            getErrorsProfile({
                ...errorsProfile,
                "telefono": "Tiene que ser mayor de 9 dígitos"
            })
            getInputOk(false);
            return;
        }
        getErrorsProfile({
            ...errorsProfile,
            "telefono": "",
        })
        getPhone(value);
        getInputOk(true)
    }

    if (redirectAppHomeView) {
        return <Redirect to='/comandappHome'/>;
    }

    return (
        <Fragment>
            <IconClose
                style={{color: 'rgba(0,0,0,.4', width: '3em', margin: '-5px 0px 0px -20px'}}
                onClick={closeloginmodal}
            />
            <div style={login.cont_img}>
                <img id="img_boton_comanda"
                     style={login.img}
                     src="./assets/img/homecomanda/comandapp_home_300.png" alt="logo comandahome socialpymes"/>
            </div>
            <form id="form_login_home"
                  onSubmit={handleSubmit}
                  style={login.cont_form}>
                {messageErrorConection !== '' ?
                    <p
                        style={login.error}
                    >{messageErrorConection}</p>
                    :
                    null
                }
                <Input
                    settype="number"
                    setid="telefono"
                    setplaceholder="teléfono"
                    setname="telefono"
                    icontype={'telefono'}
                    textlabel={null}
                    bgIcon={null}
                    textlabel={'Introduce tu teléfono:'}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                    login={true}
                />
                <Buttonsubmit/>
            </form>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        reduxToken: state.Token.token
    }
}

export default connect(mapStateToProps)(Login);