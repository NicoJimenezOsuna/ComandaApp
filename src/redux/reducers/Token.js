

const initialState = {
    token: ''
};

function Token(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TOKEN':
            return {
                token: action.payload
            }
        // break;
        default:
            return state;
    }
}

export default Token;