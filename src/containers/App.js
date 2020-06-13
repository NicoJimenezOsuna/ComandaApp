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
import  { Redirect } from 'react-router-dom'

function App({restauranteData}) {
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);
    const [isVisiblePedido, getIsVisiblePedido] = useState(false)

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

    useEffect(() => {
        getMapamodal(verMapamodal);
        getMailmodal(verMailmodal);
    }, [verMailmodal, verMapamodal, restauranteData]);

  if(restauranteData.length <= 0) {
      return <Redirect to='/'/>
  }

    return (
        <Fragment>
            <Listcomandamodal
                isVisiblePedido={isVisiblePedido}
                pedidoViewHandler={pedidoViewHandler}
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
                <Categoria pedidoViewHandler={pedidoViewHandler}/>
                {/* <h1>Hola, Aqui irán los componentes y el enrutado o un Wrapper. Luego te explico que es ;)</h1> */}

            </div>
            <Footer
                vermail={vermail}
                vermapa={vermapa}
                back={'/'}
            />
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile
    }
}

export default connect(mapStateToProps)(App);
