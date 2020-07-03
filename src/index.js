import React, {useEffect} from 'react';
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
/*
*
*  IMPORT ROUTER
*
* */
import {BrowserRouter, Router, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
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
//COMMENT THIS FUNCTION IN ENTERPRISES PRODUCTION SERVER
import { createBrowserHistory } from 'history';
import ReactGA from "react-ga"

ReactGA.initialize('UA-170329558-1');

function logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
}
//-------------------------------------------------------------------------------------------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router history={createBrowserHistory()} onUpdate={logPageView}>
                {/*<Header/>*/}
                <Switch>
                    <Route path="/" exact component={Launcher}/>
                    <Route path="/categoria" component={App}/>
                    <Route path="/subcategoria" component={Subcategoria}/>
                    <Route path="/404" component={Error404}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
            {/* <Footer /> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
