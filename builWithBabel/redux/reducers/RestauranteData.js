'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// import {ADD_RESTAURANTE_PROFILE} from '../actions/index';

var initialState = {
    RestauranteProfile: []
};

function RestauranteData() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_RESTAURANTE_PROFILE':
            return {
                RestauranteProfile: [action.payload.data]
                // break;
            };default:
            return state;
    }
}

exports.default = RestauranteData;