import GameReducer from './GamesReducer';
import WebSocketReducer from './WebSocketReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    games: GameReducer,
    connection: WebSocketReducer
});
