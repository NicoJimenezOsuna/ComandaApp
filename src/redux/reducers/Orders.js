const initialState = {
    endOrders: [],
    pendingOrders: []
};

function LastOrder(state = initialState, action) {
    switch (action.type) {
        case 'ADD_END_ORDERS':
            return {
                endOrders: [...action.payload],
                pendingOrders: [...state.pendingOrders]
            }
        // break;
        case 'ADD_PENDING_ORDERS':
            return {
                endOrders: [...state.endOrders],
                pendingOrders: [...action.payload]
            }
        // break;
        default:
            return state;
    }
}

export default LastOrder;