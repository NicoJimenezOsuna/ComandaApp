import React, {Fragment, useEffect, useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";
import NavUtils from './NavUtils';
import Allergensmodal from './Allergensmodal';
import Qrmodal from './Qrmodal';
import axios from "axios";
import {CONNECT_TOKEN} from '../data/restaurante';
import {protocol, urlImage} from '../utils/utils';
import {connect} from 'react-redux';
import RestauranteData from "../redux/reducers/RestauranteData";
import Spinnercircle from "./Spinnercircle";
import Subcarta from './Subcarta';
import Spinner from "./Spinner";
import Emptymessage from "./Emptymessage";

const Categorias = ({pedidoViewHandler, restauranteData, changedView, sendCategory, changesubcat, getChangeColor, token}) => {

    const history = useHistory();
    const cat = {
        padre: {
            display: 'flex',
            flexFlow: 'row wrap',
            width: `100%`,
            padding: `10px`
        },
        plato_img: {
            width: `100%`,
            height: `100%`,
            left: `0px`,
            top: `0px`,
            overflow: 'visible'
        },
        platos: {
            overflow: 'visible',
            width: '100%',
            height: '100%',

        },
        nom_cat: {
            // transform: 'rotate(-35deg)',
            transform: 'rotate(-22deg)',
            position: 'absolute',
            // whiteSpace: 'nowrap',
            textAlign: 'center',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            // fontSize: '1.2em',
            fontWeight: 900,
            color: '#fff',
            zIndex: '9',
            textShadow: '0 1px 0 rgba(250, 250, 250, 0.3), ' +
                '0 6px 1px rgba(0, 0, 0, 0.1), ' +
                '0 0 5px rgba(0, 0, 0, 0.1), ' +
                '0 1px 3px rgba(0, 0, 0, 0.3), ' +
                '0 3px 5px rgba(0, 0, 0, 0.2), ' +
                '0 5px 10px rgba(0, 0, 0, 0.25), ' +
                '0 10px 10px rgba(0, 0, 0, 0.2), ' +
                '0 20px 20px rgba(0, 0, 0, 0.15)',
            whiteSpace: 'break-spaces',
            lineHeight: 'normal',
            wordSpacing: '.5em'
        },
        select: {
            width: '100%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '.5em 0',
            fontSize: '1em',
            borderBottom: '2px solid black'
        },
        span: {
            //     fontFamily: 'Papyrus',
            //     padding: '.2em 1em',
            //     borderRadius: '20px',
        }
    }
    const [idcarta, getIdcarta] = useState(null);
    const [categorias, getCategorias] = useState([]);
    const [verqr, getVerqr] = useState(false);//sirve para darle un estado inicial
    const [isVisible, getIsVisible] = useState(false);
    const [selected, getselected] = useState('carta');
    const [carta, getCarta] = useState([])
    let cartaOk = [];

    // if(Object.keys(categorias).length > 0){
    //      categorias.respuesta.filter(item => {
    //          // return /carta/gi.test(item.nombrecarta)
    //          return item.esmenu === 1
    //      })
    // }

    useEffect(() => {
        // getCategorias(JSON.parse(localStorage.getItem('comandaApp')).data);
        getCategorias(...restauranteData);
        if (restauranteData.length > 0) {
            const carta = restauranteData[0].respuesta.filter(item => item.esmenu === 0)
            const cartasid = restauranteData[0].respuesta.map(item => item.id)
            getIdcarta(cartasid)
        }
    }, [restauranteData]);

//     useEffect(() => {
//         // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/1
//         // http://restaurante.comandaapp.es/api/ws/1/4xpD2gLLNSSdrRZ/1
//         let url = "//restaurante.comandapp.es/api/ws/1/";
//         const userHeader = {
//             headers: {
//                 "X-Requested-With": "XMLHttpRequest",
//                 "Content-Type": "application/json"
//             }
//         };
//
//         const firstRequest = async (protocol, url, token, dataid) => {
//         try {
//             // console.log('CategoriaRequest', `${protocol}${url}${token}/${dataid}`)
//             // Make a request
//             const response = await axios.get(`${protocol}${url}${token}/${dataid}`, userHeader);
//             const toString = JSON.stringify(response.data);
//             const toObject = JSON.parse(toString);
//             //to Localstorage
//             localStorage.setItem(
//                 "comandaAppCarta",
//                 JSON.stringify(response.data)
//             );
//             //to State
//             // if (!toObject.data.respuesta > 0) {
//             //     localStorage.setItem(
//             //         "comandaAppCarta",
//             //         JSON.stringify(fakeData1)
//             //     );
//             //     getCarta(fakeData1.data.respuesta)
//             // } else {
//             await getCarta(toObject.data.respuesta);
//             // }
//
//         } catch (error) {
//             // localStorage.setItem(
//             //     "comandaAppCarta",
//             //     JSON.stringify(fakeData1)
//             // );
//             // getCarta(fakeData1.data.respuesta)
//             console.log("error", error);
//         }
//     };
//     //call to API
//     if (idcarta !== null) {
//         firstRequest(protocol, url, token, idcarta)
//         getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
//     }
//     // firstRequest(protocol, url, token, idcarta)
//     // getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
// }, [idcarta, token, restauranteData])

    const selectedView = (e) => {
        e.preventDefault()
        getselected(e.target.id)
        if (e.target.id === 'menus') {
            getChangeColor()
        }
    }

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };


    // const sendCategory = (item1, item2, item3, wordKey, idcarta, seccat) => {
    //     localStorage.setItem('categorySelected', JSON.stringify({
    //         id: item1,
    //         nombre: item2,
    //         precio: item3,
    //         wordKey: wordKey,
    //         idcarta: idcarta,
    //         seccat: null
    //     }));
    //     if (seccat === true || seccat === false) {
    //         changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
    //     } else {
    //         history.push("/subcategoria");
    //     }
    // };
    // const [changesubcat, getChangesubcat] = useState(false)

// //cambiar vista de categoria a subcategoria sin perder vista
//     const changedView = () => {
//         changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
//     }

    const codigoqr = () => {
        !verqr ? getVerqr(true) : getVerqr(false);
    }//sirve para actualizar el estado


    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }

    return (
        <Fragment>
            <Allergensmodal
                dataVisible={isVisible}
                visible={visibleHandler}/>
            <Qrmodal
                verqr={verqr}
                codigoqr={codigoqr}
            />
            <NavUtils
                codigoqr={codigoqr}
                dataVisible={isVisible}
                visible={visibleHandler}
                pedidoViewHandler={pedidoViewHandler}
                // codigoqr={qr}
            />

            <div className="padre">
                <div style={cat.select}>
                    <span className={selected === 'menus' ? 'span_no_select button' : "span_select button"}
                          style={cat.span}
                          id="carta"
                          onClick={selectedView}
                    >
                        CARTA
                    </span>
                    {/*<span*/}
                    {/*    className={selected === 'menus' ? 'span_no_select' : "span_select"}*/}
                    {/*    style={cat.span}*/}
                    {/*    id="carta"*/}
                    {/*    onClick={selectedView}*/}
                    {/*>*/}
                    {/*    CARTA*/}
                    {/*</span>*/}
                    <span className={selected === 'carta' ? 'span_no_select button' : "span_select button"}
                          style={cat.span}
                          id="menus"
                          onClick={selectedView}
                    >
                        MENU
                    </span>
                    {/*<span*/}
                    {/*    className={selected === 'carta' ? 'span_no_select' : "span_select"}*/}
                    {/*    style={cat.span}*/}
                    {/*    id="menus"*/}
                    {/*    onClick={selectedView}*/}
                    {/*>*/}
                    {/*    MENUS*/}
                    {/*</span>*/}
                </div>
                {selected === 'carta' && categorias.mensaje === 'OK' && carta ? (
                        //changesubcat establece el cambio de vista a subcategoría para
                        changesubcat === false ?
                            categorias.respuesta.map(item => {
                                if (!item.esmenu) {
                                    return (
                                        // <Fragment>
                                        // <Carta
                                        //     sendCategory={sendCategory}
                                        //     senditem={item}
                                        //     styles={cat}
                                        //     idcarta={item.id}
                                        //     changesubcat={changesubcat}
                                        //     changedView={changedView}
                                        // />

                                        <div
                                            className="cont_childs"
                                            onClick={() => sendCategory(item.categoria_id, item.categoria, null, 'carta', item.id, true)}
                                            id={item.categoria}
                                            style={cat.cat_cont}
                                            key={item.id}
                                        >
                                            <div className="absolut"></div>
                                            {item.imagen === undefined ?
                                                <Fragment>
                                                    <img style={cat.plato_img}
                                                         src="assets/img/carta.jpg"
                                                         alt={`Imagen de categoría ${item.categoria}`}/>
                                                    <p className="category_title"
                                                       style={cat.nom_cat}>
                                                        {item.nombrecarta}
                                                    </p>
                                                </Fragment>
                                                :
                                                <Fragment>
                                                    <img style={cat.plato_img}
                                                         src={urlImage() + item.imagen}
                                                         alt={`Imagen de categoría ${item.categoria}`}/>
                                                    <p className="category_title"
                                                       style={cat.nombrecarta}>
                                                        {item.categoria}
                                                    </p>
                                                </Fragment>
                                            }
                                        </div>
                                    )
                                }else{
                                    return (
                                        <Emptymessage/>
                                    )
                                }
                            })
                            :
                            // <Spinner/>
                            <Subcarta
                                sendCategory={sendCategory}
                                changedView={changedView}
                                styles={cat}
                            />

                    ) :
                    selected === 'carta' ?
                        <Emptymessage/>
                        :
                        null
                }
                {/*ESTO LO CAMBIAREMOS MÁS ADELANTE PARA OPTIMIZAR. sE CONVERTIRÁ EN COMPONENTECADA OPCIÓN*/}
                {selected === 'menus' && categorias.mensaje === 'OK' && carta ? (
                        categorias.respuesta.map((item, index) => {
                            // if(/menú/gi.test(item.nombrecarta)) {
                            if (item.esmenu) {
                                return (
                                    <div
                                        className="cont_childs"
                                        onClick={() => sendCategory(item.id, item.nombrecarta, item.precio, 'menu', null)}
                                        id={item.id}
                                        style={cat.cat_cont}
                                        key={1 + index}
                                    >
                                        <div className="absolut"/>
                                        {item.imagen === undefined ?
                                            <Fragment>
                                                <img style={cat.plato_img}
                                                     src="assets/img/menu.jpg"
                                                     alt={`Imagen de categoría ${item.nombrecarta}`}/>
                                                <p className="category_title"
                                                   style={cat.nom_cat}>
                                                    {item.nombrecarta}
                                                </p>
                                            </Fragment>
                                            :
                                            <Fragment>
                                                <img style={cat.plato_img}
                                                     src={item.imagen}
                                                     alt={`Imagen de categoría ${item.nombrecarta}`}/>
                                                <p className="category_title"
                                                   style={cat.nom_cat}>
                                                    {item.nombrecarta}
                                                </p>
                                            </Fragment>
                                        }
                                    </div>
                                )
                            }else{
                                return (
                                    <Emptymessage/>
                                )
                            }
                        })

                    ) :
                    selected === 'menus' ?
                        <Emptymessage/>
                        :
                        null
                }
            </div>
        </Fragment>

    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Categorias);
