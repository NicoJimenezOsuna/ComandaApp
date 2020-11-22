import React, {Fragment, useState, useEffect} from 'react';
// import Launcher from './containers/Launcher';
// import NavUtils from '../components/NavUtils';
// import {CONNECT_TOKEN, firstRequest, URL} from "../data/restaurante";
// import {protocol} from "../utils/utils";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categoria from '../components/Categoria';
import Mailmodal from "../components/Mailmodal";
import Mapamodal from "../components/Mapamodal";
import Listcomandamodal from "../components/Listcomandamodal";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import Login from '../components/homecomandapp/Login'
import Seo from "../components/Seo/Seo";

function App({restauranteData}) {
    const history = useHistory();
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);
    const [isVisiblePedido, getIsVisiblePedido] = useState(false);
    const [changesubcat, getChangesubcat] = useState(false);
    const [viewloginmodal, getViewclosemodal] = useState(false);

    const closeLoginModal = () => {
        !viewloginmodal ? getViewclosemodal(true) : getViewclosemodal(false);
        let styleBodyTag = document.body.style
        // if(styleBodyTag.overflow === "hidden"){
        //     styleBodyTag.overflow = 'inherit';
        // }else{
        //     styleBodyTag.overflow = "hidden";
        // }

    };

    const pedidoViewHandler = () => {
        !isVisiblePedido ? getIsVisiblePedido(true) : getIsVisiblePedido(false);
    }

    //Variables para actualizar el estado de modales
    let vermapa = () => {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }//sirve para actualizar el estado
    const vermail = () => {
        !verMailmodal ? getMailmodal(true) : getMailmodal(false);
    }//sirve para actualizar el estado

    //cambiar vista de categoria a subcategoria sin perder vista
    const changedView = () => {
        changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
    }
    const sendCategory = (item1, item2, item3, wordKey, idcarta, seccat) => {
        localStorage.setItem('categorySelected', JSON.stringify({
            id: item1,
            nombre: item2,
            precio: item3,
            wordKey: wordKey,
            idcarta: idcarta,
            seccat: null
        }));
        if (seccat === true || seccat === false) {
            changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
        } else {
            history.push("/subcategoria");
        }
    };

    const getChangeColor = () => {
        getChangesubcat(false)
    }

    useEffect(() => {
        getMapamodal(verMapamodal);
        getMailmodal(verMailmodal);
    }, [verMailmodal, verMapamodal, restauranteData, viewloginmodal]);

    if (restauranteData.length <= 0) {
        return <Redirect to='/'/>
    }

    return (
        <Fragment>
            <Seo/>
            <Listcomandamodal
                isVisiblePedido={isVisiblePedido}
                pedidoViewHandler={pedidoViewHandler}
                closeloginmodal={closeLoginModal}
            />
            <Mailmodal
                vermail={vermail}
                verMailmodal={verMailmodal}
            />
            <Mapamodal
                vermapa={vermapa}
                verMapamodal={verMapamodal}
            />
            <div className="subRoot">
                <Header/>
                <Categoria
                    getChangeColor={getChangeColor}
                    pedidoViewHandler={pedidoViewHandler}
                    changedView={changedView}
                    sendCategory={sendCategory}
                    changesubcat={changesubcat}
                />
                {/* <h1>Hola, Aqui irán los componentes y el enrutado o un Wrapper. Luego te explico que es ;)</h1> */}

            </div>
            <Footer
                changesubcat={changesubcat}
                changedView={changedView}
                vermail={vermail}
                vermapa={vermapa}
                closeloginmodal={closeLoginModal}
                back={'/'}
            />
            <div className={viewloginmodal ? 'login_home displayed' : 'displayed_none'}>
                <Login closeloginmodal={closeLoginModal}/>
            </div>
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(App);
