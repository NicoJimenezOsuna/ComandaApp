import React, {
    Fragment
} from 'react';
import ModalTable from "./ModalTable";
import {ReactComponent as Masmenos} from "../../icons/homecomanda/masmenos.svg";
import {connect} from 'react-redux';
import {dosDecim} from "../../utils/utils";
import MoldalComandKey from "./ModalComandKey";
import {ReactComponent as Editarproductos} from "../../icons/homecomanda/editar.svg";
import {ReactComponent as Touch} from "../../icons/homecomanda/mano.svg";
import {ReactComponent as Close} from "../../icons/homecomanda/eliminar.svg";
import Modalmenuselected from "./Modalmenuselected";
import Modalcomandkeypadhomemenu from "./Modalcomandkeypadhomemenu";
import {TotalComanda} from '../../utils/utils';

const EnvioPedido = ({
                         modaltable,
                         visibleModaltable,
                         background,
                         products,
                         productMenuSel,
                         modalid
                     }) => {
    const envio = {
        cont_princ: {
            width: '95%',
            backgroundColor: background ? background : '#fff',
            padding: '.3em',
            margin: '1em auto',
            borderRadius: '10px'
        },
        touch: {
            float: 'right',
            width: '2em',
            height: '2em'
        }
    }
// carta
    // cant: 1
    // imagen: "http://restaurante.comandapp.es/storage/rest1/entrante3.png"
    // nombreplato: "Rollitos de tortilla y jamón"
    // observaciones: null
    // orden: 1
    // plato_id: 34
    // precio: "1.2000"

    // const [selectedIcon, getelectedIcon] = useState(false);

    return (
        <Fragment>
            <div style={envio.cont_princ}
            >
                <table className="tg">
                    <thead>
                    <tr>
                        <th className="tg-0lax w5">imagen</th>
                        <th className="tg-0lax w55">producto</th>
                        <th className="tg-0lax w5">uds</th>
                        <th className="tg-0lax w20"><sup>€</sup>/ud</th>
                        <th className="tg-0lax w15">
                            <Masmenos
                                style={{width: '100%', height: '100%'}}
                                title="aumentar o reducir unidades"
                            />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<tr>*/}
                    {/*    <td colSpan="5"*/}
                    {/*        style={{textIndent: '2em', fontFamily: 'Papyrus'}}*/}
                    {/*    >*/}
                    {/*        carta*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {products.map(item => {
                        return (<tr key={item.imagen}>
                            <td className="tg-buh4 w5"
                                onClick={() => visibleModaltable(item.nombreplato)}
                                style={{
                                    backgroundImage: 'url("' + item.imagen + '")',
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }}
                            >
                                <div style={{position: 'relative', right: 0, bottom: 0}}>
                                    <ModalTable
                                        modaltable={modaltable}
                                        imagen={item.imagen}
                                        modalid={modalid}
                                        ident={item.nombreplato}
                                    />
                                </div>
                            </td>
                            <td className="tg-buh4 w55">
                                {item.nombreplato}
                            </td>
                            <td className="tg-buh4 w5 center">
                                {item.cant}
                            </td>
                            <td className="tg-buh4 w20 center">
                                {dosDecim(item.precio, 2)} €
                            </td>
                            <td className="tg-buh4 w15"
                                // onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                            >
                                {
                                    modaltable && modalid === (item.nombreplato + '_comand') ?
                                        <Close
                                            onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                                            style={{width: '100%', height: '100%', fill: 'red'}}
                                            title="aumentar o reducir unidades"
                                        />
                                        :
                                        <Editarproductos
                                            onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                                            style={{width: '100%', height: '100%'}}
                                            title="aumentar o reducir unidades"
                                        />

                                }
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    float: 'left'
                                }}>
                                    <MoldalComandKey
                                        modaltable={modaltable}
                                        modalid={modalid}
                                        ident={item.nombreplato + '_comand'}
                                        data={item}
                                    />
                                </div>
                            </td>
                        </tr>)
                    })
                    }
                    {/*MENU*/}
                    {/*//     Guarnición: "Patatas Fritas"*/}
                    {/*//     Primeros Platos: "Hamburguesa"*/}
                    {/*//     Refrescos: "Agua mineral"*/}
                    {/*//     cant: 1*/}
                    {/*//     id: 9*/}
                    {/*//     nombre: "MENÚ INFATIL"*/}
                    {/*//     precio: 7*/}
                    {productMenuSel.map((item, index) => {
                        let keys = Object.keys(item)
                        let validkeys = keys.filter(key => key !== 'id' && key !== 'nombre' && key !== 'precio' && key !== 'cant')
                        return (<tr key={index}>
                            <td className="tg-buh4 w5"
                                key={index + 100}
                                onClick={() => visibleModaltable(item.nombre + '_' + index)}
                                style={{
                                    backgroundImage: 'url("./assets/img/menu.jpg")',
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }}
                            >
                                <div style={{position: 'relative', right: 0, bottom: 0}}>
                                    <ModalTable
                                        modaltable={modaltable}
                                        imagen={"./assets/img/menu.jpg"}
                                        modalid={modalid}
                                        ident={item.nombre + '_' + index}
                                    />
                                </div>
                            </td>
                            <td className="tg-buh4 w55"
                                onClick={() => visibleModaltable(item.nombre + '_' + index + '_ + id')}
                            >
                                {item.nombre}
                                <Touch style={envio.touch}/>
                                <div style={{position: 'relative', right: 0, bottom: 0}}>
                                    <Modalmenuselected
                                        modaltable={modaltable}
                                        items={validkeys}
                                        item={item}
                                        modalid={modalid}
                                        ident={item.nombre + '_' + index + '_ + id'}
                                    />
                                </div>
                            </td>
                            <td className="tg-buh4 w5 center">
                                {item.cant}
                            </td>
                            <td className="tg-buh4 w20 center">
                                {dosDecim(item.precio, 2)} €
                            </td>
                            <td className="tg-buh4 w15"
                                // onClick={() => visibleModaltable(item.nombreplato + '_comand')}
                            >
                                {
                                    modaltable && modalid === (item.internalID + '__comand') ?
                                        <Close
                                            onClick={() => visibleModaltable(item.internalID + '__comand')}
                                            style={{width: '100%', height: '100%',fill: 'red'}}
                                            title="aumentar o reducir unidades"
                                        />
                                        :
                                        <Editarproductos
                                            onClick={() => visibleModaltable(item.internalID + '__comand')}
                                            style={{width: '100%', height: '100%'}}
                                            title="aumentar o reducir unidades"
                                        />
                                }
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    float: 'left'
                                }}>
                                    <Modalcomandkeypadhomemenu
                                        //pasamos el producto
                                        data={item}
                                        //si es carta true, si es menu false
                                        nonprice={false}
                                        wordkey={'menu'}
                                        modaltable={modaltable}
                                        modalid={modalid}
                                        ident={item.internalID + '__comand'}
                                    />
                                </div>
                            </td>
                        </tr>)
                    })
                    }
                    {/*<tr>*/}
                    {/*    <td className="tg-buh4 w20"*/}
                    {/*        onClick={visibleModaltable}*/}
                    {/*        style={{*/}
                    {/*            backgroundImage: 'url("http://restaurante.comandapp.es/storage/rest1/entrante6.png")',*/}
                    {/*            backgroundSize: 'contain',*/}
                    {/*            backgroundRepeat: 'no-repeat',*/}
                    {/*            backgroundPosition: 'center center'*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <div style={{position: 'relative', right: 0, bottom: 0}}>*/}
                    {/*            <ModalTable*/}
                    {/*                modaltable={modaltable}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </td>*/}
                    {/*    <td className="tg-buh4 w50">Alubias rojas con cebolla caramelizada</td>*/}
                    {/*    <td className="tg-buh4 w10 center">*/}
                    {/*        2*/}
                    {/*    </td>*/}
                    {/*    <td className="tg-buh4 w10 center">*/}
                    {/*        20*/}
                    {/*    </td>*/}
                    {/*    <td className="tg-buh4 w10">*/}

                    {/*    </td>*/}
                    {/*</tr>*/}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td colSpan="2" style={{textAlign: 'right'}}>
                            {/*{TotalComanda(products, productMenuSel).toFixed(2)} €*/}
                            {TotalComanda(products, productMenuSel)} €
                        </td>
                    </tr>
                    </tfoot>
                </table>

            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productMenuSel: state.PedidosMenu.pedidoMenu,
        clientProfile: state.ClientProfile.clientProfile
    }
}

export default connect(mapStateToProps)(EnvioPedido);