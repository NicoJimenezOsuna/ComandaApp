import React, {Fragment} from 'react';
// import Launcher from './containers/Launcher';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categoria from '../components/Categoria';
import NavUtils from '../components/NavUtils';


function App() {
    return (
        <Fragment>
            <div className="subRoot">
                <Header/>
                <Categoria/>
                {/* <h1>Hola, Aqui irán los componentes y el enrutado o un Wrapper. Luego te explico que es ;)</h1> */}

            </div>
            <Footer/>
        </Fragment>
    );
}

export default App;
