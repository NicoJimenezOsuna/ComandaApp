// import React, {Fragment, useEffect, useState} from 'react';
// import {protocol, urlImage} from "../utils/utils";
// import {connect} from 'react-redux';
// import axios from "axios";
// import Subcarta from './Subcarta'
//
//
// const Carta = ({sendCategory, senditem, styles, restauranteData, token, idcarta, changesubcat,changedView}) => {
//     const cat = styles;
// // const item = senditem;
//
// // const [categoria, getCategoria] = useState([])
//     const [idcart, getIdcarta] = useState(null)
//     const [carta, getCarta] = useState([])
//
//     // useEffect(() => {
//     //     // getCategorias(JSON.parse(localStorage.getItem('comandaApp')).data);
//     //     // getCategoria(...restauranteData);
//     //     if (restauranteData.length > 0) {
//     //         const carta = restauranteData[0].respuesta.filter(obj => obj.id === senditem.id)
//     //         const cartasid = restauranteData[0].respuesta.map(item => item.id)
//     //         getIdcarta(carta.id)
//     //         console.log('carta', carta)
//     //     }
//     // }, [senditem, restauranteData]);
//
//     useEffect(() => {
//         let isSubscribed = true
//
//         // http://restaurante.comandapp.es/api/ws/1/cLZDdvFTJcl5cWG/1
//         // http://restaurante.comandapp.es/api/ws/1/4xpD2gLLNSSdrRZ/1
//         let url = "//restaurante.comandapp.es/api/ws/1/";
//         const userHeader = {
//             headers: {
//                 "X-Requested-With": "XMLHttpRequest",
//                 "Content-Type": "application/json"
//             }
//         };
//
//         const firstRequest = async (protocol, url, token, dataid) => {
//             try {
//                 // console.log('CategoriaRequest', `${protocol}${url}${token}/${dataid}`)
//                 // Make a request
//                 const response = await axios.get(`${protocol}${url}${token}/${dataid}`, userHeader);
//                 console.log('carta response', response.data)
//                 const toString = JSON.stringify(response.data);
//                 const toObject = JSON.parse(toString);
//                 //to Localstorage
//                 localStorage.setItem(
//                     "comandaAppCarta",
//                     JSON.stringify(response.data)
//                 );
//                 //to State
//                 // if (!toObject.data.respuesta > 0) {
//                 //     localStorage.setItem(
//                 //         "comandaAppCarta",
//                 //         JSON.stringify(fakeData1)
//                 //     );
//                 //     getCarta(fakeData1.data.respuesta)
//                 // } else {
//                 if (isSubscribed) {
//                     await getCarta(toObject.data.respuesta);
//                 }
//                 // }
//
//             } catch (error) {
//                 // localStorage.setItem(
//                 //     "comandaAppCarta",
//                 //     JSON.stringify(fakeData1)
//                 // );
//                 // getCarta(fakeData1.data.respuesta)
//                 console.log("error", error);
//             }
//         };
//         //call to API
//         if (idcarta !== null) {
//             // firstRequest(protocol, url, token, idcarta)
//             // getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
//         }
//         // firstRequest(protocol, url, token, idcarta)
//         // getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
//
//         //clean function: no update state if is unmount component
//         return () => isSubscribed = false
//
//     }, [idcarta, token, restauranteData])
//
//
//     return (
//             <div
//                 className="cont_childs"
//                 onClick={() => sendCategory(senditem.categoria_id, senditem.categoria, null, 'carta', idcarta, 'seccat')}
//                 id={senditem.categoria}
//                 style={cat.cat_cont}
//                 key={senditem.categoria + senditem.categoria_id}
//             >
//                 <div className="absolut"></div>
//                 {senditem.imagen === undefined ?
//                     <Fragment>
//                         <img style={cat.plato_img}
//                              src="assets/img/menu.jpg"
//                              alt={`Imagen de categoría ${senditem.categoria}`}/>
//                         <p style={cat.nom_cat}>
//                             {senditem.nombrecarta}
//                         </p>aaaaaaaaaaaa
//                     </Fragment>
//                     :
//                     <Fragment>
//                         <img style={cat.plato_img}
//                              src={urlImage() + senditem.imagen}
//                              alt={`Imagen de categoría ${senditem.categoria}`}/>
//                         <p className="category_title"
//                            style={cat.nom_cat}>
//                             {senditem.categoria}
//                         </p>a
//                     </Fragment>
//                 }
//             </div>
//     )
// }
//
// function mapStateToProps(state) {
//     return {
//         restauranteData: state.RestauranteData.RestauranteProfile,
//         token: state.Token.token
//     }
// }
//
// export default connect(mapStateToProps)(Carta);
"use strict";