import React, {Fragment} from 'react';

const Alergenos = () => {

    const style = {
        alergenos : {
            whidth: `194px`,
            height:  `67px`,
            backgroundColor: 'rgba(156, 255, 242, 0.68)'
        }
    }

    return (

        <Fragment>
            <button style={style.alergenos}>
                !Alérgenos¡
            </button>
        </Fragment>

    )

}