'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _no_date = require('../../icons/homecomanda/no_date.svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoOrders = function NoOrders(_ref) {
    var title = _ref.title;


    return _react2.default.createElement(
        'div',
        { style: { position: 'relative', width: '100%' } },
        _react2.default.createElement(_no_date.ReactComponent, { style: {
                fill: 'rgba(110, 104, 104, 0.3)',
                display: 'block',
                width: '50%',
                height: '50%',
                margin: '3em auto'
            } }),
        _react2.default.createElement(
            'div',
            { style: {
                    width: '100%',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                } },
            _react2.default.createElement(
                'h2',
                { style: {
                        // color: 'dimgrey',
                        fontFamily: 'Dasis',
                        textAlign: 'center',
                        fontSize: '2.3em',
                        color: 'rgb(128, 128, 128)'
                    } },
                title
            )
        )
    );
};
exports.default = NoOrders;