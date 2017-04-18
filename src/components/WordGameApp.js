import React from 'react';
import WordGuessForm from './WordGuessForm';
import WordMoves from './WordMoves';
import {FINISHED_GAME} from '../constants';

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
        win: React.PropTypes.bool,
        moves: React.PropTypes.array,
        onSubmit: React.PropTypes.func,
        id: React.PropTypes.number,
        gameType: React.PropTypes.string
    }).isRequired,
    onSubmit: React.PropTypes.func
};
