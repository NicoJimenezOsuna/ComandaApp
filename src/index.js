import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/*
* IMPORT COMPONENTS ans VIEWS
 */
import App from './App';
import Launcher from'./views/Launcher'
/*
*
*  IMPORT ROUTER
*
* */
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom'
/*
*
*  IMPORT STYLES
*
* */
import './index.css';
import "./App.css"
import Subcategoria from './components/Subcategoria';
/*
*
*  IMPORT VIEWS
*
* */
// import Header from './views/Header'
// import Footer from './views/Footer'

ReactDOM.render(
  <BrowserRouter>
  {/*<Header/>*/}
    <Switch>
      <Route path="/" exact component={Launcher}/>
      <Route path="/categoria" component={App}/>
      <Route path="/subcategoria" component={Subcategoria}/>
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
