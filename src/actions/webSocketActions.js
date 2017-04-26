import {connect} from '../utils/WebSocket';

import {
    connectionSucceeded,
    messageReceived,
    disconnectSucceeded
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
            dispatch(messageReceived({eventName, payload}));
            if (eventName === 'online-players') {
            }
        },
         parameters: {playerName: name}
    });
};

export const disconnectPlayer = () => () => {
  webSocketConnection.close();
};

