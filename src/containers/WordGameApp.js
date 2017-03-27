import React, {Component} from 'react';
import WordGame from '../WordGame';
import WordGuessForm from '../components/WordGuessForm';
import WordMoves from '../components/WordMoves';
import {WORDS} from '../WordGame';


class WordGameApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moves: []
        };
        this.game = new WordGame(WORDS[Math.floor(Math.random() * WORDS.length)]);
    }

    handleGuessSubmit({guess}) {
        if (this.game.isWin() === false) {
            let correctIndexes = this.game.makeGuess(guess);
            this.setState({
                moves: this.state.moves.concat({
                    guess: guess,
                    id: this.state.moves.length + 1,
                    correct: correctIndexes? correctIndexes : []
                })
            });
        }
    }

    render() {
        if (this.game.isWin()) {
            return (
                <div className="word-game-win">
                    <h2>Word Guess Game</h2>
                    <p>You won!</p>
                    <h3>Previous moves:</h3>
                    <WordMoves moves={this.state.moves}/>
                </div>
            );
        } else {
            return (
                <div className="word-game">
                    <h2>Word Guess Game</h2>
                    <p>Guess a 5 letter word</p>
                    <WordGuessForm onSubmit={this.handleGuessSubmit.bind(this)}/>
                    <h3>Previous moves:</h3>
                    <WordMoves moves={this.state.moves}/>
                </div>
            );
        }
    }

}

export default WordGameApp;
