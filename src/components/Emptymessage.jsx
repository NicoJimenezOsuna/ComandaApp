import React from 'react';

const Emptymessage = () => {

    const empty = {
        princ: {
            width: '100%',
            padding: '.3em',
            margin: '0 auto'
        },
        h2: {
            padding: '.5em',
            color: 'rgb(128, 128, 128)'
        },
        p: {
            textAlign: 'right',
            paddingRight: '.5em'
        },
        img: {
            maxWidth: '30%',
            maxHeight: '30%',
            display: 'block',
            margin: '0 auto'
        }
    }
    return (
        <div style={empty.princ}>
            <div>
                <h2 style={empty.h2}>Solicite información a nuestro personal de servicio.</h2>
                <p style={empty.p}>Disculpen las molestias</p>
            </div>
        </div>
    )
}

export default Emptymessage;