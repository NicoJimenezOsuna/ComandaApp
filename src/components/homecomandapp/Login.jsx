import React, {Fragment} from 'react';
import {ReactComponent as Phoneicon} from "../../icons/homecomanda/llamada.svg";
import {ReactComponent as IconClose} from "../../icons/times-circle-regular.svg";
import Input from "./Input";
import Buttonsubmit from "./Buttonsubmit";

const Login = ({closeloginmodal}) => {
    const login = {
        cont_form: {
            width: '100%',
            height: 'auto',

        },
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
                <Input
                    settype="number"
                    setid="phone"
                    setplaceholder="teléfono"
                    setname="phone"
                    icontype={'telefono'}
                    textlabel={null}
                    bgIcon={null}
                    textlabel={'Introduce tu teléfono:'}
                />
                <Buttonsubmit/>
            </div>
        </Fragment>
    )
}
export default Login;