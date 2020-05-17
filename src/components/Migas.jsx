import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Migas = () => {

    const [migas, getMigas] = useState([]);

    useEffect(() => {
        getMigas(JSON.parse(localStorage.getItem('comandaApp')));
    },[migas])

    return (

        <Fragment>
            <div>
                <Link to ="/categoria">

                </Link>                
            </div>
        </Fragment>

    )

}

export default Migas;