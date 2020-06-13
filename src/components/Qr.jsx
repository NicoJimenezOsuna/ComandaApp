import React, {Fragment} from 'react';
import { ReactComponent as YourSvg } from '../icons/qr-socialpymes.svg';

const Qr = ({codigoqr}) => {

    const style = {
        alergenos : {
            width: `100%`,
            height:  `50px`,
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            margin: '0 2.5px 0 5px',
            padding: '5px',
            alignItems: 'center',
            filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            borderRadius: `50px`,
            border: '2px solid  rgb(112, 112, 112)'

        }
    }

    return (
        <Fragment>
            <YourSvg 
                style={style.alergenos}
                onClick={codigoqr}
                />
        </Fragment>
    )

}

export default Qr;