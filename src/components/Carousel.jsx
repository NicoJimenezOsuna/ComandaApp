import React from "react";
import {Glide} from 'react-glide';
// import 'react-glide/lib/reactGlide.css'
import {useState, useEffect} from "react";
import '../data/data'
import {allergens} from "../data/data";

const Carousel = ({datas, dataInicios}) => {
    const slide = {
        column: {
            display: 'flex',
            flexDirection: 'column',
        },
        product: {
            marginBottom: '.5em',
        },
        pvp : {
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '.6em 0'
        },
        spanButton: {
            padding: '.5em 1em',
            borderRadius: '20px',
            border: '1px solid black'
        },
        sup: {
            fontStyle: 'oblique',
            fontSize: 'large',
            color: '#3E5062'
        }
    }

    const [dataSlider, getDataSlider] = useState([]);
    const [dataInicio, getDataInicio] = useState(0);

    useEffect(() => {
        getDataSlider(datas);
        getDataInicio(dataInicios);
    }, [datas, dataInicios]);

    return (
        <div style={slide.column}>
            <div style={slide.product}>
                <h2>Nombre de producto</h2>
            </div>
            <div style={slide.datos}>
                <div style={slide.price}>
                    <p style={slide.p}>
                        <span style={slide.pvp}>pvp:</span> 30 €<sup style={slide.sup}> + iva</sup></p>
                </div>
                <ul style={slide.ul}>
                    {allergens.map((item, index) => {
                        if (item.id < 7) {
                            return (
                                <li
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
                    src="./assets/img/categorias/carne_categoria.png"
                    alt="imagen"/>
                <div style={slide.descrip}>
                    <h3 style={{fontWeight: 'bolder',textDecoration: 'underline',marginBottom: '.5em'}}>Nombre de producto</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, doloremque, ipsa. Aut cum
                        dolor dolore laboriosam nam quasi tenetur?.
                    </p>
                </div>
                <div style={slide.divSpanButton}>
                    <span style={slide.spanButton}>{'<< ANTERIOR'}</span>
                    <span style={slide.spanButton}>{'SIGUIENTE >>'}</span>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
