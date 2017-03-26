/**
 * Created by minhi_000 on 26.03.2017.
 */
import React, {Component} from 'react';
import GuessForm from '../components/GuessForm';
import Moves from '../components/Moves'
import Game from '../src/Game';


class App extends Component {

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
        if (this.game.isWin() === false) {
            return (
                <div className="app">
                    <h1>Game Lobby</h1>
                    <h2>Number Guess Game</h2>
                    <p>Guess number from 0 to 9</p>
                    <GuessForm onSubmit={this.handleGuessSubmit.bind(this)}/>
                    <h3>Previous moves:</h3>
                    <Moves moves={this.state.moves}/>
                </div>
            );
        } else if (this.game.isWin() === true) {
            return (
                <div className="app">
                    <h1>Game Lobby</h1>
                    <h2>Number Guess Game</h2>
                    <p>You won!</p>
                    <h3>Previous moves:</h3>
                    <Moves moves={this.state.moves}/>
                </div>
            );
        }
    }
}

export default App;