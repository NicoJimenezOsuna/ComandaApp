import React, {Fragment, useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import NavUtils from './NavUtils';
import Allergensmodal from './Allergensmodal';
import Qrmodal from './Qrmodal';
import {urlImage} from '../utils/utils';
import {connect} from 'react-redux';
import Subcarta from './Subcarta';
import Emptymessage from "./Emptymessage";
import Publibanner from "./publicidad/Publibanner";
import {addNewStateSubcarta} from '../redux/actions'

const Categorias = ({
                        pedidoViewHandler,
                        restauranteData,
                        changedView,
                        sendCategory,
                        getChangeColor,
                        subcarta,
                        dataProductSel
                    }) => {

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

    // const [idcarta, getIdcarta] = useState(null);
    const [categorias, getCategorias] = useState([]);
    const [verqr, getVerqr] = useState(false);//sirve para darle un estado inicial
    const [isVisible, getIsVisible] = useState(false);
    const [selected, getselected] = useState('carta');

    useEffect(() => {
        //   -- LOGIC FOR ACTION BUTTON BACK ---
        // TO RETURN OF MENU SUBCATEGORY, SET VIEW OF MENU.
        if (dataProductSel.wordKey === 'menu') {
            getselected('menus')
        }

        getCategorias(...restauranteData);
    }, [restauranteData, dataProductSel]);

    const selectedView = (e) => {
        //RESET THE 'SUBCARTA' STATUS TO FALSE BY CLICKING ON BUTTON MENU OR CARD
        addNewStateSubcarta(false)

        e.preventDefault();
        getselected(e.target.id);
        if (e.target.id === 'menus') {
            getChangeColor();
        }
    }

    const visibleHandler = () => {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };

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
                    >CARTA</span>
                    <span className={selected === 'carta' ? 'span_no_select button' : "span_select button"}
                          style={cat.span}
                          id="menus"
                          onClick={selectedView}
                    > MENU</span>
                </div>
                {
                    restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                        <Publibanner background={true}/>
                        :
                        null
                }
                {selected === 'carta' && categorias.mensaje === 'OK' ? (
                        //changesubcat establece el cambio de vista a subcategoría para
                        subcarta === false ?
                            categorias.respuesta.map(item => {
                                if (!item.esmenu) {
                                    return (
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
                                }
                            })
                            :
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
                {selected === 'menus' && categorias.mensaje === 'OK' ? (
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
        token: state.Token.token,
        subcarta: state.SwitchMenu.subcarta,
        dataProductSel: state.DataProductSelected.dataProductSel
    }
}

export default connect(mapStateToProps)(Categorias);
