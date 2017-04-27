import {createPayloadForwardingAction} from '../utils/createPayloadForwardingAction';

export const GAME_ADDITION_REQUESTED = 'GAME_ADDITION_REQUESTED';
export const gameAdditionRequested = (type) => ({
    type: GAME_ADDITION_REQUESTED,
    payload: {type: type}
});

export const GAME_ADDITION_SUCCEEDED = 'GAME_ADDITION_SUCCEEDED';
export const gameAdditionSucceeded = createPayloadForwardingAction(GAME_ADDITION_SUCCEEDED);

export const GAME_ADDITION_FAILED = 'GAME_ADDITION_FAILED';
export const gameAdditionFailed = createPayloadForwardingAction(GAME_ADDITION_FAILED);

export const MOVE_ADDITION_REQUESTED = 'MOVE_ADDITION_REQUESTED';
export const moveAdditionRequested = (guess, id) => ({
    type: MOVE_ADDITION_REQUESTED,
    payload: {
        guess: guess,
        id: id
    }
});

export const MOVE_ADDITION_SUCCEEDED = 'MOVE_ADDITION_SUCCEEDED';
export const moveAdditionSucceeded = createPayloadForwardingAction(MOVE_ADDITION_SUCCEEDED);

export const MOVE_ADDITION_FAILED = 'MOVE_ADDITION_FAILED';
export const moveAdditionFailed = createPayloadForwardingAction(MOVE_ADDITION_FAILED);
