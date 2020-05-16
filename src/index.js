import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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
import "./App.css"
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
      <Route path="/" exact component={App}/>
       {/*<Route path="/" component={App}/>*/}
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
