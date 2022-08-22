'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    lastOrder: null
};

function LastOrder() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_LAST_ORDER':
            return {
                lastOrder: action.payload
            };
        default:
            return state;
    }
}

exports.default = LastOrder;