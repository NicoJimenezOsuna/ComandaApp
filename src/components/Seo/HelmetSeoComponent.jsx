import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {urlImage} from "../../utils/utils";

const HelmetSeoComponent = ({restauranteData, reduxToken}) => {

    const [tagTitle, getTitle] = useState('');
    const [tagDescrption, getDescription] = useState('');
    const [hrefCanonical, getHrefCanonical] = useState('');
    const [urlRestaurantImage, getUrlRestaurantImage] = useState('');

    useEffect(() => {
        getTitle(restauranteData[0].nombre_restaurante + ' | Comanda digital powered by Socialpymes');
        getDescription("Comanda digital de " + restauranteData[0].nombre_restaurante + " realizar pedidos en el propio local o desde casa powered by Socialpymes")
        getHrefCanonical(window.location.protocol + '//' + window.location.host + '?' + reduxToken);
        getUrlRestaurantImage(urlImage() + restauranteData[0].imagen_restaurante)

    }, [reduxToken, restauranteData])

    //EJEMPLOS BUTTON COMPARTIR
    // TWITTER
    //     http://twitter.com/share?text=MetaTags%20b%C3%A1sicos%20para%20compartir%20en%20las%20Redes%20Sociales&url=https://www.bufa.es/metatags-basicos-redes-sociales/&via=jorge_maiden&hashtags=redessociales
    //FACEBOOK
    //     http://www.facebook.com/sharer.php?u=https://www.bufa.es/metatags-basicos-redes-sociales/&t=MetaTags%20b%C3%A1sicos%20para%20compartir%20en%20las%20Redes%20Sociales

    return (
        <Helmet>
            {/*SEO*/}
            <title>{tagTitle}</title>
            <meta name="description" content={tagDescrption}/>
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content="comida para llevar,
                 carta digital,
                 comanda restaurante,
                 comanda online,
                 carta digital online,
                 comanda restaurante digital gratis,
                 carta restaurante,
                 comanda Socialpymes,
                 comida para llevar app,
                     "/>
            <link rel="canonical" href={hrefCanonical}/>
            <meta name="author" content="Alberto García Elías, agarcweb@gmail.com" />
            <meta name="copyright" content="Socialpymes" />
            <meta name="robots" content="index"/>
            <meta name="application-name" content="ComandappFree, Comanda digital de Socialpymes para restaurantes" />

            {/*Open Graph */}
            <meta property="og:url" content={getHrefCanonical}/>
            <meta property="og:title" content={tagTitle}/>
            <meta property="og:image" content={urlRestaurantImage}/>
            <meta property="og:description" content={tagDescrption}/>

            {/*Twitter Card*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={tagTitle}/>
            <meta name="twitter:description" content={tagDescrption}/>
            {/*<meta name="twitter:site" content="@jorge_maiden"/>*/}
            {/*<meta name="twitter:creator" content="@jorge_maiden"/>*/}
            <meta name="twitter:image" content={urlRestaurantImage}/>

        </Helmet>
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    }
}

export default connect(mapStateToProps)(HelmetSeoComponent);