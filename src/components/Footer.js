import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CONNECT_TOKEN, firstRequest, URL} from "../data/restaurante";
import {protocol, urlImage} from "../utils/utils";
import Publibanner from "./publicidad/Publibanner";

const Footer = ({vermapa, vermail, restauranteData, back, changesubcat, changedView}) => {

	const style = {
		contenedor: {
			position: 'sticky',
			// border: '2px solid rgba(112,112,112,1)',
			backgroundColor: `rgba(230, 230, 230, 1)`,
			bottom: 0,
			width: `100%`,
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			flexWrap: 'wrap',
			zIndex: 999,
			borderRadius: '20px'
		},
		boton: {
			width: '3em',
			height: '3em'
		},
		cont_logo_basica_footer: {
			// maxWidth: '80%',
			maxHeight: '3em',
		},
		logo_basica_footer: {
			maxHeight: '3em',
			maxWidth: '100%'
		}
	}

	//
	//
	// useEffect(() => {
	//     if(!restauranteData){
	//         firstRequest(protocol, URL, CONNECT_TOKEN)
	//     }
	// }, [restauranteData]);

	return (
		<div className="cont_footer_absolut">
			<div style={style.contenedor}>
				{changesubcat === false ?
					back === '/categoria' ?
						<Link style={style.boton} to={back}>
							<img
								style={style.boton}
								src="./assets/img/footer/ico-back.svg"
								alt="imagen de footer"
							/>
						</Link>
						:
						<Link style={style.boton} to={back}>
							<img
								style={style.boton}
								src="./assets/img/footer/ico-back_red.svg"
								alt="imagen de footer"
							/>
						</Link>
					:
					<img
						onClick={changedView}
						style={style.boton}
						src="./assets/img/footer/ico-back.svg"
						alt="imagen de footer"
					/>
				}
				{restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
					<Fragment>
						<a style={style.boton}
						   href={`tel:${restauranteData.length > 0 ? restauranteData[0].telefono : null}`}>
							<img
								style={style.boton}
								src="./assets/img/footer/ico-tel.svg"
								alt="imagen de footer"
							/>
						</a>
						<img
							onClick={vermapa}
							style={style.boton}
							src="./assets/img/footer/ico-gps.svg"
							alt="imagen de footer"
						/>
						<img
							onClick={vermail}
							style={style.boton}
							src="./assets/img/footer/ico-mail.svg"
							alt="imagen de footer"
						/>
					</Fragment>
					:
					// null
					// <div style={style.cont_logo_basica_footer}>
					// 	<img style={style.logo_basica_footer} src={urlImage() + restauranteData[0].logo} alt=""/>
					// </div>
					<div style={style.cont_logo_basica_footer}>
						<Publibanner/>
					</div>
				}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		restauranteData: state.RestauranteData.RestauranteProfile
	}
}

export default connect(mapStateToProps)(Footer);
