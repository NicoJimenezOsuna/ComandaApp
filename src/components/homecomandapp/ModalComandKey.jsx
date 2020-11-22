import React from 'react';
import Commandkeypad from "../Commandkeypad";

const MoldalComandKey = ({
                             modaltable,
                             modalid,
                             ident,
                             data
                         }) => {
    const mtable = {
        cont_princ: {
            position: 'absolute',
        }
    }

    return (
            <div
                className={modaltable && modalid === ident ? 'pos-abs-command displayed' : 'pos-abs-command displayed_none'}
                style={mtable.cont_princ}
            >
                <Commandkeypad
                    //pasamos el producto
                    data={data}
                    //si es carta true, si es menu false
                    nonprice={true}
                    wordkey={'carta'}
                />
                <div className="triangulo"></div>
            </div>
    )
}

export default MoldalComandKey;