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

var _EndOrdersCard = require("./EndOrdersCard");

var _EndOrdersCard2 = _interopRequireDefault(_EndOrdersCard);

var _NoOrders = require("./NoOrders");

var _NoOrders2 = _interopRequireDefault(_NoOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderHistory = function OrderHistory(_ref) {
    var endOrders = _ref.endOrders;


    // const [endOrderStatus, getOrderStatus] = useState([]);
    // const [isEmpty, getIsEmpty] = useState('off');
    //
    // const endOrderCall = (idOrder) => {
    //     if (endOrderStatus.length === 0) {
    //         getIsEmpty('on');
    //         let url_stateOrders = 'http://restaurante.comandapp.es/api/ws/8/cLZDdvFTJcl5cWG/';
    //         axios.get(url_stateOrders + idOrder)
    //             .then(response => {
    //                 console.log('endOrder', response.data.data.respuesta)
    //                 getOrderStatus(response.data.data.respuesta)
    //                 getIsEmpty('off')
    //             })
    //             .catch(error => console.log(error))
    //     }
    // }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_TitleSection2.default, { title: 'Pedidos anteriores' }),
        _react2.default.createElement(_ExplanationSection2.default, {
            explanation: 'Consulta tus anteriores pedidos'
        }),
        endOrders.length > 0 ? endOrders.map(function (item, index) {
            return _react2.default.createElement(
                _react.Fragment,
                { key: index },
                _react2.default.createElement(_EndOrdersCard2.default, {
                    product: item,
                    index: item.numpedido
                })
            );
        }) : _react2.default.createElement(_NoOrders2.default, {
            title: 'No tienes pedidos anteriores'
        })
    );
};

function mapStateToProps(state) {
    return {
        endOrders: state.Orders.endOrders,
        clientProfile: state.ClientProfile.clientProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(OrderHistory);