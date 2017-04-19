import React from 'react';
import WordGuessForm from './WordGuessForm';
import WordMoves from './WordMoves';
import {FINISHED_GAME} from '../constants';

const WordGameApp = (props) => {
    console.log(props);
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
    game: React.PropTypes.shape({
        status: React.PropTypes.string,
        moves: React.PropTypes.array,
        onSubmit: React.PropTypes.func,
        id: React.PropTypes.string,
        type: React.PropTypes.string,
        fetchState: React.PropTypes.shape({
            inFlight: React.PropTypes.bool,
            error: React.PropTypes.string
        }).isRequired
    }).isRequired,
    onSubmit: React.PropTypes.func
};
