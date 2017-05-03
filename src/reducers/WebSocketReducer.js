import {
    CONNECTION_REQUESTED,
    CONNECTION_SUCCEEDED,
    DISCONNECT_SUCCEDED,
    PLAYER_LIST_RECEIVED,
    CURRENT_PLAYER_SUCCESFULLY_ADDED
} from '../actions/connectionActions';

import {
    CONNECTED,
    CONNECTING,
    DISCONNECTED
} from '../constants';

const initialState = {
    status: DISCONNECTED,
    disconnectReason: null,
    players: [],
    currentPlayerId: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECTION_REQUESTED: {
            return {
                ...state,
                status: CONNECTING
            };
        }
        case CONNECTION_SUCCEEDED: {
            return {
                ...state,
                status: CONNECTED
            };
        }
        case DISCONNECT_SUCCEDED: {
            if (action.payload.reason) {
                return {
                    ...state,
                    status: DISCONNECTED,
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
        case CURRENT_PLAYER_SUCCESFULLY_ADDED: {
            return {
                ...state,
                currentPlayerId: action.payload.player.playerId
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
