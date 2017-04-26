import {connect} from '../utils/WebSocket';

import {
    connectionSucceeded,
    connectionFailed,
    messageReceived,
    disconnectSucceeded
} from './connectionActions';

let webSocketConnection = null;

export const connectPlayer = ({name}) => (dispatch) => {
     webSocketConnection = connect({
        onOpen: () => {
            // fix
            //dispatch(connectionSucceeded());
        },
        onClose: ({reason}) => {
            // fix
            //dispatch(disconnectSucceded({reason}));
            dispatch(disconnectSucceeded());
        },
        onMessage: ({eventName, payload}) => {
            dispatch(messageReceived({eventName, payload}));
            if (eventName === 'connection:accepted') {
                dispatch(connectionSucceeded());
            }
            if (eventName === 'online-players') {
                console.log(payload);
            }
        },
         parameters: {playerName: name}
    });
};

export const disconnectPlayer = () => (dispatch) => {
  webSocketConnection.close();
};

