import {GAME_ADDED} from '../actions/index';
import {NUMBER_GAME_GUESS} from '../actions/index';
import {WORD_GAME_GUESS} from '../actions/index';

const initialState = {games: []};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_ADDED: {
            const newGames = state.games.concat(action.payload);
            return {games: newGames};
        }
        case NUMBER_GAME_GUESS: {
            let targetGame = state.games.find(x => x.id === action.payload.id);
            let targetGameClone = {...targetGame};
            let guess = action.payload.guess;
            let text = '';
            let index = state.games.findIndex(x => x.id === action.payload.id);

            if (guess > targetGameClone.targetNumber) {
                text = 'was greater than target';
            } else if(guess < targetGameClone.targetNumber){
                text = 'was lower than target';
            } else {
                targetGameClone.win = true;
                text = 'was correct';
            }

            const newMoves = targetGameClone.moves.concat({
                guess: guess,
                id: targetGameClone.moves.length + 1,
                text: text
            });
            targetGameClone.moves = newMoves;
            return {
                games: [
                    ...state.games.slice(0, index),
                    targetGameClone,
                    ...state.games.slice(index+1)
                ]
            };

        }
        case WORD_GAME_GUESS: {
            let targetGame = state.games.find(x => x.id === action.payload.id);
            let targetCloneGame = {...targetGame};
            let guess = action.payload.guess;
            let index = state.games.findIndex(x => x.id === action.payload.id);
            let matches = [];

            if(guess === targetCloneGame.targetWord){
                targetCloneGame.win = true;
            }
            for (let i = 0; i < guess.length; i++) {
                if(guess[i] === targetCloneGame.targetWord[i]) {
                    matches.push(i);
                }
            }
            const newMoves = targetCloneGame.moves.concat({
                guess: guess,
                id: targetCloneGame.moves.length+1,
                correct: matches
            });
            targetCloneGame.moves = newMoves;
            return {
                games: [
                    ...state.games.slice(0,index),
                    targetCloneGame,
                    ...state.games.slice(index+1)
                ]
            }
        }
        default:
            return state;
    }
};

export default gamesReducer;
