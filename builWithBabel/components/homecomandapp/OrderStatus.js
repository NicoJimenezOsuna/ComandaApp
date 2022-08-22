"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TitleSection = require("./TitleSection");

var _TitleSection2 = _interopRequireDefault(_TitleSection);

var _ExplanationSection = require("./ExplanationSection");

var _ExplanationSection2 = _interopRequireDefault(_ExplanationSection);

var _reactRedux = require("react-redux");

var _OrderCard = require("./OrderCard");

var _OrderCard2 = _interopRequireDefault(_OrderCard);

var _NoOrders = require("./NoOrders");

var _NoOrders2 = _interopRequireDefault(_NoOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderStatus = function OrderStatus(_ref) {
    var pendingOrders = _ref.pendingOrders;


    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_TitleSection2.default, { title: 'Estado de pedido' }),
        _react2.default.createElement(_ExplanationSection2.default, {
            explanation: 'Consulta el estado de tus pedidos pendientes de entrega.'
        }),
        pendingOrders.length > 0 ? pendingOrders.map(function (item, index) {
            return _react2.default.createElement(_OrderCard2.default, {
                item: item,
                key: index
            });
        }) : _react2.default.createElement(_NoOrders2.default, {
            title: 'No has realizado ningún pedido'
        })
    );
};

function mapStateToProps(state) {
    return {
        pendingOrders: state.Orders.pendingOrders
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(OrderStatus);