import React, {Fragmnet} from 'react';
import {urlImage} from "../utils/utils";
import {connect} from "react-redux";

const Emptymessage = ({restauranteData, token}) => {

const empty = {
    princ:  {
        width: '100%',
        padding: '.3em',
        margin: '0 auto'
    },
    h2:{
        padding: '.5em',
        color: 'rgb(128, 128, 128)'
    },
    p:{
        textAlign: 'right',
        paddingRight: '.5em'
    },
    img : {
        maxWidth: '100%',
        maxHeight: '200px'
    }
}
    return (
        <div style={empty.princ}>
            <div>
                <h2 style={empty.h2}>Solicite información a nuestro personal de servicio.</h2>
                <p style={empty.p}>Disculpen las molestias</p>
            </div>
            <img style={empty.img} src={urlImage() + restauranteData[0].logo} alt="" style={{width: '100%'}}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token
    }
}

export default connect(mapStateToProps)(Emptymessage);