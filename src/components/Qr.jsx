import React, {Fragment} from 'react';
import { ReactComponent as YourSvg } from '../icons/codigo-qr.svg';

const Qr = () => {

    const style = {
        alergenos : {
            width: 'auto',
            height:  '70px',
            backgroundColor: 'rgba(156, 255, 242, 0.68)',
            padding: `5px 25px 5px 25px`,
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
                onClick={()=> alert('ok')}
                />
        </Fragment>
    )

}

export default Qr;