import React, {Fragment} from 'react';

const ModalTable = ({modaltable, imagen, modalid, ident}) => {
    const mtable = {
        cont_princ: {
            position: 'absolute',
            width: '10em',
            height: '10em',
            // bottom: '-10em',
            // right: '-10em',
            zIndex: 1
        }
    }

    return (
        <Fragment>

            <div
                className={modaltable && modalid === ident ? 'pos-abs-right displayed' : 'pos-abs-right displayed_none'}
                style={mtable.cont_princ}
            >
                <img src={imagen} alt=""
                     style={{width: '10em', height: 'auto'}}
                />
            </div>
        </Fragment>
    )
}
export default ModalTable;