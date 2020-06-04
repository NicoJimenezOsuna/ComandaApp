import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import NavUtils from './NavUtils';
import Allergensmodal from './Allergensmodal';
import Qrmodal from './Qrmodal';
import axios from "axios";
import {CONNECT_TOKEN} from '../data/restaurante';
import {protocol, urlImage} from '../utils/utils';
import {fakeData1} from '../data/data';

const Categorias = () => {

    const history = useHistory();
    const cat = {
        padre: {
            display: 'flex',
            flexFlow: 'row wrap',
            width: `100%`,
            padding: `10px`
        },
        // cat_cont: {
        //   position: 'relative',
        //   margin: `3.6px`,
        //   // width: `32%`,
        //     flex:' 1 0 40%',
        //   height: `223px`,
        //   // left: `482px`,
        //   // top: `278px`,
        //   overflow: 'visible',
        //   // --web-animation: 'fadein 0.4s ease-out',
        //   // --web-action-type: 'page',
        //   // --web-action-target: 'Arroces.html',
        //   cursor: 'pointer',
        //   border: '2px solid black',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //     flexWrap: 'wrap'
        // },
        plato_img: {
            // opacity: `0.4`,
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
            transform: 'rotate(-35deg)',
            position: 'absolute',
            whiteSpace: 'nowrap',
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
                '0 20px 20px rgba(0, 0, 0, 0.15)'
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
        span : {
            fontFamily: 'Papyrus',
            padding: '.2em 1em',
            borderRadius: '20px',
        }
    }


    const [categorias, getCategorias] = useState([]);
    const [verqr, getVerqr] = useState(false);//sirve para darle un estado inicial
    const [isVisible, getIsVisible] = useState(false);
    const [selected, getselected] = useState('menus');
    const [carta, getCarta] = useState([])
    let cartaOk = [];

    if(Object.keys(categorias).length > 0){
         cartaOk = categorias.respuesta.filter(item=>{return /carta/gi.test(item.nombrecarta)})
    }

    useEffect(() => {
        getCategorias(JSON.parse(localStorage.getItem('comandaApp')).data);
    }, []);

    useEffect(()=>{
            // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/1
            let url = "//restaurante.comandapp.es/api/ws/1/";
            const userHeader = {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                }
            };

            const firstRequest = async (protocol, url, token) => {
                try {
                    // Make a request
                    const response = await axios.get(`${protocol}${url}${token}/1`, userHeader);
                    const toString = JSON.stringify(response.data);
                    const toObject = JSON.parse(toString);
                    //to Localstorage
                    localStorage.setItem(
                        "comandaAppCarta",
                        JSON.stringify(response.data)
                    );
                    //to State
                    // if (!toObject.data.respuesta > 0) {
                    //     localStorage.setItem(
                    //         "comandaAppCarta",
                    //         JSON.stringify(fakeData1)
                    //     );
                    //     getCarta(fakeData1.data.respuesta)
                    // } else {
                        await getCarta(toObject.data.respuesta);
                    // }

                } catch (error) {
                    // localStorage.setItem(
                    //     "comandaAppCarta",
                    //     JSON.stringify(fakeData1)
                    // );
                    // getCarta(fakeData1.data.respuesta)
                    console.log("error", error);
                }
            };
            //call to API
            firstRequest(protocol, url, CONNECT_TOKEN)
            console.log('request')
        getCarta(JSON.parse(localStorage.getItem('comandaAppCarta')));
    },[])

    const selectedView = (e) => {
        getselected(e.target.id)
    }

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };

    const sendCategory = (item1, item2 , wordKey) => {
        localStorage.setItem('categorySelected', JSON.stringify({id: item1, nombre: item2, wordKey: wordKey}));
        history.push("/subcategoria");
    };

    const codigoqr = () => {
        !verqr ? getVerqr(true) : getVerqr(false);
    }//sirve para actualizar el estado

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
                // codigoqr={qr}
            />

            <div className="padre">
                <div style={cat.select}>
                    <span
                        className={selected === 'menus' ? 'opaco' : "color_span_select"}
                        style={cat.span}
                        id="carta"
                        onClick={selectedView}
                    >
                        CARTA
                    </span>
                    <span
                        className={selected === 'carta' ? 'opaco' : "color_span_select"}
                        style={cat.span}
                        id="menus"
                        onClick={selectedView}
                    >
                        MENUS
                    </span>
                </div>
                {selected === 'carta' && categorias.mensaje === 'OK' ? (
                        carta.map(item => {
                                return (
                                    <div
                                        className="cont_childs"
                                        onClick={() => sendCategory(item.categoria_id, item.categoria, 'carta')}
                                        id={item.categoria}
                                        style={cat.cat_cont}
                                        key={item.categoria + item.categoria_id}
                                    >
                                        <div className="absolut"></div>
                                        {item.imagen === undefined ?
                                            <Fragment>
                                                <img style={cat.plato_img}
                                                     src="assets/img/menu.jpg"
                                                     alt={`Imagen de categoría ${item.categoria}`}/>
                                                <p style={cat.nom_cat}>
                                                    {item.categoria}
                                                </p>
                                            </Fragment>
                                            :
                                            <Fragment>
                                                <img style={cat.plato_img}
                                                     src={urlImage() + item.imagen}
                                                     alt={`Imagen de categoría ${item.categoria}`}/>
                                                <p className="category_title"
                                                    style={cat.nom_cat}>
                                                    {item.categoria}
                                                </p>
                                            </Fragment>
                                        }
                                    </div>
                                )
                        })

                    ) :
                    null
                }
                {/*ESTO LO CAMBIAREMOS MÁS ADELANTE PARA OPTIMIZAR. sE CONVERTIRÁ EN COMPONENTECADA OPCIÓN*/}
                {selected === 'menus' && categorias.mensaje === 'OK' ? (
                        categorias.respuesta.map((item, index) => {
                            if(/menú/gi.test(item.nombrecarta)) {
                                console.log('item de Categoria',item)
                                return (
                                    <div
                                        className="cont_childs"
                                        onClick={() => sendCategory(item.id, item.nombrecarta, 'menu')}
                                        id={item.id}
                                        style={cat.cat_cont}
                                        key={1 + index}
                                    >
                                        <div className="absolut"></div>
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
                                                <p style={cat.nom_cat}>
                                                    {item.nombrecarta}
                                                </p>
                                            </Fragment>
                                        }
                                    </div>
                                )
                            }
                        })

                    ) :
                    null
                }
            </div>
        </Fragment>

    )
}

export default Categorias;
