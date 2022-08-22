'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    endOrders: [],
    pendingOrders: []
};

function LastOrder() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_END_ORDERS':
            return {
                endOrders: [].concat(_toConsumableArray(action.payload)),
                pendingOrders: [].concat(_toConsumableArray(state.pendingOrders))
                // break;
            };case 'ADD_PENDING_ORDERS':
            return {
                endOrders: [].concat(_toConsumableArray(state.endOrders)),
                pendingOrders: [].concat(_toConsumableArray(action.payload))
                // break;
            };default:
            return state;
    }
}

exports.default = LastOrder;