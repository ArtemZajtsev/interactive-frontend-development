/**
 * Created by minhi_000 on 12.03.2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

const Moves = (props) => {
    const guessElements = props.moves.map((move) => {
        return (
            <p className={move.text === 'was correct' ? 'green' : 'red'} key={move.id}> {move.guess} {move.text}</p>
        );
    });
    return (
        <div className='guess-list'>
            {guessElements}
        </div>
    );
};

Moves.propTypes = {
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.number,
        id: React.PropTypes.number
    })).isRequired
};

class GuessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            return true;
        } else return false;
    }

    isNumber(num) {
        return !isNaN(num);
    }

    onSubmit(event) {
        if (this.handleEnterPress(event) && this.state.guess.length == 1) {
            this.props.onSubmit({guess: parseInt(this.state.guess)});
            this.setState({guess: ''});
        }
    }

    onChange(event) {
        this.isNumber(event.target.value) ? this.setState({guess: event.target.value}) : '';
    }

    render() {
        return (
            <div className="guessInput">
                <input
                    type="text"
                    placeholder="make a guess"
                    value={this.state.guess}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onSubmit.bind(this)}
                />
            </div>
        );
    }
}

GuessForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};


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

ReactDOM.render(
    <App/>,
    document.getElementById('wrapper')
);
