import React, {Fragment} from 'react';
import {ReactComponent as Phoneicon} from "../../icons/homecomanda/llamada.svg";
import {ReactComponent as IconClose} from "../../icons/times-circle-regular.svg";

const Login = ({closeloginmodal}) => {
    const login = {
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        img: {
            width: '10em',
            height: '5em'
        },
        cont_form: {
            width: '100%',
            height: 'auto',

        },
        cont_input: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '15px'
        },
        icon: {
            padding: '10px',
            background: 'dodgerblue',
            minWidth: '3em',
            maxHeight: '3em',
            textAlign: 'center',
            borderRadius: '10px 0 0 10px'
        },
        input:{
            fontSize: '1.4em',
        }
    }

    return (
        <Fragment>
            <IconClose
                style={{color: 'rgba(0,0,0,.4', width: '3em'}}
                onClick={closeloginmodal}
            />
            <div style={login.cont_img}>
                <img id="img_boton_comanda"
                     style={login.img}
                     src="./assets/img/homecomanda/comandapp_home_300.png" alt="logo comandahome socialpymes"/>
            </div>
            <div id="form_login_home" style={login.cont_form}>
                <label htmlFor="phone">Introduce tu teléfono:</label>
                <div style={login.cont_input}>
                    <Phoneicon style={login.icon}/>
                    <input style={login.input}
                        type="number"
                           id="phone"
                           placeholder="teléfono"
                           name="phone"
                    />
                </div>
                <button
                    type="submit"
                    id="submit_login"
                >login
                </button>
            </div>
        </Fragment>
    )
}
export default Login;