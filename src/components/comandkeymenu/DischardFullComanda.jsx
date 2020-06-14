import React from 'react';
import {ReactComponent as Buttondischardfull} from "../../icons/trash.svg";
import {dischardFull} from '../../redux/actions';

const DischardFullComanda = () => {
    const dis = {
        svg: {
            width: '2em',
            height: '2em',
            fill: '#000',
            margin: '.3em',
            background: '#fff'
        },
        cont:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: 'cyan'
        }
    }

    return(
        <div style={dis.cont}>
            <h3
                onClick={dischardFull}
            >{'¡Borrar todo!'}</h3>
            <Buttondischardfull
                onClick={dischardFull}
                style={dis.svg}
            />
        </div>

    )
};

export default DischardFullComanda;