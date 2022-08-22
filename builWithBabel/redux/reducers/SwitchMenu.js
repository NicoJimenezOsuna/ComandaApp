'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var initialState = {
    subcarta: false
};

function SwitchMenu() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_RENDER_SUBCARTA':
            return {
                subcarta: action.payload
                // break;
            };default:
            return state;
    }
}

exports.default = SwitchMenu;