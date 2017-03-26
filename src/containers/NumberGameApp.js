import React, {Component} from 'react';
import GuessForm from '../components/NumberGuessForm';
import Moves from '../components/NumberMoves';
import Game from '../NumberGame';


class NumberGameApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moves: []
        };
        this.randNum = Math.floor(Math.random() * 10);
        this.game = new Game(this.randNum);
    }

    handleGuessSubmit({guess}) {
        if (this.game.isWin() === false) {
            const text = this.game.makeGuess(guess);
            this.setState({
                moves: this.state.moves.concat({guess: guess, text: text, id: this.state.moves.length + 1})
            });
        }
    }

    render() {
        if (this.game.isWin()) {
            return (
                <div className="number-game-win">
                    <h2>Number Guess Game</h2>
                    <p>You won!</p>
                    <h3>Previous moves:</h3>
                    <Moves moves={this.state.moves}/>
                </div>
            );
        } else {
            return (
                <div className="number-game">
                    <h2>Number Guess Game</h2>
                    <p>Guess number from 0 to 9</p>
                    <GuessForm onSubmit={this.handleGuessSubmit.bind(this)}/>
                    <h3>Previous moves:</h3>
                    <Moves moves={this.state.moves}/>
                </div>
            );
        }
    }
}

export default NumberGameApp;
