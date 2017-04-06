import {GAME_ADDED} from '../actions/index';

const initialState = {games:[]};

const gameAddingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_ADDED: {
            const newGames = state.games.concat({
                id: action.newGame.id,
                gameType: action.newGame.gameType
            });
            return {games:newGames};
        }
        default:
            return state;
    }
};

export default gameAddingReducer;
