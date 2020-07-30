import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/*
*
* IMPORT STORE REDUX
*
* */
import store from './redux/store';
import {Provider} from "react-redux";
/*
* IMPORT COMPONENTS ans containers
 */
import App from './containers/App';
import Launcher from './containers/Launcher';
import Error404 from './containers/Error404';
import Subcategoria from './containers/Subcategoria';
import ClientProfile from "./containers/homecomanda/ClientProfile";
/*
*
*  IMPORT ROUTER
*
* */
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
/*
*
*  IMPORT STYLES
*
* */
import './index.css';
import "./App.css"
/*
*
*  IMPORT VIEWS
*
* */
// import Header from './containers/Header'
// import Footer from './containers/Footer'
//------------------------------------------------------------------------------------------------------------------------
/*
*
*  GOOGLE ANALITICS :
*
* */


//-------------------------------------------------------------------------------------------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={Launcher}/>
                <Route path="/categoria" component={App}/>
                <Route path="/subcategoria" component={Subcategoria}/>
                <Route path="/datos-cliente" component={ClientProfile}/>
                <Route path="/404" component={Error404}/>
                <Redirect to="/404"/>
            </Switch>
            {/* <Footer /> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
