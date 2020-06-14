import React from 'react';

const Errormessage = ({mensaje}) => {
    const error = {
        princ: {
            width: '100%',
            backgroundColor: '#ef5e5e',
            textAlign: 'left',
            color: '#FFF',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 1px 1px rgba(0,0,0,0.12),' +
                '0 2px 2px rgba(0, 0, 0, 0.12),' +
                '0 4px 4px rgba(0, 0, 0, 0.12),' +
                '0 8px 8px rgba(0, 0, 0, 0.12),' +
                '0 16px 16px rgba(0, 0, 0, 0.12)'
        }
    }

    return (
        <div style={error.princ}>
            <h3>ERROR: </h3>
            <br/>
            <h5>{mensaje}</h5>
        </div>
    )
}
export default Errormessage;