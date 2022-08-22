'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    count: 0,
    arrEnterprises: []
}; // import ADD_ENTERPRISES from '../actions'


function Publicidad() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_ENTERPRISES':
            return {
                count: state.count,
                arrEnterprises: action.payload
                // break;
            };case 'SET_COUNT':
            return {
                count: action.payload,
                arrEnterprises: state.arrEnterprises
                // break;
            };default:
            return state;
    }
}

exports.default = Publicidad;