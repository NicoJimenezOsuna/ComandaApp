import React, {Fragment, useState, useEffect} from "react";
import Spinner from './Spinner';
import '../data/data'
import {allergens} from "../data/data";
import {dosDecim} from "../utils/utils";

const Carousel = ({datas, dataInicios, actualizaPropDataProductId}) => {
    const slide = {
        column: {
            display: 'flex',
            flexDirection: 'column',
        },
        product: {
            marginBottom: '.5em',
        },
        pvp: {
            fontVariant: 'small-caps',
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
            alignItems: 'center',
            overflowX: 'scroll',
            padding: '1em'
        },
        li: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'start',
        },
        img: {
            width: '100%',
            borderRadius: '50px',
            margin: '1em 0'
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
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
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
        }
    }

    const [dataSlider, getDataSlider] = useState([]);
    const [dataInicio, getDataInicio] = useState(0);
    const [buttonNext, getButtonNext] = useState(true);
    const [buttonPrevius, getButtonPrevius] = useState(true);

    useEffect(() => {
        getDataSlider(datas);
        getDataInicio(dataInicios);
    }, [datas, dataInicios]);

    const renderSlider = () => {
        // let productoSel = dataSlider.find(item => {
        //     if (item.plato_id === dataInicio.id) return item;
        // })
        let productoSel = dataSlider[dataInicio];
        console.log('productSel', productoSel)
        return productoSel;
    }

    const controllerButton = (e) => {
        let position = 0;
        dataSlider.find(item => {
            if (item.plato_id === dataInicio) {
                return position = dataSlider.indexOf(item)
            }
        });
        console.log('pos', position)
        console.log('id', dataInicio)
        if (e.target.id === 'next') {
            if (position === dataSlider.length - 1) {
                // getDataInicio(dataSlider[0].plato_id)
                getButtonNext(false)
            } else {
                getButtonPrevius(true)
                getDataInicio(dataInicio + 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio + 1)
            }
        }

        if (e.target.id === 'previus') {
            if (position === 0) {
                // getDataInicio(dataSlider[dataSlider.length - 1].plato_id)
                getButtonPrevius(false)
                actualizaPropDataProductId(dataInicio - 1)
            } else {
                getButtonNext(true)
                getDataInicio(dataInicio - 1);
                //Update initial state of dataProductId in the Subcategoria Component to receive it
                // again as props and not lose state between props and last item.id selected
                actualizaPropDataProductId(dataInicio - 1)
            }
        }

    }

    return (
        <div style={slide.column}>
            {dataSlider.length > 0 ?
                <Fragment>
                    <div style={slide.product}>
                        <h2>{renderSlider().nombreplato}</h2>
                    </div>
                    <div style={slide.datos}>
                        {!isNaN(dataInicio) ?
                            <Fragment>
                                <div style={slide.price}>
                                    <p style={slide.p}>
                                        <span style={slide.pvp}>
                                            pvp: </span>{dosDecim(renderSlider().precio, 2)} €
                                        <sup style={slide.sup}> + iva</sup></p>
                                </div>
                                <ul style={slide.ul}>
                                    {allergens.map((item, index) => {
                                        if (item.id < 7) {
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
                                                    <img style={{width: '3em'}} src={item.imageUrl} alt={item.name}/>
                                                    <p>{item.name}</p>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                                <img
                                    style={slide.img}
                                    src={renderSlider().imagen}
                                    alt={renderSlider().nombreplato}/>
                                <div style={slide.descrip}>
                                    <h3 style={{
                                        fontWeight: 'bolder',
                                        textDecoration: 'underline',
                                        marginBottom: '.5em'
                                    }}>
                                        {renderSlider().nombreplato}
                                    </h3>
                                    <p>
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

export default Carousel;
