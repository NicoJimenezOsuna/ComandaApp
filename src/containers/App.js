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
import {
    addNewStateSubcarta,
    addNewProductSelected
} from '../redux/actions'
import HelmetSeoComponent from '../components/Seo/HelmetSeoComponent'

function App({restauranteData, subcarta, dataProductSel}) {
    const history = useHistory();
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);
    const [isVisiblePedido, getIsVisiblePedido] = useState(false);
    const [changesubcat, getChangesubcat] = useState(false);
    const [viewloginmodal, getViewclosemodal] = useState(false);

    const closeLoginModal = () => {
        !viewloginmodal ? getViewclosemodal(true) : getViewclosemodal(false);
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

    // CHANGE CATEGORY WITHOUT LOSING VIEW (MENU OR CARTA).
    const changedView = () => {
        // changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
        // subcarta === false ? addNewStateSubcarta(true) : addNewStateSubcarta(false)
        // addNewStateSubcarta(false)
    }
    const sendCategory = (item1, item2, item3, wordKey, idcarta, isSubcarta) => {
        // localStorage.setItem('categorySelected', JSON.stringify({
        //     id: item1,
        //     nombre: item2,
        //     precio: item3,
        //     wordKey: wordKey,
        //     idcarta: idcarta,
        //     // seccat: null
        // }));
        addNewProductSelected({
            id: item1,
            nombre: item2,
            precio: item3,
            wordKey: wordKey,
            idcarta: idcarta,
        })
        // if (seccat === true || seccat === false) {
        // if (seccat === true || seccat === false) {
        if (isSubcarta === true) {
            // changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
            // subcarta === false ? addNewStateSubcarta(true) : addNewStateSubcarta(false)
            //IF 'isSubcarta' IS TRUE, UPDATE STATE OF SUBCARTA FOR RENDER.
            addNewStateSubcarta(true)
        } else {
            // IF IT IS NOT TRUE, THE SUBCATEGORY WILL BE RENDERED WITH THE DATA FROM THE SELECTED SUBCATEGORY.
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
            <HelmetSeoComponent/>
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
        restauranteData: state.RestauranteData.RestauranteProfile,
        subcarta: state.SwitchMenu.subcarta,
        dataProductSel: state.DataProductSelected.dataProductSel
    }
}

export default connect(mapStateToProps)(App);
