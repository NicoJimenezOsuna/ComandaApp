

const initialState = {
    dataProductSel: {}
};

function DataProductSelected(state = initialState, action) {
    switch (action.type) {
        case 'ADD_DATA_PRODUCT_SELECTED':
            return {
                dataProductSel: action.payload
            }
        // break;
        default:
            return state;
    }
}

export default DataProductSelected;