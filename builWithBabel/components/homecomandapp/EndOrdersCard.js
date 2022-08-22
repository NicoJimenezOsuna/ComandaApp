"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Spinnercircle = require("../Spinnercircle");

var _Spinnercircle2 = _interopRequireDefault(_Spinnercircle);

var _reactRedux = require("react-redux");

var _connect_data_restaurantes = require("../../data/connect_data_restaurantes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EndOrdersCard = function EndOrdersCard(_ref) {
    var product = _ref.product,
        index = _ref.index,
        token = _ref.token;

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        endOrderStatus = _useState2[0],
        getOrderStatus = _useState2[1];

    var _useState3 = (0, _react.useState)('off'),
        _useState4 = _slicedToArray(_useState3, 2),
        onSpinner = _useState4[0],
        getOnspinner = _useState4[1];

    var endOrderCall = function endOrderCall(idOrder) {
        if (endOrderStatus.length === 0) {
            getOnspinner('on');
            //'http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/';
            var url_stateOrders = "" + _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.PATH_API + "8/" + token + "/";
            _axios2.default.get(url_stateOrders + idOrder, _connect_data_restaurantes.USER_HEADERS).then(function (response) {
                console.log('endOrder', response.data.data.respuesta);
                getOrderStatus(response.data.data.respuesta);
                getOnspinner('off');
            }).catch(function (error) {
                return console.log(error);
            });
        }
    };

    return _react2.default.createElement(
        "div",
        { key: index },
        _react2.default.createElement(
            "div",
            { className: "full",
                style: {
                    background: 'white',
                    width: '90%',
                    padding: '1em',
                    margin: '0 auto 1em auto',
                    border: '2px solid lightgrey',
                    boxShadow: '4px 4px 30px -10px grey'
                }
            },
            _react2.default.createElement(
                "div",
                { className: "full",
                    style: {
                        // background: '#4e97aa',
                        background: '#B1D8E2',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 1em'
                    }
                },
                _react2.default.createElement(
                    "h4",
                    { style: {
                            textAlign: 'left',
                            color: 'dimgrey',
                            padding: '1em 0'
                        } },
                    "Num. Pedido: ",
                    product ? product.numpedido : null
                ),
                _react2.default.createElement(
                    "div",
                    { style: {
                            width: 'fit-content',
                            marginLeft: '5%',
                            padding: '.5em',
                            background: 'transparent',
                            border: '2px solid dimgrey',
                            color: 'dimgrey'
                            // boxShadow: '4px 4px 30px -10px lightgrey'
                        },
                        onClick: function onClick() {
                            return endOrderCall(product.numpedido);
                        }
                    },
                    product.fecha_hora.split(" ")[0]
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "full", style: {
                        padding: '1em'
                    } },
                endOrderStatus.length > 0 ? _react2.default.createElement(
                    "div",
                    { style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: 'dimgray'
                        } },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Productos"
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "uds"
                    ),
                    _react2.default.createElement("hr", { style: {
                            width: '100%',
                            border: '1px solid #d3d3d3',
                            marginBottom: '1em'
                        } })
                ) : null,
                endOrderStatus.length > 0 ? endOrderStatus.map(function (plato) {
                    return _react2.default.createElement(
                        "div",
                        { key: plato.nombreplato + plato.numpedido,
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                color: 'dimgray'
                            } },
                        _react2.default.createElement(
                            "h3",
                            { key: plato.nombreplato },
                            plato.nombreplato
                        ),
                        _react2.default.createElement(
                            "h3",
                            { key: plato.unidades },
                            plato.unidades
                        )
                    );
                }) : onSpinner === 'on' ? _react2.default.createElement(_Spinnercircle2.default, null) : _react2.default.createElement(
                    "p",
                    { style: {
                            color: 'dimgray',
                            textAlign: 'center'
                        } },
                    "Click en la fecha para ver relaci\xF3n de productos"
                )
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        token: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(EndOrdersCard);