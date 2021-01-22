import React, {
    Fragment,
    useState,
    useEffect
} from 'react';
import TitleSection from "./TitleSection";
import ExplanationSection from "./ExplanationSection";
import Micomandacarta from "../Micomandacarta";
import {connect} from 'react-redux';
import EnvioPedido from "./EnvioPedido";
import Textarea from "./Textarea";
import {ReactComponent as Local} from '../../icons/homecomanda/local.svg';
import {accessComandaHome} from "../../data/tokens_access_comanda_home";


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

    const [textValue, getTextValue] = useState(null);
    const [checkState, getCheckState] = useState(false);
    const [onlyLocal, getOnlyLocal] = useState(false);

    useEffect(() => {
        const onlyLocalData = accessComandaHome.filter(data => data.token === reduxToken);
        console.log('objeto', onlyLocalData)
        // if (onlyLocalData.length > 0) {
            if(!onlyLocalData[0].localOnly){
                getOnlyLocal(false)
            }else{
                getOnlyLocal(true)
                getCheckState(true)
            }
        // }

    }, [accessComandaHome])

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
            "nombre": clientProfile.nombre ? clientProfile.nombre : null,
            "direccion": clientProfile.direccion ? clientProfile.direccion : null,
            "telefono": clientProfile.telefono ? clientProfile.telefono : null,
            "cp": clientProfile.cp ? clientProfile.cp : null,
            "poblacion": clientProfile.poblacion ? clientProfile.poblacion : null,
            "email": clientProfile.email ? clientProfile.email : null,
            "observpedido": (checkState === true ? (!textValue ? "RECOGIDA EN LOCAL" : "RECOGIDA EN LOCAL\n " + textValue) : (!textValue ? null : textValue)),
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
                "plato_id": item.plato_id,
                // "identificador": null
            }
        })
        let ident = 0;
        const defMenu = productMenuSel.map((item, index) => {
            //     delete item.internalID;
            //     delete item.precio;
            //     delete item.nombre;
            //     return item;

            // Postres: "Bomba de chocolate blanco"
            // Primeros Platos: "Arroz a Banda"
            // Refrescos: "Cerveza | Doble"
            // Segundos Platos: "Rollitos de tortilla y jamón"
            // Vinos: "Tinto de la casa"
            // *** cant: 2
            // **** id: 5
            //--------------- internalID: 41984304608
            //--------- nombre: "MENÚ LUNES"
            // --------------precio: 6.5

            console.log('item de menu', item)
            let object_keys = Object.keys(item)
            const usable_keys = object_keys.filter(key => {
                if (key !== 'internalID' &&
                    key !== 'precio' &&
                    key !== 'nombre' &&
                    key !== 'cant' &&
                    key !== 'id'
                ) {
                    return key
                }
            })
            console.log('object keys', object_keys)
            return usable_keys.map(key => {
                return {
                    "carta_id": item.id,
                    "unidades": item.cant,
                    "plato_id": parseInt(item[key].split('?')[1]),
                    // "identificador": index + 1
                }
            })
        })
        let defEnvArray = [];
        for (let i = 0; i < defMenu.length; i++) {
            defEnvArray = [...defEnvArray, ...defMenu[i]];
        }
        //CONTROL PRUEBA DE ENVÍO
        console.log('resumen pedido', ...defCarta, ...defEnvArray);
        // userBody.pedido = {...defCarta, ...defMenu}
        // userBody.pedido = JSON.stringify(defCarta)
        // console.log('uswerBody length', defCarta.length)
        // console.log('userbody content', defCarta)
        if (
            !userBody.nombre ||
            !userBody.direccion ||
            !userBody.telefono
        ) {
            getErrorMessage('Completa los datos necesarios en perfil de usuario');
        } else if (defCarta.length === 0) {
            getErrorMessage('No has seleccionado ningún producto');
        } else {
            //ENVÍO SÓLO CARTA
            // userBody.pedido = JSON.stringify({...defCarta})
            // ENVÍO CARTA Y MENÚ
            // userBody.pedido = JSON.stringify({...defCarta, ...defEnvArray})/
            console.log(userBody)
            getCompleteOrder(userBody)
            getConfirmBox(true)
        }
    }

    const getCheckStatus = (e) => {
        getCheckState(e.target.checked)
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
            {/*//check*/}
            <div style={{
                width: 'fit-content',
                padding: '0 1em 0 0',
                background: 'white',
                margin: '0 auto',
                borderRadius: '10px',
                display: 'flex',
                marginBottom: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgb(177, 216, 226)',
                    width: '3em',
                    height: '3em',
                    borderRadius: '10px 0px 0px 10px',
                    fill: 'rgb(112, 112, 112)',
                    marginRight: '1em'
                }}>
                    <Local style={{
                        width: '2rem',
                        height: '2rem'
                    }}/>

                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {!onlyLocal ?
                        <Fragment>
                            <input type="checkbox"
                                   name="local"
                                   id="local"
                                   className="state"
                                   style={{display: 'none'}}
                                   onChange={(e) => getCheckStatus(e)}
                                   defaultChecked={false}
                            />
                            <label
                                className="label"
                                htmlFor="local">
                                <div className="indicator"></div>
                                <span style={{
                                    marginLeft: '1em'
                                }}>Recoger en local</span>
                            </label>
                        </Fragment>
                        :
                        <span>Sólo recogida en local</span>
                    }
                </div>
            </div>
            {/*//endCheck*/}
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