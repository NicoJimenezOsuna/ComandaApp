import React from 'react';

const Spinnercircle = () => {
const spinnercir = {
    cont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

    return (
        <div style={spinnercir.cont}>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}
export default Spinnercircle;