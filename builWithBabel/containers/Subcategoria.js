"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
/*
 * IMPORT COMPONENTS
 */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("../components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("../components/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Migas = require("../components/Migas");

var _Migas2 = _interopRequireDefault(_Migas);

var _Labelscarta = require("../components/Labelscarta");

var _Labelscarta2 = _interopRequireDefault(_Labelscarta);

var _Listadocarta = require("../components/Listadocarta");

var _Listadocarta2 = _interopRequireDefault(_Listadocarta);

var _Listadomenu = require("../components/Listadomenu");

var _Listadomenu2 = _interopRequireDefault(_Listadomenu);

var _Allergensmodal = require("../components/Allergensmodal");

var _Allergensmodal2 = _interopRequireDefault(_Allergensmodal);

var _Slidermodal = require("../components/Slidermodal");

var _Slidermodal2 = _interopRequireDefault(_Slidermodal);

var _NavUtils = require("../components/NavUtils");

var _NavUtils2 = _interopRequireDefault(_NavUtils);

var _Qrmodal = require("../components/Qrmodal");

var _Qrmodal2 = _interopRequireDefault(_Qrmodal);

var _Mapamodal = require("../components/Mapamodal");

var _Mapamodal2 = _interopRequireDefault(_Mapamodal);

var _Mailmodal = require("../components/Mailmodal");

var _Mailmodal2 = _interopRequireDefault(_Mailmodal);

var _Listcomandamodal = require("../components/Listcomandamodal");

var _Listcomandamodal2 = _interopRequireDefault(_Listcomandamodal);

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _actions = require("../redux/actions");

var _utils = require("../utils/utils");

var _Publibanner = require("../components/publicidad/Publibanner");

var _Publibanner2 = _interopRequireDefault(_Publibanner);

var _Login = require("../components/homecomandapp/Login");

var _Login2 = _interopRequireDefault(_Login);

var _HelmetSeoComponent = require("../components/Seo/HelmetSeoComponent");

var _HelmetSeoComponent2 = _interopRequireDefault(_HelmetSeoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Subcategorias = function Subcategorias(_ref) {
    var restauranteData = _ref.restauranteData,
        PedidosMenu = _ref.PedidosMenu,
        dataProductSel = _ref.dataProductSel;

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        subcategorias = _useState2[0],
        getSubcategorias = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isVisible = _useState4[0],
        getIsVisible = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isVisibleSlider = _useState6[0],
        getIsVisibleSlider = _useState6[1];

    var _useState7 = (0, _react.useState)([]),
        _useState8 = _slicedToArray(_useState7, 2),
        dataSlider = _useState8[0],
        getDataSlider = _useState8[1];

    var _useState9 = (0, _react.useState)(0),
        _useState10 = _slicedToArray(_useState9, 2),
        dataProductId = _useState10[0],
        getDataProductId = _useState10[1];

    var _useState11 = (0, _react.useState)(false),
        _useState12 = _slicedToArray(_useState11, 2),
        verqr = _useState12[0],
        getVerqr = _useState12[1];

    var _useState13 = (0, _react.useState)({}),
        _useState14 = _slicedToArray(_useState13, 2),
        datosrestaurante = _useState14[0],
        getDatosRestaurante = _useState14[1];

    var _useState15 = (0, _react.useState)(''),
        _useState16 = _slicedToArray(_useState15, 2),
        wordkey = _useState16[0],
        getwordKey = _useState16[1];
    //Constantes de modales


    var _useState17 = (0, _react.useState)(false),
        _useState18 = _slicedToArray(_useState17, 2),
        verMapamodal = _useState18[0],
        getMapamodal = _useState18[1];

    var _useState19 = (0, _react.useState)(false),
        _useState20 = _slicedToArray(_useState19, 2),
        verMailmodal = _useState20[0],
        getMailmodal = _useState20[1];

    var _useState21 = (0, _react.useState)(false),
        _useState22 = _slicedToArray(_useState21, 2),
        isVisiblePedido = _useState22[0],
        getIsVisiblePedido = _useState22[1];

    var _useState23 = (0, _react.useState)(false),
        _useState24 = _slicedToArray(_useState23, 2),
        viewloginmodal = _useState24[0],
        getViewclosemodal = _useState24[1];

    var _useState25 = (0, _react.useState)(false),
        _useState26 = _slicedToArray(_useState25, 2),
        warningmessage = _useState26[0],
        getWarningmessage = _useState26[1];

    var _useState27 = (0, _react.useState)(false),
        _useState28 = _slicedToArray(_useState27, 2),
        errormessage = _useState28[0],
        getErrormessage = _useState28[1];

    var _useState29 = (0, _react.useState)(false),
        _useState30 = _slicedToArray(_useState29, 2),
        okmessage = _useState30[0],
        getOkmessage = _useState30[1];

    var _useState31 = (0, _react.useState)({}),
        _useState32 = _slicedToArray(_useState31, 2),
        valuRadio = _useState32[0],
        getValueradio = _useState32[1];

    var _useState33 = (0, _react.useState)(null),
        _useState34 = _slicedToArray(_useState33, 2),
        numberOfsectionsforRadios = _useState34[0],
        getNumberOfsectionsforRadios = _useState34[1];

    var _useState35 = (0, _react.useState)({}),
        _useState36 = _slicedToArray(_useState35, 2),
        keysofpedido = _useState36[0],
        getkeysofpedido = _useState36[1];

    var closeLoginModal = function closeLoginModal() {
        !viewloginmodal ? getViewclosemodal(true) : getViewclosemodal(false);
    };
    //Variables para actualizar el estado de modales
    var vermapa = function vermapa() {
        !verMapamodal ? getMapamodal(true) : getMapamodal(false);
    }; //sirve para actualizar el estado
    var vermail = function vermail() {
        !verMailmodal ? getMailmodal(true) : getMailmodal(false);
    }; //sirve para actualizar el estado

    var visibleHandler = function visibleHandler() {
        !isVisible ? getIsVisible(true) : getIsVisible(false);
    };
    var pedidoViewHandler = function pedidoViewHandler() {
        !isVisiblePedido ? getIsVisiblePedido(true) : getIsVisiblePedido(false);
    };

    var dataSliderHandler = (0, _react.useCallback)(function (dataFull, dataId, wordkey) {
        getDataSlider(dataFull);
        getDataProductId(dataId);
        getwordKey(wordkey);
        !isVisibleSlider ? getIsVisibleSlider(true) : getIsVisibleSlider(false);
    }, [isVisibleSlider]);
    var buttonCloseSlidermodalHandler = function buttonCloseSlidermodalHandler() {
        !isVisibleSlider ? getIsVisibleSlider(true) : getIsVisibleSlider(false);
    };

    var codigoqr = function codigoqr() {
        !verqr ? getVerqr(true) : getVerqr(false);
    }; //sirve para actualizar el estado

    (0, _react.useEffect)(function () {
        var isMounted = true;
        if (isMounted) {
            // getSubcategorias(JSON.parse(localStorage.getItem("categorySelected")));
            getSubcategorias(dataProductSel);
            getMapamodal(verMapamodal);
            getMailmodal(verMailmodal);

            // let datosderetaurante = JSON.parse(localStorage.getItem('comandaApp')).data;
            // if (datosderetaurante) {
            getDatosRestaurante.apply(undefined, _toConsumableArray(restauranteData));
            // } else {
            //     //hacer algo si localstorage está vacío
            // }
        }
        return function () {
            return isMounted = false;
        };
    }, [restauranteData, verMapamodal, verMailmodal, dataProductSel]);

    (0, _react.useEffect)(function () {
        var isMounted = true;
        if (isMounted) {
            getValueradio(_extends({}, valuRadio, {
                id: subcategorias.id,
                nombre: subcategorias.nombre,
                precio: parseFloat((0, _utils.dosDecim)(subcategorias.precio, 2))
            }));
        }
        return function () {
            return isMounted = false;
        };
    }, [subcategorias.id, subcategorias.nombre, subcategorias.precio]);

    //define y pasa por props los títulos
    var titles = {};
    titles.product = "plato";
    titles.price = "P.V.P";
    titles.info = "Info.";

    // Receive status from carousel and update props sent to carousel.
    // Update status of dataProductId to the last id seen in Carousel
    var actualizaPropDataProductId = function actualizaPropDataProductId(value) {
        getDataProductId(value);
    };

    var getValue = function getValue(e, labelsLength) {

        var name = e.target.name;
        var value = e.target.value;

        getkeysofpedido(_extends({}, keysofpedido, _defineProperty({}, name, value)));
        getValueradio(_extends({}, valuRadio, _defineProperty({}, name, value)));
        getNumberOfsectionsforRadios(labelsLength);
    };
    //MENÚ ÚNICO CODE -----------------------------------------------------------
    //     const completeddMemenu = () => {
    //
    //
    //         if (
    //             valuRadio !== null && Object.keys(keysofpedido).length === numberOfsectionsforRadios
    //         ) {
    //
    //             //Buscamos los elementos del menú para guardar precio e identificador
    //
    //             // // // id 5 nombre "MENÚ LUNES" precio "6.5000" wordKey "menu" idcarta
    //             valuRadio.id = subcategorias.id;
    //             valuRadio.nombre = subcategorias.nombre;
    //             valuRadio.precio = parseFloat(dosDecim(subcategorias.precio, 2));
    //             valuRadio.cant = 1
    //
    //             // definimos nuevo objeto para evitar referencia
    //             // const newObject = {}
    //             // console.log('valuradio', valuRadio)
    //
    //             //BUSCAMOS EL PEDIDO EN REDUCER MENUS Y SI EXISTE LANZAMOS WARNING
    //             const exist = PedidosMenu.filter(item => {
    //                 if (item.id === valuRadio.id) {
    //                     return item
    //                 }
    //             });
    //
    //             if (exist.length <= 0) {
    //                 getOkmessage(true)
    //                 setTimeout(function () {
    //                     getOkmessage(false)
    //                 }, 2000)
    //                 return addPedidoMenu(valuRadio)
    //             }
    //
    // //EVALUAR KEYS DE MANERA DINAMICA
    //             const pedidoenredux = PedidosMenu.filter(item => item.id === valuRadio.id)
    //             const pedidoredux = pedidoenredux[0]
    //
    //             function compareObj(pedidoredux, keysofpedido) {
    //                 var aKeys = Object.keys(pedidoredux)
    //                 var bKeys = Object.keys(keysofpedido)
    //
    //                 for (var i = 0; i < bKeys.length; i++) {
    //                     if (pedidoredux[aKeys[i]] !== keysofpedido[bKeys[i]]) {
    //                         return false;
    //                     }
    //                 }
    //                 return true;
    //             }
    //
    //             if (exist && compareObj(pedidoredux, keysofpedido)) {
    //                 getWarningmessage(true)
    //                 setTimeout(function () {
    //                     getWarningmessage(false)
    //                 }, 2000)
    //             } else {
    //                 getOkmessage(true)
    //                 setTimeout(function () {
    //                     getOkmessage(false)
    //                 }, 2000)
    //
    //                 addPedidoMenu(valuRadio)
    //             }
    //
    //             // addPedidoMenu(Object.assign({}, valuRadio))
    //             // addPedidoMenu(valuRadio)
    //         } else {
    //             getErrormessage(true)
    //             setTimeout(function () {
    //                 getErrormessage(false)
    //             }, 2000)
    //         }
    //     }
    // END MENÚ ÚNICO CODE--------------------------------

    var multimenu = function multimenu() {
        var getProductInternalID = undefined;
        //si selección está o no vacía
        if (valuRadio !== null && Object.keys(keysofpedido).length === numberOfsectionsforRadios) {
            //selección está completa:
            //BUSCAMOS EL PEDIDO EN REDUCER MENUS Y SI EXISTE LANZAMOS WARNING
            var exist = PedidosMenu.filter(function (item) {
                return item.id === valuRadio.id;
            });

            //si existe
            if (exist.length > 0) {
                var isEqual = 0;
                for (var i = 0; i < exist.length; i++) {
                    for (var j = 0; j < numberOfsectionsforRadios; j++) {
                        if (exist[i][Object.keys(keysofpedido)[j]] === valuRadio[Object.keys(keysofpedido)[j]]) {
                            // console.log('res', valuRadio[Object.keys(keysofpedido)[j]]);
                            isEqual++;
                        } else {
                            isEqual = 0;
                        }
                        if (isEqual === numberOfsectionsforRadios) {
                            //consultaremos si posee id interno.
                            getProductInternalID = exist[i].internalID;
                            isEqual = 0;
                        }
                    }
                }
            }

            if (getProductInternalID === undefined) {
                //si es undefined poner id interno y enviar a redux
                var nuevoObjeto = _extends({}, valuRadio);
                nuevoObjeto.internalID = Math.floor(Math.random() * 60000000000) + 1;
                nuevoObjeto.cant = 1;

                (0, _actions.addPedidoMenu)(nuevoObjeto);

                getOkmessage(true);
                setTimeout(function () {
                    getOkmessage(false);
                }, 2000);
            } else {
                //enviar id interno y sumar producto
                getWarningmessage(true);
                setTimeout(function () {
                    getWarningmessage(false);
                }, 2000);
                (0, _actions.sumProductsMenu)(getProductInternalID);
            }
        } else {
            //si selección está vacía
            getErrormessage(true);
            setTimeout(function () {
                getErrormessage(false);
            }, 2000);
        }
    };
    var renderCategory = function renderCategory() {
        if (subcategorias.wordKey === 'carta') {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Labelscarta2.default, { data: titles }),
                _react2.default.createElement(_Listadocarta2.default
                // dataid={subcategorias.idcarta}
                , { dataid: subcategorias,
                    dataSliderHandler: dataSliderHandler
                })
            );
        } else {
            return (
                // MENÚ ÚNICO CODE
                // <Listadomenu
                //     warningmessage={warningmessage}
                //     errormessage={errormessage}
                //     okmessage={okmessage}
                //     completeddMemenu={completeddMemenu}
                //     getValue={getValue}
                //     dataid={subcategorias.id}
                //     dataSliderHandler={dataSliderHandler}
                //     subcategorias={subcategorias}
                // />
                //FIN MENÚ ÚNICO CODE
                _react2.default.createElement(_Listadomenu2.default, {
                    warningmessage: warningmessage,
                    errormessage: errormessage,
                    okmessage: okmessage,
                    completeddMemenu: multimenu,
                    getValue: getValue,
                    dataid: subcategorias.id,
                    dataSliderHandler: dataSliderHandler,
                    subcategorias: subcategorias
                })
            );
        }
    };

    if (restauranteData.length <= 0) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_HelmetSeoComponent2.default, null),
        _react2.default.createElement(
            "div",
            { className: "subRoot" },
            _react2.default.createElement(_Listcomandamodal2.default, {
                onClick: pedidoViewHandler,
                isVisiblePedido: isVisiblePedido,
                pedidoViewHandler: pedidoViewHandler,
                closeloginmodal: closeLoginModal
            }),
            _react2.default.createElement(_Qrmodal2.default, {
                verqr: verqr,
                codigoqr: codigoqr
            }),
            _react2.default.createElement(_Allergensmodal2.default, {
                dataVisible: isVisible,
                visible: visibleHandler
            }),
            _react2.default.createElement(_Slidermodal2.default, {
                isVisibleSlider: isVisibleSlider,
                data: dataSlider,
                dataInicio: dataProductId,
                buttonCloseSlidermodalHandler: buttonCloseSlidermodalHandler,
                actualizaPropDataProductId: actualizaPropDataProductId,
                wordkey: wordkey
            }),
            _react2.default.createElement(_Mapamodal2.default, {
                vermapa: vermapa,
                verMapamodal: verMapamodal,
                datosrestaurante: datosrestaurante
            }),
            _react2.default.createElement(_Mailmodal2.default, {
                vermail: vermail,
                verMailmodal: verMailmodal,
                datosrestaurante: datosrestaurante
            }),
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(_NavUtils2.default, {
                codigoqr: codigoqr,
                dataVisible: isVisible,
                visible: visibleHandler,
                pedidoViewHandler: pedidoViewHandler
            }),
            restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(_Publibanner2.default, { background: true }) : null,
            _react2.default.createElement(
                "div",
                { className: "padre" },
                _react2.default.createElement(_Migas2.default, { data: subcategorias.nombre, visible: visibleHandler }),
                renderCategory()
            )
        ),
        _react2.default.createElement(_Footer2.default, {
            changesubcat: false,
            vermail: vermail,
            vermapa: vermapa,
            datosrestaurante: datosrestaurante,
            back: '/categoria',
            closeloginmodal: closeLoginModal
        }),
        _react2.default.createElement(
            "div",
            { className: viewloginmodal ? 'login_home displayed' : 'displayed_none' },
            _react2.default.createElement(_Login2.default, { closeloginmodal: closeLoginModal })
        )
    );
};

function mapStateToProps(state) {
    return {
        restauranteData: state.RestauranteData.RestauranteProfile,
        PedidosMenu: state.PedidosMenu.pedidoMenu,
        dataProductSel: state.DataProductSelected.dataProductSel
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Subcategorias);