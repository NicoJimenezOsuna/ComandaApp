"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Plusbutton = require("./Plusbutton");

var _Plusbutton2 = _interopRequireDefault(_Plusbutton);

var _Subtrackbutton = require("./Subtrackbutton");

var _Subtrackbutton2 = _interopRequireDefault(_Subtrackbutton);

var _Deletebutton = require("./Deletebutton");

var _Deletebutton2 = _interopRequireDefault(_Deletebutton);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comamandkeymap = function Comamandkeymap(_ref) {
    var data = _ref.data,
        products = _ref.products;

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        dataproduct = _useState2[0],
        getDataproduct = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        cant = _useState4[0],
        getCant = _useState4[1];

    (0, _react.useEffect)(function () {
        getDataproduct(data);
        var quantityProduct = function quantityProduct(data, products) {
            if (Object.keys(products).length === 0) {
                getCant({});
            } else {
                getCant(products.filter(function (item) {
                    return item.plato_id === data.plato_id;
                }));
            }
        };
        quantityProduct(data, products);
    }, [data, products]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        Object.keys(cant).length === 0 ? null : cant[0].cant === 1 ? _react2.default.createElement(_Deletebutton2.default, {
            dataproduct: dataproduct
        }) : _react2.default.createElement(_Subtrackbutton2.default, {
            dataproduct: dataproduct
        }),
        _react2.default.createElement(_Plusbutton2.default, {
            dataproduct: dataproduct
        })
    );
};

function mapStateToProps(state) {
    return {
        products: state.PedidosCarta.pedidoCarta,
        productsmenu: state.PedidosMenu.pedidoMenu
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Comamandkeymap);