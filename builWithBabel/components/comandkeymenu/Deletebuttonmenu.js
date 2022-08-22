'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _letraX = require('../../icons/letra-x.svg');

var _actions = require('../../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Deletebuttonmenu = function Deletebuttonmenu(_ref) {
    var dataproduct = _ref.dataproduct;

    var del = {
        svg: {
            width: '2em',
            fill: '#000',
            margin: '.3em',
            background: '#ff000045'
        }
    };

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        product = _useState2[0],
        getProduct = _useState2[1];

    (0, _react.useEffect)(function () {
        getProduct(dataproduct);
    }, [dataproduct]);

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_letraX.ReactComponent, {
            onClick: function onClick() {
                return (0, _actions.dischardPedidoMenu)(product.internalID);
            },
            style: del.svg })
    );
};
exports.default = Deletebuttonmenu;