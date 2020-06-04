import React, {Fragment,useState,useEffect} from 'react';
// import Launcher from './containers/Launcher';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categoria from '../components/Categoria';
import NavUtils from '../components/NavUtils';
import Mailmodal from "../components/Mailmodal";
import Mapamodal from "../components/Mapamodal";

// Import data
// import {globalinfo} from "../data/data";


function App() {
    //Constantes de modales
    const [verMapamodal, getMapamodal] = useState(false);
    const [verMailmodal, getMailmodal] = useState(false);
    const [datosrestaurante, getDatosRestaurante] = useState({})

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

        let datosderetaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
        if (datosderetaurante) {
            getDatosRestaurante(datosderetaurante)
        } else {
            //hacer algo si localstorage está vacío
        }
    }, [verMailmodal, verMapamodal]);

    return (
        <Fragment>
            <Mailmodal
                vermail={vermail}
                verMailmodal={verMailmodal}
                datosrestaurante={datosrestaurante}
            />
            <Mapamodal
                vermapa={vermapa}
                verMapamodal={verMapamodal}
                datosrestaurante={datosrestaurante}
            />
            <div className="subRoot">
                <Header/>
                <Categoria/>
                {/* <h1>Hola, Aqui irán los componentes y el enrutado o un Wrapper. Luego te explico que es ;)</h1> */}

            </div>
            <Footer
                vermail={vermail}
                vermapa={vermapa}
                datosrestaurante={datosrestaurante}
            />
        </Fragment>
    );
}

export default App;
