const initialState = {
    clientProfile: {
        telefono: "",
        nombre: "",
        direccion: "",
        cp: "",
        poblacion: "",
        email: "",
    }
};

function ClientProfile(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CLIENT_PROFILE':
            return {
                clientProfile: {...state.clientProfile, ...action.payload}
            }
        // break;
        default:
            return state;
    }
}

export default ClientProfile;