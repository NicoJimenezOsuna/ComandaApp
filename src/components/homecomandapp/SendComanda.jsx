import React, {
    Fragment,
    useState
} from 'react';
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import Micomandacarta from "../Micomandacarta";
import {connect} from 'react-redux';
import EnvioPedido from "./EnvioPedido";
import Textarea from "./Textarea";


const SendComanda = ({
                         products,
                         productMenuSel,
                         restauranteData,
                         modaltable,
                         visibleModaltable,
                         modalid,
                         reduxToken,
                         closemodaltable,
                         clientProfile,
                         getConfirmBox,
                         getCompleteOrder,
                         errormessage,
                         getErrorMessage
                     }) => {

    const [textValue, getTextValue] = useState(null)

    const send = {
        button: {
            display: 'block',
            width: '13em',
            height: '3em',
            padding: '.5 0',
            background: '#fff',
            border: '2px solid #B1D8E2',
            color: '#B1D8E2',
            margin: '1em auto 5em auto'
        }
    }

    // const [errormessage, getErrorMessage] = useState('')

    const valueText = (e) => {
        let valuetextarea = e.target.value
        if (valuetextarea) {
            getTextValue(e.target.value)
        } else {
            getTextValue(null)
        }
    };

    const enviaPedido = async () => {

        const userBody = {
            "nombre": clientProfile.nombre ? clientProfile.nombre : '',
            "direccion": clientProfile.direccion ? clientProfile.direccion : '',
            "telefono": clientProfile.telefono ? clientProfile.telefono : '',
            "cp": clientProfile.cp ? clientProfile.cp : '',
            "poblacion": clientProfile.poblacion ? clientProfile.poblacion : '',
            "email": clientProfile.email ? clientProfile.email : '',
            "observpedido": !textValue ? '' : textValue,
            "pedido": ''
        }
        // 0:
        // cant: 2
        // plato_id: 36
        // __proto__: Object
        // 1:
        // Guarnición: "Patatas Fritas"
        // Primeros Platos: "Hamburguesa"
        // Refrescos: "Agua mineral"
        // cant: 2
        // id: 9
        // internalID: 59515675848
        // nombre: "MENÚ INFATIL"
        // precio: 7
        //
        // let html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const defCarta = products.map(item => {
            return {
                "carta_id": item.carta_id,
                "unidades": item.cant,
                "plato_id": item.plato_id
            }
        })

        // const defMenu = productMenuSel.map(item => {
        //     delete item.internalID;
        //     delete item.precio;
        //     delete item.nombre;
        //     return item;
        // })
        // userBody.pedido = {...defCarta, ...defMenu}
        userBody.pedido = JSON.stringify(defCarta)

        if (
            !userBody.nombre ||
            !userBody.direccion ||
            !userBody.telefono
        ) {
            getErrorMessage('Completa los datos necesarios en perfil de usuario');
        } else if (userBody.pedido.length === 0) {
            getErrorMessage('No has seleccionado ningún producto');
        } else {
            getCompleteOrder(userBody)
            getConfirmBox(true)
        }
    }

    return (
        <Fragment>
            <TitleSection title={'Envío de pedido'}/>
            <ExplanationSection
                explanation={'Realiza el envío de tu pedido. No olvides revisar o actualizar tus datos de envío.'}
            />
            <EnvioPedido
                modaltable={modaltable}
                visibleModaltable={visibleModaltable}
                modalid={modalid}
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
                maxlength={300}
                errormessage={errormessage}
                valueText={valueText}
            />
            <button style={send.button}
                    onClick={enviaPedido}>Enviar
            </button>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu,
        clientProfile: state.ClientProfile.clientProfile,
        reduxToken: state.Token.token,
        restauranteData: state.RestauranteData.RestauranteProfile[0].respuesta
    }
}

export default connect(mapStateToProps)(SendComanda);