const initialState = {
    status: 'disconnected',
    disconnectReason: null,
    pingCount: 0
};

const reducer = (state = initialState, action) => {
    // todo: finish here

    switch(action.type) {
        case 'CONNECTING': {
            return{status: 'connecting'};
        }
        default: {
            return state;
        }
    }
};

export default reducer;
