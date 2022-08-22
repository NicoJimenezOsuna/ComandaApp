"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Plusbuttonmenu = require("./Plusbuttonmenu");

var _Plusbuttonmenu2 = _interopRequireDefault(_Plusbuttonmenu);

var _Substrackbuttonmenu = require("./Substrackbuttonmenu");

var _Substrackbuttonmenu2 = _interopRequireDefault(_Substrackbuttonmenu);

var _Deletebuttonmenu = require("./Deletebuttonmenu");

var _Deletebuttonmenu2 = _interopRequireDefault(_Deletebuttonmenu);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comamandkeymenu = function Comamandkeymenu(_ref) {
    var data = _ref.data,
        productsmenu = _ref.productsmenu;

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        dataproduct = _useState2[0],
        getDataproduct = _useState2[1];
    // const [stwordkey, getStWordkey] = useState('');
    // const [product, getProduct] = useState({});


    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        cant = _useState4[0],
        getCant = _useState4[1];

    var _useState5 = (0, _react.useState)({}),
        _useState6 = _slicedToArray(_useState5, 2),
        productmenus = _useState6[0],
        getProductsMenu = _useState6[1];

    (0, _react.useEffect)(function () {
        getDataproduct(data);
        // getStWordkey(wordkey)
        // getProduct(products)
        getProductsMenu(productsmenu);
        // const quantityProduct = useCallback((data, products) => {
        //     if (wordkey === 'menu') {
        //         if (Object.keys(productsmenu).length === 0) {
        //             getCant({})
        //         } else {
        //             getCant(productsmenu.filter(item => item.id === data.id))
        //         }
        //     }
        //     else {
        //         if (Object.keys(products).length === 0) {
        //             getCant({})
        //         } else {
        //             getCant(products.filter(item => item.plato_id === data.plato_id))
        //         }
        //     }
        // })
        var quantityProduct = function quantityProduct(data, productsmenu) {
            // if (wordkey === 'menu') {
            if (Object.keys(productsmenu).length === 0) {
                getCant({});
            } else {
                getCant(productsmenu.filter(function (item) {
                    return item.internalID === data.internalID;
                }));
            }
            // }
            // else {
            //     if (Object.keys(products).length === 0) {
            //         getCant({})
            //     } else {
            //         getCant(products.filter(item => item.plato_id === data.plato_id))
            //     }
            // }
        };
        quantityProduct(data, productsmenu);
    }, [data, productsmenu]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        Object.keys(cant).length === 0 ? null : cant[0].cant === 1 ? _react2.default.createElement(_Deletebuttonmenu2.default, {
            dataproduct: dataproduct
            // wordkey={stwordkey}
        }) : _react2.default.createElement(_Substrackbuttonmenu2.default, {
            dataproduct: dataproduct
            // wordkey={stwordkey}
        }),
        _react2.default.createElement(_Plusbuttonmenu2.default, {
            dataproduct: dataproduct
            // wordkey={stwordkey}
        })
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productsmenu: state.PedidosMenu.pedidoMenu
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Comamandkeymenu);