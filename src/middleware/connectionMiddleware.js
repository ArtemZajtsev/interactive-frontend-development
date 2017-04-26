import {
    CONNECTION_REQUESTED,
    DISCONNECT_REQUESTED
} from '../actions/connectionActions';

import {connectPlayer, disconnectPlayer} from '../actions/webSocketActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [CONNECTION_REQUESTED]: connectPlayer,
    [DISCONNECT_REQUESTED]: disconnectPlayer
};

const connectionServerMiddleware = (store) => (next) => (action) => {
    console.log(action);
    const connectionServerAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (connectionServerAction) {
        connectionServerAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default connectionServerMiddleware;
