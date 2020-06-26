import React, {Fragment, useState, useEffect} from 'react';
import Labelsmenus from './Labelsmenus';
import axios from "axios";
import {dosDecim, protocol} from "../utils/utils";
import {CONNECT_TOKEN} from "../data/restaurante";
import Platosmenus from "./Platosmenus";
import Spinner from "./Spinner";
import Commandkeypadmenu from "./comandkeymenu/Commandkeymenu";
import {connect} from 'react-redux';
import Spinnercircle from './Spinnercircle'

const Listadomenu = ({
						 dataid,
						 dataSliderHandler,
						 subcategorias,
						 productMenuSel,
						 restauranteData,
						 token,
						 getValue,
						 completeddMemenu,
						 okmessage,
						 errormessage,
						 warningmessage
					 }) => {
	const listado = {
		between: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
			backgroundColor: '#8080802e',
			padding: '.7em .7em'
		},
		buttonMenu: {
			// fontSize: '1.3em',
			// padding: '.5em 2em',
			// borderRadius: '25px',
			// border: '2px solid rgb(112, 112, 112)',
			// backgroundColor: 'rgba(156, 255, 242, 0.68)',
			// display: 'inline-block',
			// cursor: 'pointer',
			// textDecoration: 'none',
			// textShadow: '0px 1px 0px #2f6627',
			// outline: 'none'
		},
		error: {
			color: 'white',
			backgroundColor: '#e50e0e',
			padding: '.8em',
			borderRadius: '10px',
			position: 'absolute'
		},
		ok: {
			color: 'white',
			backgroundColor: ' #5bbc5b',
			padding: '.8em',
			borderRadius: '10px',
			position: 'absolute'
		},
		warning: {
			color: 'white',
			backgroundColor: ' #FF5733',
			padding: '.8em',
			borderRadius: '10px',
			position: 'absolute'
		}
	}

	const [sectionsMenu, getSectionsMenu] = useState([]);
	const [seccid, getSeccid] = useState([]);
	const [fullmenu, getFullMenu] = useState({});
	const [menuselection, getMenuselection] = useState({});


	useEffect(() => {
		//clean call is not mounted
		let isSubscribed = true


		getSeccid(dataid);
		getFullMenu(subcategorias)

		// http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/5
		let url = "//restaurante.comandapp.es/api/ws/1/";
		const userHeader = {
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/json"
			}
		};

		const menusRequest = async (protocol, url, token, id) => {
			try {
				// Make a request
				const response = await axios.get(`${protocol}${url}${token}/${id}`, userHeader);
				const toString = JSON.stringify(response.data);
				const toObject = JSON.parse(toString);
				//to Localstorage
				// localStorage.setItem(
				//     "comandaApp",
				//     JSON.stringify(response.data)
				// );
				//to State
				// if (!toObject.data.respuesta > 0) {
				//     localStorage.setItem(
				//         "comandaApp",
				//         JSON.stringify(fakeData1)
				//     );
				//     getDatos(fakeData1.data.respuesta)
				// } else {
				if (isSubscribed) {
					localStorage.setItem('comandaAppmenu', JSON.stringify(toObject.data.respuesta))
					getSectionsMenu(toObject.data.respuesta);
				}
				// }

			} catch (error) {
				// localStorage.setItem(
				//     "comandaApp",
				//     JSON.stringify(fakeData1)
				// );
				// getSectionsMenu(fakeData1.data.respuesta)
				console.log("error", error)
			}
		}
		//REQUEST
		menusRequest(protocol, url, token, dataid)

		//clean function: no update state if is unmount component
		return () => isSubscribed = false

	}, [token, dataid, productMenuSel, subcategorias])

	if (!Object.keys(sectionsMenu).length > 0) {
		return (
			<Spinnercircle/>
		)
	}

	return (
		<Fragment>
			{restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
				<div style={listado.between}>
					{/*<p>HA PEDIDO: <span style={{fontSize: '1.5em', marginRight: '1em'}}>*/}

					{/*    {*/}
					{/*        productMenuSel.map(item => {*/}
					{/*            if (item.id === seccid) {*/}
					{/*                return item.cant*/}
					{/*            }*/}
					{/*        })*/}
					{/*        // productMenuSel.id === seccid ?*/}
					{/*        //     productmenuselecc.cant*/}
					{/*        //     :*/}
					{/*        //     null*/}
					{/*    }*/}
					{/*                  </span>*/}
					{/*</p>*/}
					{/*className={displayError ? 'displayed' : 'displayed_none '}*/}
					<button
						onClick={completeddMemenu}
						type="button"
						style={listado.buttonMenu}
						className="button_comanda"
					>
						Añadir
					</button>

					<p
						className={warningmessage ? 'displayed' : 'displayed_none '}
						style={listado.warning}>
						Ya tiene selecionado ese menú.
					</p>
					<p
						className={errormessage ? 'displayed' : 'displayed_none '}
						style={listado.error}>
						seleccione un producto de cada apartado.
					</p>
					<p
						className={okmessage ? 'displayed' : 'displayed_none '}
						style={listado.ok}
					>Guardado en lista de pedidos.</p>
					{/*<div>*/}
					{/*    <Commandkeypadmenu*/}
					{/*        data={fullmenu}*/}
					{/*        nonprice={false}*/}
					{/*        wordkey={'menu'}*/}
					{/*    />*/}
					{/*</div>*/}
				</div>
				:
				null
			}
			{Object.keys(sectionsMenu).length > 0 ?
				sectionsMenu.map(item => {
					// {console.log(sectionsMenu)}
					return (
						<Fragment key={item.categoria}>
							<Labelsmenus data={item.categoria}/>
							<Platosmenus
								// getMenu={getMenu}
								labelsLength={sectionsMenu.length}
								data={item.categoria}
								catid={item.categoria_id}
								seccid={seccid}
								dataSliderHandler={dataSliderHandler}
								getValue={getValue}
							/>
						</Fragment>
					)
				})
				:
				<Spinnercircle/>
			}
			<div style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '1em',
				fontSize: '1.5em',
				border: '1px solid black',
				margin: '0 10px'

			}}
				 className="price_bg label_menu_price"
			>
				<span>Total</span>
				{/*Si restauranteData contiene datos, continua*/}
				{Object.keys(restauranteData).length > 0 ?
					// Accedemos al array restauranteData y apuntamos al objeto "respuesta" dentro de la primera llamada
					restauranteData[0].respuesta.map(item => {
						//Se mapea el contenido de respuesta y apuntamos al objeto "id" dentro de "respuesta"
						if (item.id === seccid) {
							//Accedemos al objeto "precio" dentro de "id"
							return (
								<span key={'id' + item.id}>PVP: {dosDecim(item.precio, 2)} €</span>
							)
						}
					})
					:
					<Spinnercircle/>
				}


			</div>
		</Fragment>
	)
}

function mapStateToProps(state) {
	return {
		productMenuSel: state.PedidosMenu.pedidoMenu,
		restauranteData: state.RestauranteData.RestauranteProfile,
		token: state.Token.token
	}
}

export default connect(mapStateToProps)(Listadomenu);