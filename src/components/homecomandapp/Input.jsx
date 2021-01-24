import React, {Fragment} from 'react'
import {ReactComponent as Phoneicon} from "../../icons/homecomanda/llamada.svg";
import {ReactComponent as Domicilio} from "../../icons/homecomanda/entrega-a-domicilio.svg";
import {ReactComponent as Nombre} from "../../icons/homecomanda/nombre.svg";
import {ReactComponent as Cpostal} from "../../icons/homecomanda/cpostal.svg";
import {ReactComponent as Email} from "../../icons/homecomanda/correo-electronico.svg";
import {ReactComponent as Poblacion} from "../../icons/homecomanda/pueblo.svg";

const Input = ({
                   textlabel,
                   bgIcon,
                   settype,
                   setid,
                   setplaceholder,
                   setname,
                   icontype,
                   coloricon,
                   required,
                   handleChange,
                   errorsProfile,
                   defaultValue,
                   login
               }) => {

    const renderIconInput = () => {
        switch (icontype) {
            case 'telefono':
                return <Phoneicon style={input.icon}/>
            case 'direccion':
                return <Domicilio style={input.icon}/>
            case 'nombre':
                return <Nombre style={input.icon}/>
            case 'cpostal':
                return <Cpostal style={input.icon}/>
            case 'poblacion':
                return <Poblacion style={input.icon}/>
            case 'email':
                return <Email style={input.icon}/>
            default:
                return <Phoneicon style={input.icon}/>
        }

    }
    if (errorsProfile) {
        console.log(errorsProfile)
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
        parrafo_required: {
            fontSize: '80%',
            fontWeight: '400',
            color: 'cornflowerblue',
            opacity: '.7',
            zIndex: '-1',
            alignSelf: 'flex-end'
        }
    }

    return (
        <Fragment>
            <label style={input.label} htmlFor={setid}>{textlabel !== null ? textlabel : null}</label>
            <div style={input.cont_input}>
                {/*<Phoneicon style={phone.icon}/>*/}
                {renderIconInput()}
                <input style={input.input}
                       defaultValue={defaultValue}
                       type={settype}
                       id={setid}
                       placeholder={setplaceholder}
                       name={setname}
                       onBlur={(e) => handleChange(e)}
                />
            </div>
            <div className="smallrequired" style={required ? null : {marginBottom: '15px'}}>
                {errorsProfile ?
                    errorsProfile[setname].length > 0 ?
                        <p className={errorsProfile[setname].length > 0 ? 'displayed' : 'displayed_none'}
                           style={{
                               color: 'red',
                               textAlign: login ? 'center' : 'inherit'
                           }}
                        >{errorsProfile[setname].length > 0 ? errorsProfile[setname] : null}</p>
                        :
                        <p style={input.parrafo_required}>{required ? 'requerido' : null}</p>
                    :
                    null
                }
            </div>
        </Fragment>

    )
}


export default Input;