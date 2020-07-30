const initialState = {
    clientProfile: {
        telefono: 6666666666,
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
                clientProfile: {...action.payload}
            }
        // break;
        default:
            return state;
    }
}

export default ClientProfile;