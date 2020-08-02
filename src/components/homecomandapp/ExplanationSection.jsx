import React, {Fragment} from 'react';

const ExplanationSection = ({explanation}) => {

    return (
        <div style={{
            width: '80%',
            margin: '0px auto',
            padding: '1em',
            borderLeft: '2px solid #707070',
            marginBottom: '1rem'
        }}>
            <p style={{fontFamily: 'Dasis', textIndent: '1em'}}>{explanation}</p>
        </div>
    )
}

export default ExplanationSection;