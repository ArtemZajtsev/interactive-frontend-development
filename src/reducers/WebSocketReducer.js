import {
    CONNECTION_REQUESTED,
    CONNECTION_SUCCEEDED,
    DISCONNECT_SUCCEDED,
    PLAYER_LIST_RECEIVED
} from '../actions/connectionActions';

import {
    CONNECTED,
    CONNECTING,
    DISONNECTED
} from '../constants';

const initialState = {
    status: DISONNECTED,
    disconnectReason: null,
    players: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECTION_REQUESTED: {
            return {...state,
                status: CONNECTING};
        }
        case CONNECTION_SUCCEEDED: {
            return {...state,
                status: CONNECTED};
        }
        case DISCONNECT_SUCCEDED: {
            if (action.payload.reason) {
                return {
                    ...state,
                    status: DISONNECTED,
                    disconnectReason: action.payload.reason
                };
            } else {
                return initialState;
            }
        }
        case PLAYER_LIST_RECEIVED: {
            return {
                ...state,
                status: CONNECTED,
                players: action.payload.players
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
