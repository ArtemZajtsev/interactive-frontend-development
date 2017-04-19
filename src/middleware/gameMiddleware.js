import {
    GAME_ADDITION_REQUESTED,
    MOVE_ADDITION_REQUESTED
} from '../actions/index';

import {
    postGame,
    postMove
} from '../actions/gameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [GAME_ADDITION_REQUESTED]: postGame,
    [MOVE_ADDITION_REQUESTED]: postMove
};

const gameServerMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default gameServerMiddleware;
