// import {ADD_RESTAURANTE_PROFILE} from '../actions/index';

const initialState = {
    RestauranteProfile: []
};

function RestauranteData(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RESTAURANTE_PROFILE':
            return {
                RestauranteProfile: [action.payload.data]
            }
            // break;
        default:
            return state;
    }
}

export default RestauranteData;