import React, {Fragment} from 'react';

const TitleSection = ({title}) => {
    return (
        <Fragment>
            <h1 style={{textAlign: 'center', fontFamily: 'Dosis', color: '#707070'}}>{title}</h1>
            <hr style={{
                width: '80%',
                border: '1px solid rgb(211, 211, 211)',
                margin: '0px auto',
                marginBottom: '1rem',
                color: '#707070'
            }}/>
        </Fragment>
    )
}

export default TitleSection;