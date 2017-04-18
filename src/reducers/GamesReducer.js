import {
    GAME_ADDITION_REQUESTED,
    GAME_ADDITION_SUCCEEDED,
    GAME_ADDITION_FAILED,
    MOVE_ADDITION_REQUESTED,
    MOVE_ADDITION_SUCCEEDED,
    MOVE_ADDITION_FAILED
} from '../actions/index';

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
                    moves: []
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
            targetGameClone.moves = action.payload.moves;
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
            targetGameClone.fetchState = {inFlight: false, error: action.payload};
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
            return state
    }
};

export default gameReducer;
// import {GAME_ADDED, NUMBER_GAME_GUESS, WORD_GAME_GUESS} from '../actions/index';
//
// export const WG = 'was greater than target';
// export const WL = 'was lower than target';
// export const WC = 'was correct';
//
// const initialState = {games: []};
//
// const gamesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GAME_ADDED: {
//             const newGames = state.games.concat(action.payload);
//             return {games: newGames};
//         }
//         case NUMBER_GAME_GUESS: {
//             let targetGame = state.games.find((x) => x.id === action.payload.id);
//             let targetGameClone = {...targetGame};
//             let guess = action.payload.guess;
//             let text = '';
//             let index = state.games.findIndex((x) => x.id === action.payload.id);
//
//             if (guess > targetGameClone.targetNumber) {
//                 text = WG;
//             } else if (guess < targetGameClone.targetNumber) {
//                 text = WL;
//             } else {
//                 targetGameClone.win = true;
//                 text = WC;
//             }
//
//             const newMoves = targetGameClone.moves.concat({
//                 guess: guess,
//                 id: targetGameClone.moves.length + 1,
//                 text: text
//             });
//             targetGameClone.moves = newMoves;
//             return {
//                 games: [
//                     ...state.games.slice(0, index),
//                     targetGameClone,
//                     ...state.games.slice(index + 1)
//                 ]
//             };
//         }
//         case WORD_GAME_GUESS: {
//             let targetGame = state.games.find((x) => x.id === action.payload.id);
//             let targetCloneGame = {...targetGame};
//             let guess = action.payload.guess;
//             let index = state.games.findIndex((x) => x.id === action.payload.id);
//             let matches = [];
//
//             if (guess === targetCloneGame.targetWord) {
//                 targetCloneGame.win = true;
//             }
//             for (let i = 0; i < guess.length; i++) {
//                 if (guess[i] === targetCloneGame.targetWord[i]) {
//                     matches.push(i);
//                 }
//             }
//             const newMoves = targetCloneGame.moves.concat({
//                 guess: guess,
//                 id: targetCloneGame.moves.length + 1,
//                 correct: matches
//             });
//             targetCloneGame.moves = newMoves;
//             return {
//                 games: [
//                     ...state.games.slice(0, index),
//                     targetCloneGame,
//                     ...state.games.slice(index + 1)
//                 ]
//             };
//         }
//         default:
//             return state;
//     }
// };
//
// export default gamesReducer;
