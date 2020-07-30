import React, {useEffect, useState} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {connect} from 'react-redux';
import {urlImage} from "../../utils/utils";

const Seo = ({restauranteData, reduxToken}) => {
    const [metaDescription, getMetaDescription] = useState('')
    const [metaImage, getMetaImage] = useState('')
    const [docTitle, getDocTitle] = useState('')

    useEffect(() => {
        if (restauranteData.length > 0) {
            getMetaDescription(
                'Comanda digital de ' + restauranteData[0].nombre_restaurante + ' powered by Socialpymes'
            );
            getMetaImage(urlImage() + restauranteData[0].logo);
            getDocTitle(restauranteData[0].nombre_restaurante)
        }

    }, [restauranteData])

    return (
        restauranteData.length > 0 ?
            <HelmetProvider>
                <Helmet
                    meta={[
                        {
                            name: 'description',
                            content: metaDescription
                        },
                        {
                            property: 'og:image',
                            content: metaImage
                        }
                    ]}
                    title={docTitle}
                />
            </HelmetProvider>
            :
            null
    )
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        reduxToken: state.Token.token
    }
}

export default connect(mapStateToProps)(Seo);