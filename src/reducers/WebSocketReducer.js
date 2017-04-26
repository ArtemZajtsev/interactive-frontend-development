import {
    CONNECTION_REQUESTED,
    CONNECTION_SUCCEEDED,
    DISCONNECT_SUCCEDED
} from '../actions/connectionActions';

import {
    CONNECTED,
    CONNECTING,
    DISONNECTED
} from '../constants';

const initialState = {
    status: 'disconnected',
    disconnectReason: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECTION_REQUESTED: {
            return {status: CONNECTING};
        }
        case CONNECTION_SUCCEEDED: {
            return {status: CONNECTED};
        }
        case DISCONNECT_SUCCEDED: {
            if (action.payload.reason) {
                return {
                    status: DISONNECTED,
                    disconnectReason: action.payload.reason
                };
            } else {
                return {
                    initialState
                };
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;
