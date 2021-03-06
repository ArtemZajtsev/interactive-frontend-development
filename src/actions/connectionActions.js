import {createPayloadForwardingAction} from '../utils/createPayloadForwardingAction';

export const CONNECTION_REQUESTED = 'CONNECTION_REQUESTED';
export const connectionRequested = (name) => ({
    type: CONNECTION_REQUESTED,
    payload: {name: name}
});

export const CONNECTION_SUCCEEDED = 'CONNECTION_SUCCEEDED';
export const connectionSucceeded = createPayloadForwardingAction(CONNECTION_SUCCEEDED);

export const DISCONNECT_REQUESTED = 'DISCONNECT_REQUESTED';
export const disconnectRequested = () => ({
    type: DISCONNECT_REQUESTED,
    payload: {}
});

export const DISCONNECT_SUCCEDED = 'DISCONNECT_SUCCEDED';
export const disconnectSucceeded = createPayloadForwardingAction(DISCONNECT_SUCCEDED);

export const PLAYER_LIST_RECEIVED = 'PLAYER_LIST_RECEIVED';
export const playerListReceived = (playerList) => ({
    type: PLAYER_LIST_RECEIVED,
    payload: {
        players: playerList
    }
});

export const CURRENT_PLAYER_SUCCESFULLY_ADDED = 'CURRENT_PLAYER_SUCCESFULLY_ADDED';
export const currentPlayerSuccesfullyAdded = (playerId) => ({
   type: CURRENT_PLAYER_SUCCESFULLY_ADDED,
    payload: {
       player: playerId
    }
});
