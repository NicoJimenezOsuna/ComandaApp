import React from 'react';
import Commandkeypadmenu from "../comandkeymenu/Commandkeymenu";

const Modalcomandkeypadhomemenu = ({
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
            <Commandkeypadmenu
                //pasamos el producto
                data={data}
                //si es carta true, si es menu false
                nonprice={false}
                wordkey={'menu'}
            />
            <div className="triangulo"></div>
        </div>
    )
}
export default Modalcomandkeypadhomemenu;