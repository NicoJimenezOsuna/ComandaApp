import React, {Fragment} from 'react'
import {ReactComponent as Phoneicon} from "../../icons/homecomanda/llamada.svg";
import {ReactComponent as Domicilio} from "../../icons/homecomanda/entrega-a-domicilio.svg";
import {ReactComponent as Nombre} from "../../icons/homecomanda/nombre.svg";
import {ReactComponent as Cpostal} from "../../icons/homecomanda/cpostal.svg";
import {ReactComponent as Email} from "../../icons/homecomanda/correo-electronico.svg";
import {ReactComponent as Poblacion} from "../../icons/homecomanda/pueblo.svg";
import Buttonsubmit from "./Buttonsubmit";

const Input = ({
                   textlabel,
                   bgIcon,
                   settype,
                   setid,
                   setplaceholder,
                   setname,
                   icontype,
                   coloricon,
                   required
               }) => {

    const renderIconInput = () => {
        switch (icontype) {
            case 'telefono':
                return <Phoneicon style={input.icon}/>
                break;
            case 'direccion':
                return <Domicilio style={input.icon}/>
                break;
            case 'nombre':
                return <Nombre style={input.icon}/>
                break;
            case 'cpostal':
                return <Cpostal style={input.icon}/>
                break;
            case 'poblacion':
                return <Poblacion style={input.icon}/>
                break;
            case 'email':
                return <Email style={input.icon}/>
                break;
            default:
                return <Phoneicon style={input.icon}/>
        }

    }

    const input = {
        cont_input: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            // marginBottom: '15px',
            flexWrap: 'wrap',
            paddingRight: '1em',
            paddingLeft: '1em'
        },
        icon: {
            padding: '10px',
            background: bgIcon === null ? 'dodgerblue' : bgIcon,
            width: '3em',
            height: '3em',
            textAlign: 'center',
            borderRadius: '10px 0 0 10px',
            fill: coloricon !== null ? coloricon : 'black',
        },
        input: {
            fontSize: '1.4em',
            textIndent: '.3em',
            borderRadius: '0 10px 10px 0',
        },
        label: {
            display: 'block',
            width: '60%',
            textAlign: 'left',
            marginLeft: '20%'
        },
        smallrequired: {
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            paddingRight: '1em',
            paddingLeft: '1em'
        },
        parrafo: {
            fontSize: '80%',
            fontWeight: '400',
            color: 'cornflowerblue',
            opacity: '.7',
            zIndex: '-1'
        }
    }
    return (
        <Fragment>
            <label style={input.label} htmlFor="phone">{textlabel !== null > 0 ? textlabel : null}</label>
            <div style={input.cont_input}>
                {/*<Phoneicon style={phone.icon}/>*/}
                {renderIconInput()}
                <input style={input.input}
                       type={settype}
                       id={setid}
                       placeholder={setplaceholder}
                       name={setname}
                />
            </div>
            <div className="smallrequired" style={required ? null : {marginBottom: '15px'}}>
                <p style={input.parrafo}>{required ? 'requerido' : null}</p>
            </div>
        </Fragment>

    )
}


export default Input;