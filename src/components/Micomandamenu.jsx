import React, {Fragment, useEffect, useState} from 'react';
import Commandkeymenu from './comandkeymenu/Commandkeymenu'
import {dosDecim} from "../utils/utils";

const Micomandamenu = ({comandamenu}) => {
    const com = {
        cont: {
            display: 'flex',
            margin: '5px',
            flexDirection: 'column',
            background: '#fff',
            border: '1px solid grey',
            boxShadow: '0 1px 1px rgba(0,0,0,0.12),' +
                '0 2px 2px rgba(0, 0, 0, 0.12),' +
                '0 4px 4px rgba(0, 0, 0, 0.12),' +
                '0 8px 8px rgba(0, 0, 0, 0.12),' +
                '0 16px 16px rgba(0, 0, 0, 0.12)',
            borderRadius: '5px'
        },
        img: {
            width: '20%',
            margin: '5px',
        },
        cont_title: {
            width: '80%',
            padding: '5px'
        },
        title: {
            fontWeight: 'bolder'
        },
        hr: {
            width: '90%',
            height: '1px',
            backgroundColor: 'grey',
            margin: '0 auto'
        },
        price: {
            padding: '0.3em 0.6em',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            borderRadius: '20px',
            textAlign: 'right',
            display: 'inline-block',
            float: 'right',
            color: '#808080'
        },
        sup: {
            fontStyle: 'oblique',
            fontSize: 'large',
            color: '#3E5062'
        },
        cont_platos: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        env_platos: {
            width: '89%',
            padding: '.5em',
        },
        platos: {
            color: 'grey',

        },
        spanplatos: {
            fontWeight: 'bolder',
            color: '#000'
        }
    }

    const [comandamenulista, getComandamenulista] = useState([])

    useEffect(() => {
        getComandamenulista(comandamenu)
    }, [comandamenu])

    if (!comandamenulista) {
        return null
    }

    return (
        <Fragment>
            {comandamenulista.map((item, index, key) => {

                let keys = Object.keys(item)
                let validkeys = keys.filter(key => key !== 'id' && key !== 'nombre' && key !== 'precio' && key !== 'cant' && key !== 'internalID')

                return (
                    <div style={com.cont} key={item.id + index}>
                        <div style={{display: 'flex'}}>
                            <div style={com.img}>
                                <img style={{width: '100%'}} src="./assets/img/menu.jpg" alt={item.nombre}/>
                            </div>
                            <div style={com.cont_title}>
                                <p style={com.title}>{item.nombre}</p>
                                <p style={com.price}>PVP ud.: <span
                                    style={{color: '#000'}}>{dosDecim(item.precio, 2)} €</span>
                                    <sup style={com.sup}> + iva</sup>
                                </p>
                            </div>
                        </div>
                        <hr style={com.hr}/>
                        <div style={com.cont_platos}>
                            <div style={com.env_platos}>
                                {validkeys.map((prop, index) => {
                                    return (
                                        <ul key={Math.random()}>
                                            <li style={{fontWeight: 'bolder', color: 'grey'}}>{prop + ':'}</li>
                                            <li style={{listStyle: 'none', fontWeight: 'bolder'}}>{item[prop].split('?')[0]}</li>
                                        </ul>
                                    )
                                })}


                            </div>
                        </div>
                        <hr style={com.hr}/>
                        <div style={{
                            width: '100%',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p style={{fontSize: '1.3em'}}>{item.cant === 1 ? 'Ud.: ' : 'Uds.: '}<span>{item.cant}</span>
                            </p>
                            <div>
                                <Commandkeymenu
                                    //pasamos el producto
                                    data={item}
                                    //si es carta true, si es menu false
                                    nonprice={false}
                                    wordkey={'menu'}
                                />
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </Fragment>
    )
}
export default Micomandamenu;