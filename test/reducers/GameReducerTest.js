import reducer, {WG, WL, WC} from '../../src/reducers/GamesReducer';
import {gameAdded, numberGameGuess, wordGameGuess} from '../../src/actions/index';

describe('game reducer', () => {
    it('has no games initially', () => {
        expect(reducer(undefined, {})).to.eql({games: []});
    });
    it('adds a game when button clicked', () => {
            const stateAfterGameAddition = reducer(undefined, gameAdded('number'));
            expect(stateAfterGameAddition.games.length).to.eql(1);
        }
    );
});

describe('number game', () => {
    it('return was lower if guessed < than randomed', () => {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('1', 1));
        expect(newState.games[0].moves[0].text).to.eql(WL);
    });
    it('return was greater if guessed > then randomed', () => {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('6', 1));
        expect(newState.games[0].moves[0].text).to.eql(WG);
    });
    it('return was correct if guessed === randomed', () => {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('5', 1));
        expect(newState.games[0].moves[0].text).to.eql(WC);
    });
    it('wins the game if guess was correct', ()=> {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('5', 1));
        expect(newState.games[0].win).to.eql(true);
    });
    it('win remain false while game isn`t won', ()=> {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('4', 1));
        expect(newState.games[0].win).to.eql(false);
    });
    it('adds right move when move is done', () => {
        const initialState = {
            games: [{
                gameType: 'number',
                id: 1,
                win: false,
                targetNumber: 5,
                moves: []
            }]
        };
        const newState = reducer(initialState, numberGameGuess('4', 1));
        expect(newState.games[0].moves[0]).to.eql({guess: '4', id: 1, text: WL});
    });
});

describe('word game', ()=> {
    it('win the game if guess was correct', () => {
        const initialState = {
            games: [{
                gameType: 'word',
                id: 1,
                win: false,
                targetWord: 'test',
                moves: []
            }]
        };
        const newState = reducer(initialState, wordGameGuess('test', 1));
        expect(newState.games[0].win).to.eql(true);
    });
    it('win remain false while game isn`t won', () => {
        const initialState = {
            games: [{
                gameType: 'word',
                id: 1,
                win: false,
                targetWord: 'test',
                moves: []
            }]
        };
        const newState = reducer(initialState, wordGameGuess('pew', 1));
        expect(newState.games[0].win).to.eql(false);
    });
    it('return correct matches', () => {
        const initialState = {
            games: [{
                gameType: 'word',
                id: 1,
                win: false,
                targetWord: 'pewpew',
                moves: []
            }]
        };
        const newState = reducer(initialState, wordGameGuess('pew', 1));
        expect(newState.games[0].moves[0].correct).to.eql([0, 1, 2]);
    });
    it('adds right move when move is done', ()=> {
        const initialState = {
            games: [{
                gameType: 'word',
                id: 1,
                win: false,
                targetWord: 'pewpew',
                moves: []
            }]
        };
        const newState = reducer(initialState, wordGameGuess('pew', 1));
        expect(newState.games[0].moves[0]).to.eql({guess: 'pew', id: 1, correct: [0, 1, 2]});
    });
});
