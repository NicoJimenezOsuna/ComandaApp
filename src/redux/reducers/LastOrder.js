const initialState = {
    lastOrder: null,
};

function LastOrder(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LAST_ORDER':
            return {
                lastOrder: action.payload
            }
        default:
            return state;
    }
}

export default LastOrder;