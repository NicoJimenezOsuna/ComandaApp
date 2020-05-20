import React from 'react';
import { ReactComponent as YourSvg } from '../icons/search-plus-solid.svg';

const Buttoninfo = () => {
    const icon = {
        search_ico : {
            width: '30px',
            color: '#404448',
            cursor: 'pointer',
        }
    }
    
    return (
    <YourSvg 
        style={icon.search_ico}
        onClick={()=> alert('ok')}
        />
    )
}

export default Buttoninfo;