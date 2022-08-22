'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

var _store = require('./redux/store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _Launcher = require('./containers/Launcher');

var _Launcher2 = _interopRequireDefault(_Launcher);

var _Error = require('./containers/Error404');

var _Error2 = _interopRequireDefault(_Error);

var _Subcategoria = require('./containers/Subcategoria');

var _Subcategoria2 = _interopRequireDefault(_Subcategoria);

var _ComandappHome = require('./containers/homecomanda/ComandappHome');

var _ComandappHome2 = _interopRequireDefault(_ComandappHome);

var _reactRouterDom = require('react-router-dom');

require('./index.css');

require('./App.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*
*  IMPORT VIEWS
*
* */
// import Header from './containers/Header'
// import Footer from './containers/Footer'

/*
*
*  IMPORT STYLES
*
* */

/*
* IMPORT COMPONENTS ans containers
 */

/*
*
* IMPORT STORE REDUX
*
* */
_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Launcher2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/categoria', component: _App2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/subcategoria', component: _Subcategoria2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/comandappHome', component: _ComandappHome2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _Error2.default }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/404' })
        )
    )
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*
*
*  IMPORT ROUTER
*
* */
serviceWorker.unregister();