import React, {Fragment} from "react";
import Alergenos from './Alergenos';
import Qr from './Qr';
import {ReactComponent as Listicon} from "../icons/navutils/lista.svg";
import {connect} from "react-redux"


const NavUtils = ({visible, codigoqr, pedidoViewHandler, restauranteData}) => {
    const style = {
        menu: {
            overflow: "visible",
            position: "relative",
            width: `100%`,
            height: `70px`,
            left: `0px`,
            padding: `10px`,
            // top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            // justifyContent: 'flex-end',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
        },
        list: {
            width: '100%',
            height: '50px',
            margin: '0px 2.5px',
            padding: '5px',
            alignItems: 'center',
            filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 3px 3px 6px)',
            borderRadius: '8px',
            border: '2px solid #ECECEC',
            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2)',
            fill: '#6e6868'
        }

    };

    return (
        <Fragment>
            <div style={style.menu}>
                <Qr codigoqr={codigoqr}/>
                <Alergenos visible={visible}/>
                {restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ?
                    <Listicon
                        style={style.list}
                        onClick={pedidoViewHandler}/>
                    :
                    null
                }
            </div>
        </Fragment>
    );
};

function mapStateToProps(state){
    return{
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect (mapStateToProps)(NavUtils);