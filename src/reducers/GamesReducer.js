import {
    GAME_ADDITION_REQUESTED,
    GAME_ADDITION_SUCCEEDED,
    GAME_ADDITION_FAILED,
    MOVE_ADDITION_REQUESTED,
    MOVE_ADDITION_SUCCEEDED,
    MOVE_ADDITION_FAILED
} from '../actions/gameActions';

const initialState = {
    fetchState: {inFlight: false},
    games: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_ADDITION_REQUESTED: {
            return {
                ...state,
                fetchState: {inFlight: true}
            };
        }
        case GAME_ADDITION_SUCCEEDED: {
            return {
                ...state,
                fetchState: {inFlight: false},
                games: state.games.concat({
                    id: action.payload.id,
                    type: action.payload.type,
                    status: action.payload.status,
                    moves: [],
                    fetchState: {}
                })
            };
        }
        case GAME_ADDITION_FAILED: {
            return {
                ...state,
                fetchState: {inFlight: false, error: action.payload},
            };
        }
        case MOVE_ADDITION_REQUESTED: {
            let index = state.games.findIndex((x) => x.id === action.payload.id);
            let targetGame = state.games[index];
            let targetGameClone = {...targetGame};
            targetGameClone.fetchState = {inFlight: true};
            return {
                ...state,
                games: [
                    ...state.games.slice(0, index),
                    targetGameClone,
                    ...state.games.slice(index + 1)
                ]
            };
        }
        case MOVE_ADDITION_SUCCEEDED: {
            let index = state.games.findIndex((x) => x.id === action.payload.id);
            let targetGame = state.games[index];
            let targetGameClone = {...targetGame};
            targetGameClone.fetchState = {inFlight: false};
            targetGameClone.status = action.payload.game.status;
            targetGameClone.moves = targetGameClone.moves.concat(action.payload.move);
            return {
                ...state,
                games: [
                    ...state.games.slice(0, index),
                    targetGameClone,
                    ...state.games.slice(index + 1)
                ]
            };
        }
        case MOVE_ADDITION_FAILED: {
            let index = state.games.findIndex((x) => x.id === action.payload.id);
            let targetGame = state.games[index];
            let targetGameClone = {...targetGame};
            targetGameClone.fetchState = {inFlight: false, error: action.payload.error};
            return {
                ...state,
                games: [
                    ...state.games.slice(0, index),
                    targetGameClone,
                    ...state.games.slice(index + 1)
                ]
            };
        }
        default:
            return state;
    }
};

export default gameReducer;
