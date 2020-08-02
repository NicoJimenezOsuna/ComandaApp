import React, {Fragment} from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import Buttonsubmit from "./Buttonsubmit";
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import {connect} from 'react-redux';


const Profileuser = () => {

    return (
        <Fragment>
            <TitleSection title={'Datos de envío'}/>
            <ExplanationSection
                explanation={'Aquí podrás actualizar cualquier dato relacionado con los envíos y contacto.'}
            />
            <form id="userprofile" action="">
                <Input
                    settype="number"
                    setid="phone"
                    setplaceholder="teléfono"
                    setname="phone"
                    icontype={'telefono'}
                    textlabel={'número de teléfono'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                />
                <Input
                    settype="text"
                    setid="nombre"
                    setplaceholder="nombre"
                    setname="nombre"
                    icontype={'nombre'}
                    textlabel={'nombre de usuario'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                />
                <Input
                    settype="text"
                    setid="direccion"
                    setplaceholder="dirección de entrega"
                    setname="direccion"
                    icontype={'direccion'}
                    textlabel={'dirección de envío'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={true}
                />
                <Input
                    settype="number"
                    setid="cpostal"
                    setplaceholder="código postal"
                    setname="cpostal"
                    icontype={'cpostal'}
                    textlabel={'Código postal'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                />
                <Input
                    settype="text"
                    setid="poblacion"
                    setplaceholder="población"
                    setname="poblacion"
                    icontype={'poblacion'}
                    textlabel={'Población'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                />
                <Input
                    settype="email"
                    setid="email"
                    setplaceholder="correo electrònico"
                    setname="email"
                    icontype={'email'}
                    textlabel={'correo electrònico'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                />
                <Textarea
                    setid="observaciones"
                    setplaceholder="observaciones"
                    setname="observaciones"
                    icontype={'observaciones'}
                    textlabel={'observaciones'}
                    bgIcon={'#B1D8E2'}
                    coloricon={'#707070'}
                    required={false}
                />
                <Buttonsubmit/>
            </form>
        </Fragment>
    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(Profileuser);