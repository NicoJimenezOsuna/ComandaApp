// import ADD_ENTERPRISES from '../actions'
import SET_COUNT from '../actions'

const initialState = {
    count: 0,
    arrEnterprises: [
        './assets/img/publi.jpg',
        './assets/img/estrella_galicia.jpg',
        './assets/img/murviedro.jpg',
    ]
};

function Publicidad(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ENTERPRISES':
            return {
                count: state.count,
                arrEnterprises: action.payload
            }
        // break;
        case 'SET_COUNT':
            return {
                count: action.payload,
                arrEnterprises: state.arrEnterprises
            }
            // break;
        default:
            return state;
    }
}

export default Publicidad;