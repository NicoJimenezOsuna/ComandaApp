import React, {Fragment} from 'react';

const Modalmenuselected = ({
                               modaltable,
                               modalid,
                               ident,
                               items,
                               item
                           }) => {

    const menusel = {
        cont_princ: {
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            // bottom: '-10em',
            // right: '-10em',
            zIndex: 1,
            display: 'flex'
        },
        ul: {
            padding: '.5em 1.5em',
            background: '#fff',
            border: '1.5px solid darkorange',
            borderRadius: '5px'
        }
    }

    return (
        <Fragment>
            <Fragment>
                <div
                    className={modaltable && modalid === ident ? 'pos-abs-selectmenu displayed' : 'pos-abs-selectmenu displayed_none'}
                    style={menusel.cont_princ}
                >
                    <div className="triangulo_menu"></div>
                    <ul style={menusel.ul}
                        key={Math.random()}>
                        {
                            items.map((prop, index) => {
                                if(item[prop] !== item['internalID']) {
                                    return (
                                        <li key={index}
                                            style={{listStyle: 'square', fontWeight: 'bolder'}}
                                        >{item[prop]}</li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        </Fragment>
    )
}
export default Modalmenuselected;