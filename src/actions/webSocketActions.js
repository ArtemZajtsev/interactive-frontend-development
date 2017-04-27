import {connect} from '../utils/WebSocket';

import {
    connectionSucceeded,
    disconnectSucceeded,
    playerListReceived,
    currentPlayerSuccesfullyAdded
} from './connectionActions';

let webSocketConnection = null;

export const connectPlayer = ({name}) => (dispatch) => {
    webSocketConnection = connect({
        onOpen: () => {
            dispatch(connectionSucceeded());
        },
        onClose: ({reason}) => {
            dispatch(disconnectSucceeded({reason}));
        },
        onMessage: ({eventName, payload}) => {
            if (eventName === 'online-players') {
                dispatch(playerListReceived(payload));
            } else if (eventName === 'connection:accepted') {
                dispatch(currentPlayerSuccesfullyAdded(payload));
            }
        },
        parameters: {playerName: name}
    });
};

export const disconnectPlayer = () => () => {
    webSocketConnection.close();
};

