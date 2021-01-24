import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setCount} from '../../redux/actions'
import {urlImage} from "../../utils/utils";

const Publibanner = ({background, publiCount, advertisement}) => {
    const publi = {
        banner_footer: {
            overflow: "hidden",
            position: "relative",
            width: `100%`,
            // maxHeight: `70px`,
            maxHeight: `3em`,
            left: `0px`,
            padding: `10px`,
            // top: `102px`,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            // borderBottom: "2px solid rgba(112,112,112,1)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#70707045',
        },
        banner_main: {
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url(./assets/img/fondo_points.jpg)',
            overflow: "hidden",
            position: "relative",
            width: `100%`,
            height: `80px`,
            marginTop: '2px',
        },
        h3: {
            width: "50%",
            textAlign: 'center'
        },
        img_publi_footer: {
            maxWidth: '100%',
            maxHeight: '3em',
        },
        img_publi_main: {
            maxWidth: '100%',
            maxHeight: '70px',
        },
        contenedor: {
            width: '75%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3em'
        }
    }

    useEffect(() => {

        const renderImage = setInterval(function () {
            if (publiCount === advertisement.length - 1) {
                setCount(0);
            } else {
                setCount(publiCount + 1);
            }
        }, 3000);

        return () => clearInterval(renderImage)

    }, [publiCount, advertisement]);

    return (
        <div style={background ? publi.banner_main : publi.banner_footer} className="cont_publi">
            <h2 style={publi.h3} className="patrocinadores text-shadow">Patrocinado por: </h2>
            <div style={publi.contenedor}>
                <img style={background ? publi.img_publi_main : publi.img_publi_footer} src={urlImage() + advertisement[publiCount].imagen}
                     alt={advertisement[publiCount].nombrepublicidad}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        // restauranteData: state.RestauranteData.RestauranteProfile,
        publiCount: state.Publicidad.count,
        advertisement: state.Publicidad.arrEnterprises
    }
}

export default connect(mapStateToProps)(Publibanner);