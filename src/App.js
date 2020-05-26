import React, {Fragment} from 'react';
// import Launcher from './views/Launcher';
import Header from './views/Header';
import Footer from './views/Footer';
import Categoria from './components/Categoria';
import NavUtils from './views/NavUtils';


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
