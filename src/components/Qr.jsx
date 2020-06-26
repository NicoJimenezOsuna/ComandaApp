import React, {Fragment} from 'react';
import {ReactComponent as YourSvg} from '../icons/navutils/escanear.svg';

const Qr = ({codigoqr}) => {

    const style = {
        qr: {
            // width: `100%`,
            // height:  `50px`,
            // backgroundColor: 'rgba(156, 255, 242, 0.68)',
            // margin: '0 2.5px 0 5px',
            // padding: '5px',
            // alignItems: 'center',
            // filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
            // borderRadius: `50px`,
            // border: '2px solid  rgb(112, 112, 112)'
            width: '100%',
            height: '50px',
            /* background-color: rgba(156, 255, 242, 0.68); */
            margin: '0px 2.5px',
            padding: '5px',
            alignItems: 'center',
            filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 3px 3px 6px)',
            borderRadius: '8px',
            border: '2px solid #ECECEC',
            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2)',
            fill: '#6e6868'
        }
    }

    return (
        <Fragment>
            <YourSvg
                style={style.qr}
                onClick={codigoqr}
            />
        </Fragment>
    )

}

export default Qr;