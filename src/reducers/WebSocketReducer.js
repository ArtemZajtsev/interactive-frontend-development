import {
    CONNECTION_REQUESTED,
    CONNECTION_SUCCEEDED,
    CONNECTION_FAILED,
    DISCONNECT_SUCCEDED,
    MESSAGE_RECEIVED
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
        case CONNECTION_FAILED: {
            return {
                status: DISONNECTED,
                disconnectReason: action.payload.reason
            };
        }
        case DISCONNECT_SUCCEDED: {
          return {
              initialState
          };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
