import React, {Fragment, useState, useEffect} from "react";
import Spinner from './Spinner';
import {
    HTTP_PROTOCOL,
    URL_MAIN,
    USER_HEADERS,
    PATH_API,
} from '../data/connect_data_restaurantes';
import {dosDecim, urlImage} from "../utils/utils";
import Commandkeypad from './Commandkeypad';
import {connect} from "react-redux";
import "../App.css";
import axios from "axios";

const Carousel = ({
                      datas,
                      dataInicios,
                      actualizaPropDataProductId,
                      wordkey,
                      products,
                      token
                  }) => {
    const slide = {
        column: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Dosis',
            marginTop: '-.5em'
        },
        product: {
            marginBottom: '.5em',
        },
        pvp: {
            fontVariant: 'small-caps',
            color: '#808080'
        },
        datos: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        price: {},
        p: {
            fontSize: '2em',
            padding: '0.3em .6em',
            backgroundColor: '#00800033',
            borderRadius: '20px'
        },
        allergens: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        ul: {
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'baseline',
            overflowX: 'scroll',
            padding: '.5em',
            width: '100%'
        },
        li: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'start',
        },
        img: {
            borderRadius: '50px',
            margin: '1em 0',
            maxWidth: '100%',
            maxHeight: '300px',
        },
        figure: {
            width: '100%',
            borderRadius: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        descrip: {
            padding: '10px',
            textAlign: 'justify',
            fontSize: '1.2em',
            // textIndent: '1em',
        },
        divSpanButton: {
            width: '100%',
            mergin: '0 2em',
            margin: '.6em 0',
            alignSelf: 'end'
        },
        spanButtonRight: {
            padding: '.5em 1em',
            borderRadius: '20px',
            border: '1px solid black',
            float: 'right'
        },
        spanButtonLeft: {
            padding: '.5em 1em',
            borderRadius: '20px',
            border: '1px solid black',
            float: 'left'
        },
        sup: {
            fontStyle: 'oblique',
            fontSize: 'large',
            color: '#3E5062'
        },
        between: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '2em'
        },
        title: {
            textAlign: 'center'
        }
    }

    const [dataSlider, getDataSlider] = useState([]);
    const [dataInicio, getDataInicio] = useState(0);
    const [buttonNext, getButtonNext] = useState(true);
    const [buttonPrevius, getButtonPrevius] = useState(true);
    const [stwordkey, getStWordkey] = useState('');
    const [product, getProduct] = useState(false);
    const [lallergens, getAllergens] = useState([]);
    const [idplato, getIdplato] = useState(null);

    useEffect(() => {
        getDataSlider(datas);
        getDataInicio(dataInicios);
        getStWordkey(wordkey);
        getProduct(products);

    }, [datas, dataInicios, wordkey, products]);

    useEffect(() => {
        if (datas && dataInicios) {
            getIdplato(datas[dataInicios].plato_id);
        }
    }, [datas, dataInicios])

    useEffect(() => {
        if (datas.length > 0) {
            const allergensRequest = async (headers, protocol, url, pathApi, token, idplato) => {
                try {
                    // Make a request
                    const response = await axios.get(`${protocol}${url}${pathApi}3/${token}/${idplato}`, USER_HEADERS);
                    await getAllergens(response.data.data.respuesta);

                } catch (error) {
                    console.log("error", error);
                }
            };
            allergensRequest(USER_HEADERS, HTTP_PROTOCOL, URL_MAIN, PATH_API, token, datas[dataInicios].plato_id);
        }
    }, [datas, idplato, dataInicios, dataSlider, token])

    const renderSlider = () => {
        return dataSlider[dataInicio];
    }

    const controllerButton = (e) => {
        let position = 0;
        dataSlider.find(item => {
            if (item.plato_id === dataInicio) {
                position = dataSlider.indexOf(item);
            }
            return position;
        });
        if (e.target.id === 'next') {
            if (position === dataSlider.length - 1) {
                getButtonNext(false);
            } else {
                getButtonPrevius(true);
                getDataInicio(dataInicio + 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio + 1);
            }
        }

        if (e.target.id === 'previus') {
            if (position === 0) {
                actualizaPropDataProductId(dataInicio - 1);
            } else {
                getButtonNext(true);
                getDataInicio(dataInicio - 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio - 1);
            }
        }
    }


    return (
        <div style={slide.column}>
            {dataSlider.length > 0 ?
                <Fragment>
                    <div style={slide.product}>
                        <h2
                            style={slide.title}
                        >{renderSlider().nombreplato}</h2>
                    </div>
                    <div style={slide.datos}>
                        {!isNaN(dataInicio) ?
                            <Fragment>
                                {stwordkey === 'carta' ?
                                    <div style={slide.price}>
                                        <p style={slide.p}>
                                        <span style={slide.pvp}>
                                            pvp <span style={{
                                            fontVariant: 'normal',
                                            fontSize: '.7em'
                                        }}>ud:</span> </span>{dosDecim(renderSlider().precio, 2)} €
                                            {/*<sup style={slide.sup}> + iva</sup>*/}
                                        </p>
                                    </div>
                                    :
                                    null
                                }
                                {stwordkey === 'menu' ?
                                    null
                                    :
                                    <div style={slide.between}
                                         className={stwordkey === 'carta' ? 'displayed' : 'displayed_none'}>
                                        <p>HA PEDIDO: <span style={{fontSize: '1.5em', marginRight: '1em'}}>
                                      {
                                          product.map(item => {
                                              if (item.plato_id === renderSlider().plato_id) {
                                                  return item.cant
                                              }
                                          })
                                      }
                                  </span></p>
                                        {stwordkey === 'carta' ?
                                            <div>
                                                <Commandkeypad
                                                    data={datas[dataInicios]}
                                                    wordkey={stwordkey}
                                                />
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                }
                                <ul style={slide.ul}>
                                    {lallergens.length > 0 ?
                                        lallergens.map((item, index) => {
                                            return (
                                                <li key={item.id}
                                                    style={slide.li}
                                                    className={
                                                        index === 0 ?
                                                            'paddingRighttAllergensModal'
                                                            :
                                                            'paddingAllergensModal'
                                                    }
                                                >
                                                    <img style={{width: '3em'}} src={urlImage() + item.imagen}
                                                         alt={item.nombrealergeno}/>
                                                    <p>{item.nombrealergeno}</p>
                                                </li>
                                            )
                                        })
                                        :
                                        'Alergenos no disponibles'
                                    }
                                </ul>
                                <figure style={slide.figure}>
                                    <img
                                        style={slide.img}
                                        src={renderSlider().imagen}
                                        alt={renderSlider().nombreplato}/>
                                    <figcaption>{renderSlider().nombreplato}</figcaption>
                                </figure>
                                <div style={slide.descrip}>
                                    <p style={{fontWeight: 'bolder'}}>
                                        {renderSlider().observaciones}
                                    </p>
                                </div>
                                <div style={slide.divSpanButton}>
                                    {buttonPrevius && 0 !== dataInicios ?
                                        <span
                                            id='previus'
                                            onClick={controllerButton}
                                            style={slide.spanButtonLeft}>{'<< ANTERIOR'}</span>
                                        :
                                        null
                                    }
                                    {buttonNext && dataSlider.length - 1 !== dataInicios ?
                                        <span
                                            id='next'
                                            onClick={controllerButton}
                                            style={slide.spanButtonRight}>{'SIGUIENTE >>'}</span>
                                        :
                                        null
                                    }
                                </div>
                            </Fragment>
                            :
                            <Spinner/>
                        }
                    </div>
                </Fragment>
                :
                <Spinner/>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Carousel);
