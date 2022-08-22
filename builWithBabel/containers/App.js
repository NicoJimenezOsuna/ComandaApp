'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import Launcher from './containers/Launcher';
// import NavUtils from '../components/NavUtils';
// import {CONNECT_TOKEN, firstRequest, URL} from "../data/restaurante";
// import {protocol} from "../utils/utils";


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Categoria = require('../components/Categoria');

var _Categoria2 = _interopRequireDefault(_Categoria);

var _Mailmodal = require('../components/Mailmodal');

var _Mailmodal2 = _interopRequireDefault(_Mailmodal);

var _Mapamodal = require('../components/Mapamodal');

var _Mapamodal2 = _interopRequireDefault(_Mapamodal);

var _Listcomandamodal = require('../components/Listcomandamodal');

var _Listcomandamodal2 = _interopRequireDefault(_Listcomandamodal);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _Login = require('../components/homecomandapp/Login');

var _Login2 = _interopRequireDefault(_Login);

var _actions = require('../redux/actions');

var _HelmetSeoComponent = require('../components/Seo/HelmetSeoComponent');

var _HelmetSeoComponent2 = _interopRequireDefault(_HelmetSeoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
    var restauranteData = _ref.restauranteData,
        subcarta = _ref.subcarta,
        dataProductSel = _ref.dataProductSel;

    var history = (0, _reactRouterDom.useHistory)();
    //Constantes de modales

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        verMapamodal = _useState2[0],
        getMapamodal = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        verMailmodal = _useState4[0],
        getMailmodal = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isVisiblePedido = _useState6[0],
        getIsVisiblePedido = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        changesubcat = _useState8[0],
        getChangesubcat = _useState8[1];

    var _useState9 = (0, _react.useState)(false),
        _useState10 = _slicedToArray(_useState9, 2),
        viewloginmodal = _useState10[0],
        getViewclosemodal = _useState10[1];

    var closeLoginModal = function closeLoginModal() {
        !viewloginmodal ? getViewclosemodal(true) : getViewclosemodal(false);
    };

    var pedidoViewHandler = function pedidoViewHandler() {
        !isVisiblePedido ? getIsVisiblePedido(true) : getIsVisiblePedido(false);
    };

    //Variables para actualizar el estado de modales
    var vermapa = function vermapa() {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }; //sirve para actualizar el estado
    var vermail = function vermail() {
        !verMailmodal ? getMailmodal(true) : getMailmodal(false);
    }; //sirve para actualizar el estado

    // CHANGE CATEGORY WITHOUT LOSING VIEW (MENU OR CARTA).
    var changedView = function changedView() {
        // changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
        // subcarta === false ? addNewStateSubcarta(true) : addNewStateSubcarta(false)
        // addNewStateSubcarta(false)
    };
    var sendCategory = function sendCategory(item1, item2, item3, wordKey, idcarta, isSubcarta) {
        // localStorage.setItem('categorySelected', JSON.stringify({
        //     id: item1,
        //     nombre: item2,
        //     precio: item3,
        //     wordKey: wordKey,
        //     idcarta: idcarta,
        //     // seccat: null
        // }));
        (0, _actions.addNewProductSelected)({
            id: item1,
            nombre: item2,
            precio: item3,
            wordKey: wordKey,
            idcarta: idcarta
        });
        // if (seccat === true || seccat === false) {
        // if (seccat === true || seccat === false) {
        if (isSubcarta === true) {
            // changesubcat === false ? getChangesubcat(true) : getChangesubcat(false)
            // subcarta === false ? addNewStateSubcarta(true) : addNewStateSubcarta(false)
            //IF 'isSubcarta' IS TRUE, UPDATE STATE OF SUBCARTA FOR RENDER.
            (0, _actions.addNewStateSubcarta)(true);
        } else {
            // IF IT IS NOT TRUE, THE SUBCATEGORY WILL BE RENDERED WITH THE DATA FROM THE SELECTED SUBCATEGORY.
            history.push("/subcategoria");
        }
    };

    var getChangeColor = function getChangeColor() {
        getChangesubcat(false);
    };

    (0, _react.useEffect)(function () {
        getMapamodal(verMapamodal);
        getMailmodal(verMailmodal);
    }, [verMailmodal, verMapamodal, restauranteData, viewloginmodal]);

    if (restauranteData.length <= 0) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_HelmetSeoComponent2.default, null),
        _react2.default.createElement(_Listcomandamodal2.default, {
            isVisiblePedido: isVisiblePedido,
            pedidoViewHandler: pedidoViewHandler,
            closeloginmodal: closeLoginModal
        }),
        _react2.default.createElement(_Mailmodal2.default, {
            vermail: vermail,
            verMailmodal: verMailmodal
        }),
        _react2.default.createElement(_Mapamodal2.default, {
            vermapa: vermapa,
            verMapamodal: verMapamodal
        }),
        _react2.default.createElement(
            'div',
            { className: 'subRoot' },
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(_Categoria2.default, {
                getChangeColor: getChangeColor,
                pedidoViewHandler: pedidoViewHandler,
                changedView: changedView,
                sendCategory: sendCategory,
                changesubcat: changesubcat
            })
        ),
        _react2.default.createElement(_Footer2.default, {
            changesubcat: changesubcat,
            changedView: changedView,
            vermail: vermail,
            vermapa: vermapa,
            closeloginmodal: closeLoginModal,
            back: '/'
        }),
        _react2.default.createElement(
            'div',
            { className: viewloginmodal ? 'login_home displayed' : 'displayed_none' },
            _react2.default.createElement(_Login2.default, { closeloginmodal: closeLoginModal })
        )
    );
}

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        subcarta: state.SwitchMenu.subcarta,
        dataProductSel: state.DataProductSelected.dataProductSel
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);