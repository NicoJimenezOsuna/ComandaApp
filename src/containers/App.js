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
    }, []);

    return (
        <Fragment>
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
                <Categoria/>
                {/* <h1>Hola, Aqui irán los componentes y el enrutado o un Wrapper. Luego te explico que es ;)</h1> */}

            </div>
            <Footer
                vermail={vermail}
                vermapa={vermapa}
            />
        </Fragment>
    );
}

export default App;
