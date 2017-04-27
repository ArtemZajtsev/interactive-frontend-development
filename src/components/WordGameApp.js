import React from 'react';
import WordGuessForm from './WordGuessForm';
import WordMoves from './WordMoves';
import {FINISHED_GAME} from '../constants';
import PropTypes from 'prop-types';


const WordGameApp = (props) => {
    if (props.game.status == FINISHED_GAME) {
        return (
            <div className="word-game-win">
                <h2>Word Guess Game</h2>
                <p>You won!</p>
                <h3>Previous moves:</h3>
                <WordMoves moves={props.game.moves}/>
            </div>
        );
    } else if (props.game.fetchState.inFlight && props.game.fetchState.error == undefined) {
        return (
            <div className="word-game">
                <h2>Word Guess Game</h2>
                <p>Guess a 5 letter word</p>
                <span>Loading...</span>
                <h3>Previous moves:</h3>
                <WordMoves moves={props.game.moves}/>
            </div>
        );
    } else if (props.game.fetchState.error) {
        return (
            <div className="word-game">
                <h2>Word Guess Game</h2>
                <p>Guess a 5 letter word</p>
                <span>{`${props.game.fetchState.error}`}. Please Try Again</span>
                <WordGuessForm onSubmit={(guess) => (props.onSubmit(guess, props.game.id))}/>
                <h3>Previous moves:</h3>
                <WordMoves moves={props.game.moves}/>
            </div>
        );
    } else {
        return (
            <div className="word-game">
                <h2>Word Guess Game</h2>
                <p>Guess a 5 letter word</p>
                <WordGuessForm onSubmit={(guess) => (props.onSubmit(guess, props.game.id))}/>
                <h3>Previous moves:</h3>
                <WordMoves moves={props.game.moves}/>
            </div>
        );
    }
};

export default WordGameApp;

WordGameApp.propTypes = {
    game: PropTypes.shape({
        status: PropTypes.string,
        moves: PropTypes.array,
        onSubmit: PropTypes.func,
        id: PropTypes.string,
        type: PropTypes.string,
        fetchState: PropTypes.shape({
            inFlight: PropTypes.bool,
            error: PropTypes.string
        }).isRequired
    }).isRequired,
    onSubmit: PropTypes.func
};
