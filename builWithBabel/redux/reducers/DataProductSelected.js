'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var initialState = {
    dataProductSel: {}
};

function DataProductSelected() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_DATA_PRODUCT_SELECTED':
            return {
                dataProductSel: action.payload
                // break;
            };default:
            return state;
    }
}

exports.default = DataProductSelected;