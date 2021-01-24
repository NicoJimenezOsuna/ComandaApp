import React from 'react';
import {ReactComponent as Buttondischardfull} from "../../icons/trash.svg";
import {dischardFull} from '../../redux/actions';

const DischardFullComanda = () => {
    const dis = {
        svg: {
            width: '2.5em',
            height: '2.5em',
            fill: '#000',
            margin: '.3em .3em .3em .6em',
            // background: '#fff',
            // border: '1px solid black',
            padding: '1px'
        },
        cont: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: 'rgba(153, 153, 153, 0.19)',
            borderRadius: '15px',
            marginBottom: '10px',
            marginTop: '10px',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        }
    }

    return (
        <div
            style={dis.cont}
            onClick={dischardFull}
        >
            <h3
                onClick={dischardFull}
            >{'¡Borrar todo!'}</h3>
            <Buttondischardfull
                style={dis.svg}
            />
        </div>

    )
};

export default DischardFullComanda;