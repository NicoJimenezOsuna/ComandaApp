'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _NavUtils = require('./NavUtils');

var _NavUtils2 = _interopRequireDefault(_NavUtils);

var _Allergensmodal = require('./Allergensmodal');

var _Allergensmodal2 = _interopRequireDefault(_Allergensmodal);

var _Qrmodal = require('./Qrmodal');

var _Qrmodal2 = _interopRequireDefault(_Qrmodal);

var _utils = require('../utils/utils');

var _reactRedux = require('react-redux');

var _Subcarta = require('./Subcarta');

var _Subcarta2 = _interopRequireDefault(_Subcarta);

var _Emptymessage = require('./Emptymessage');

var _Emptymessage2 = _interopRequireDefault(_Emptymessage);

var _Publibanner = require('./publicidad/Publibanner');

var _Publibanner2 = _interopRequireDefault(_Publibanner);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Categorias = function Categorias(_ref) {
    var pedidoViewHandler = _ref.pedidoViewHandler,
        restauranteData = _ref.restauranteData,
        changedView = _ref.changedView,
        sendCategory = _ref.sendCategory,
        getChangeColor = _ref.getChangeColor,
        subcarta = _ref.subcarta,
        dataProductSel = _ref.dataProductSel;


    var cat = {
        padre: {
            display: 'flex',
            flexFlow: 'row wrap',
            width: '100%',
            padding: '10px'
        },
        plato_img: {
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px',
            overflow: 'visible'
        },
        platos: {
            overflow: 'visible',
            width: '100%',
            height: '100%'

        },
        nom_cat: {
            // transform: 'rotate(-35deg)',
            transform: 'rotate(-22deg)',
            position: 'absolute',
            // whiteSpace: 'nowrap',
            textAlign: 'center',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            // fontSize: '1.2em',
            fontWeight: 900,
            color: '#fff',
            zIndex: '9',
            textShadow: '0 1px 0 rgba(250, 250, 250, 0.3), ' + '0 6px 1px rgba(0, 0, 0, 0.1), ' + '0 0 5px rgba(0, 0, 0, 0.1), ' + '0 1px 3px rgba(0, 0, 0, 0.3), ' + '0 3px 5px rgba(0, 0, 0, 0.2), ' + '0 5px 10px rgba(0, 0, 0, 0.25), ' + '0 10px 10px rgba(0, 0, 0, 0.2), ' + '0 20px 20px rgba(0, 0, 0, 0.15)',
            whiteSpace: 'break-spaces',
            lineHeight: 'normal',
            wordSpacing: '.5em'
        },
        select: {
            width: '100%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '.5em 0',
            fontSize: '1em',
            borderBottom: '2px solid black'
        },
        span: {
            //     fontFamily: 'Papyrus',
            //     padding: '.2em 1em',
            //     borderRadius: '20px',
        }

        // const [idcarta, getIdcarta] = useState(null);
    };
    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        categorias = _useState2[0],
        getCategorias = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        verqr = _useState4[0],
        getVerqr = _useState4[1]; //sirve para darle un estado inicial


    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isVisible = _useState6[0],
        getIsVisible = _useState6[1];

    var _useState7 = (0, _react.useState)('carta'),
        _useState8 = _slicedToArray(_useState7, 2),
        selected = _useState8[0],
        getselected = _useState8[1];

    (0, _react.useEffect)(function () {
        //   -- LOGIC FOR ACTION BUTTON BACK ---
        // TO RETURN OF MENU SUBCATEGORY, SET VIEW OF MENU.
        if (dataProductSel.wordKey === 'menu') {
            getselected('menus');
        }

        getCategorias.apply(undefined, _toConsumableArray(restauranteData));
    }, [restauranteData, dataProductSel]);

    var selectedView = function selectedView(e) {
        //RESET THE 'SUBCARTA' STATUS TO FALSE BY CLICKING ON BUTTON MENU OR CARD
        (0, _actions.addNewStateSubcarta)(false);

        e.preventDefault();
        getselected(e.target.id);
        if (e.target.id === 'menus') {
            getChangeColor();
        }
    };

    var visibleHandler = function visibleHandler() {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };

    var codigoqr = function codigoqr() {
        !verqr ? getVerqr(true) : getVerqr(false);
    }; //sirve para actualizar el estado

    if (restauranteData.length <= 0) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Allergensmodal2.default, {
            dataVisible: isVisible,
            visible: visibleHandler }),
        _react2.default.createElement(_Qrmodal2.default, {
            verqr: verqr,
            codigoqr: codigoqr
        }),
        _react2.default.createElement(_NavUtils2.default, {
            codigoqr: codigoqr,
            dataVisible: isVisible,
            visible: visibleHandler,
            pedidoViewHandler: pedidoViewHandler
            // codigoqr={qr}
        }),
        _react2.default.createElement(
            'div',
            { className: 'padre' },
            _react2.default.createElement(
                'div',
                { style: cat.select },
                _react2.default.createElement(
                    'span',
                    { className: selected === 'menus' ? 'span_no_select button' : "span_select button",
                        style: cat.span,
                        id: 'carta',
                        onClick: selectedView
                    },
                    'CARTA'
                ),
                _react2.default.createElement(
                    'span',
                    { className: selected === 'carta' ? 'span_no_select button' : "span_select button",
                        style: cat.span,
                        id: 'menus',
                        onClick: selectedView
                    },
                    ' MENU'
                )
            ),
            restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(_Publibanner2.default, { background: true }) : null,
            selected === 'carta' && categorias.mensaje === 'OK' ?
            //changesubcat establece el cambio de vista a subcategoría para
            subcarta === false ? categorias.respuesta.map(function (item) {
                if (!item.esmenu) {
                    return _react2.default.createElement(
                        'div',
                        {
                            className: 'cont_childs',
                            onClick: function onClick() {
                                return sendCategory(item.categoria_id, item.categoria, null, 'carta', item.id, true);
                            },
                            id: item.categoria,
                            style: cat.cat_cont,
                            key: item.id
                        },
                        _react2.default.createElement('div', { className: 'absolut' }),
                        item.imagen === undefined ? _react2.default.createElement(
                            _react.Fragment,
                            null,
                            _react2.default.createElement('img', { style: cat.plato_img,
                                src: 'assets/img/carta.jpg',
                                alt: 'Imagen de categor\xEDa ' + item.categoria }),
                            _react2.default.createElement(
                                'p',
                                { className: 'category_title',
                                    style: cat.nom_cat },
                                item.nombrecarta
                            )
                        ) : _react2.default.createElement(
                            _react.Fragment,
                            null,
                            _react2.default.createElement('img', { style: cat.plato_img,
                                src: (0, _utils.urlImage)() + item.imagen,
                                alt: 'Imagen de categor\xEDa ' + item.categoria }),
                            _react2.default.createElement(
                                'p',
                                { className: 'category_title',
                                    style: cat.nombrecarta },
                                item.categoria
                            )
                        )
                    );
                }
            }) : _react2.default.createElement(_Subcarta2.default, {
                sendCategory: sendCategory,
                changedView: changedView,
                styles: cat
            }) : selected === 'carta' ? _react2.default.createElement(_Emptymessage2.default, null) : null,
            selected === 'menus' && categorias.mensaje === 'OK' ? categorias.respuesta.map(function (item, index) {
                // if(/menú/gi.test(item.nombrecarta)) {
                if (item.esmenu) {
                    return _react2.default.createElement(
                        'div',
                        {
                            className: 'cont_childs',
                            onClick: function onClick() {
                                return sendCategory(item.id, item.nombrecarta, item.precio, 'menu', null);
                            },
                            id: item.id,
                            style: cat.cat_cont,
                            key: 1 + index
                        },
                        _react2.default.createElement('div', { className: 'absolut' }),
                        item.imagen === undefined ? _react2.default.createElement(
                            _react.Fragment,
                            null,
                            _react2.default.createElement('img', { style: cat.plato_img,
                                src: 'assets/img/menu.jpg',
                                alt: 'Imagen de categor\xEDa ' + item.nombrecarta }),
                            _react2.default.createElement(
                                'p',
                                { className: 'category_title',
                                    style: cat.nom_cat },
                                item.nombrecarta
                            )
                        ) : _react2.default.createElement(
                            _react.Fragment,
                            null,
                            _react2.default.createElement('img', { style: cat.plato_img,
                                src: item.imagen,
                                alt: 'Imagen de categor\xEDa ' + item.nombrecarta }),
                            _react2.default.createElement(
                                'p',
                                { className: 'category_title',
                                    style: cat.nom_cat },
                                item.nombrecarta
                            )
                        )
                    );
                }
            }) : selected === 'menus' ? _react2.default.createElement(_Emptymessage2.default, null) : null
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        token: state.Token.token,
        subcarta: state.SwitchMenu.subcarta,
        dataProductSel: state.DataProductSelected.dataProductSel
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Categorias);