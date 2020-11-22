import React, {Fragment, useState} from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import Buttonsubmit from "./Buttonsubmit";
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import {connect} from 'react-redux';
import {addClientProfile} from '../../redux/actions/index'


const Profileuser = ({clientProfile}) => {

    const [errorEnvio, getErrorEnvio] = useState('');
    const [successfullSave, getSuccessfullSave] = useState('');
    const [valuesProfile, getValuesProfile] = useState({
        telefono: clientProfile.telefono,
        nombre: clientProfile.nombre,
        direccion: clientProfile.direccion,
        cp: clientProfile.cp,
        poblacion: clientProfile.poblacion,
        email: clientProfile.email,

    })
    const [errorsProfile, getErrorsProfile] = useState({
        telefono: '',
        nombre: '',
        direccion: '',
        cp: '',
        poblacion: '',
        email: '',

    })

    const handleChange = (e) => {
        e.preventDefault();

        const target = e.target;
        const name = target.name;
        const value = target.value;

        switch (name) {
            case 'telefono':
                if (value === '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "telefono": "El campo es requerido"
                    })
                    return;
                }
                if (!/[0-9]/.test(value)) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "telefono": "Sólo se admiten números"
                    })
                    return;
                }
                if (value.length < 9 && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "telefono": "Tiene que ser mayor de 9 dígitos"
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "telefono": "",
                })
                break;
            case 'nombre':
                if (value === '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "nombre": "El campo es requerido"
                    })
                    return;
                }
                if (/[0-9]/.test(value)) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "nombre": "No se admiten números en nombre"
                    })
                    return;
                }
                if (value.length < 3) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "nombre": "Mínimo tres letras para nombre",
                    })
                    return;
                }
                if (!/[a-zA-Z]/.test(value)) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "nombre": "Sólo se admite texto",
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "nombre": "",
                })
                break;
            case 'direccion':
                if (value === '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "direccion": "El campo es requerido"
                    })
                    return;
                }
                if (!/[A-Za-z0-9]/.test(value)) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "direccion": "Sólo texto y números"
                    })
                    return;
                }
                if (value.length < 5) {
                    getErrorsProfile({
                        ...errorsProfile,
                        "direccion": "Mínimo tres letras",
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "direccion": "",
                })
                break;
            case 'cp':
                if (value.length < 5 && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "cp": "Código Postal debe contener 5 dígitos ",
                    })
                    return;
                }
                if (!/[0-9]/.test(value) && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "cp": "Sólo se admiten números ",
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "cp": "",
                })
                break;
            case 'poblacion':
                if (!/[a-zA-Z]/.test(value) && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "direccion": "Sólo se admite texto",
                    })
                    return;
                }
                if (value.length < 2 && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "poblacion": "No es una dirección válida",
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "poblacion": "",
                })
                break;
            case 'email':
                if (!value.includes('@') && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "email": "Email incorrecto",
                    })
                    return;
                }
                if (!value.includes('.') && value !== '') {
                    getErrorsProfile({
                        ...errorsProfile,
                        "email": "Email incorrecto",
                    })
                    return;
                }
                getErrorsProfile({
                    ...errorsProfile,
                    "email": "",
                })
                break;
        }
        getValuesProfile({
            ...valuesProfile,
            [name]: value
        })
    }

    const dataUser = () => {
        if (valuesProfile.telefono.length > 0 &&
            valuesProfile.nombre.length > 0 &&
            valuesProfile.direccion.length > 0) {
            getErrorEnvio('')
            addClientProfile(valuesProfile)
            getSuccessfullSave('Guardado con éxito')
            setTimeout(function () {
                getSuccessfullSave('');
            }, 2000)
        } else {
            getErrorEnvio('¡¡Error!! Revise campos requeridos')
        }
    }

    return (
        <Fragment>
            <TitleSection title={'Datos de envío'}/>
            <ExplanationSection
                explanation={'Aquí podrás actualizar cualquier dato relacionado con los envíos y contacto.' +
                ' Los datos no serán enviados hasta que realices tu primer pedido.'}
            />
            <div id="userprofile">
                <Input
                    defaultValue={clientProfile.telefono}
                    pattern="[0-9]"
                    settype="number"
                    setid="telefono"
                    setplaceholder="teléfono"
                    setname="telefono"
                    icontype={'telefono'}
                    textlabel={'número de teléfono'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                <Input
                    defaultValue={clientProfile.nombre}
                    pattern="[a-zA-Z]"
                    settype="text"
                    setid="nombre"
                    setplaceholder="nombre"
                    setname="nombre"
                    icontype={'nombre'}
                    textlabel={'nombre de usuario'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                <Input
                    defaultValue={clientProfile.direccion}
                    pattern="[a-zA-Z]"
                    settype="text"
                    setid="direccion"
                    setplaceholder="dirección de entrega"
                    setname="direccion"
                    icontype={'direccion'}
                    textlabel={'dirección de envío'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                <Input
                    defaultValue={clientProfile.cp}
                    settype="number"
                    setid="cp"
                    setplaceholder="código postal"
                    setname="cp"
                    icontype={'cpostal'}
                    textlabel={'Código postal'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                <Input
                    defaultValue={clientProfile.poblacion}
                    settype="text"
                    setid="poblacion"
                    setplaceholder="población"
                    setname="poblacion"
                    icontype={'poblacion'}
                    textlabel={'Población'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                <Input
                    defaultValue={clientProfile.email}
                    settype="email"
                    setid="email"
                    setplaceholder="correo electrònico"
                    setname="email"
                    icontype={'email'}
                    textlabel={'correo electrònico'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                    handleChange={handleChange}
                    errorsProfile={errorsProfile}
                />
                {errorEnvio !== '' ?
                    <p style={{textAlign: 'center', color: 'red', textDecoration: 'underline'}}>
                        {errorEnvio}
                    </p>
                    :
                    null
                }
                {successfullSave !== '' ?
                    <p style={{textAlign: 'center', color: 'green', textDecoration: 'underline'}}>
                        {successfullSave}
                    </p>
                    :
                    null
                }
                <button id="submit_login"
                        onClick={dataUser}
                >Guardar
                </button>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        clientProfile: state.ClientProfile.clientProfile
    }
}

export default connect(mapStateToProps)(Profileuser);