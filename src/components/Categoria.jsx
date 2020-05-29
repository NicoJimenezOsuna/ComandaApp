import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import NavUtils from './NavUtils';
import Allergensmodal from './Allergensmodal';
import Qrmodal from './Qrmodal';

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
            transform: 'rotate(-45deg)',
            position: 'absolute',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fontSize: '1.5em',
            fontWeight: 900,
            color: 'rgba(0,0,0,.61)',
            zIndex: '9'
        }
    }


    const [categorias, getCategorias] = useState([]);
    const [verqr, getVerqr] = useState(false);//sirve para darle un estado inicial
    const [isVisible, getIsVisible] = useState(false);

    useEffect(() => {
        getCategorias(JSON.parse(localStorage.getItem('comandaApp')).data.respuesta);
    }, []);

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };

    const sendCategory = (item1, item2) => {
        localStorage.setItem('categorySelected', JSON.stringify({id: item1, nombre: item2}));
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
                {categorias ? (
                        categorias.map(item => {
                            return (
                                <div
                                    className="cont_childs"
                                    onClick={() => sendCategory(item.categoria_id, item.categoria)}
                                    id={item.categoria}
                                    style={cat.cat_cont}
                                    key={item.categoria + item.id}
                                >
                                    <div className="absolut"></div>
                                    <img style={cat.plato_img} src={item.imagen}
                                         alt={`Imagen de categoría ${item.categoria}`}/>
                                    {/*<div style={cat.platos}>*/}
                                    <p style={cat.nom_cat}>
                                        {item.categoria}
                                    </p>
                                    {/*</div>*/}
                                </div>
                            )
                        })

                    ) :
                    <div>
                        <img src="./assets/img/logo192.png" alt="algo"/>
                    </div>
                }
            </div>
        </Fragment>

    )
}

export default Categorias;
