

const initialState = {
    subcarta: false
};

function SwitchMenu(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RENDER_SUBCARTA':
            return {
                subcarta: action.payload
            }
        // break;
        default:
            return state;
    }
}

export default SwitchMenu;