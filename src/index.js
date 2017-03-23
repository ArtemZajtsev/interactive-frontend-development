/**
 * Created by minhi_000 on 12.03.2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Game from './Game'

const Guess = (props) => {
    return (
        <div className='text'>
            {props.guess} : {props.text}
        </div>
    );
};

Guess.propTypes = {
    guess: React.PropTypes.string.isRequired,
};


const Moves = (props) => {
    const guessElements = props.moves.map((move) => {
        return (
            <Guess guess={move.guess} text={move.text} key={move.id}/>
        )
    });
    return (
        <div className="guess-list">
            {guessElements}
        </div>
    );
};

Moves.propTypes = {
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
        id: React.PropTypes.number
    })).isRequired
};

class GuessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    };

    static handleEnterPress(e) {
        if (e.key === "Enter") {
            console.log("enter pressed");
            return true;
        }
        else return false;
    };

    static isNumber(num) {
        return !isNaN(num);
    };

    onSubmit(event) {
        if (this.handleEnterPress(event) && this.state.guess.length == 1) {
            this.props.onSubmit({guess: this.state.guess});
            this.setState({guess: ''})
        }
    };

    onChange(event) {
        this.isNumber(event.target.value) ? this.setState({guess: event.target.value}) : ''
    };

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
        if (this.game.isWin() == false) {
            const text = this.game.makeGuess(guess);
            this.setState({
                moves: this.state.moves.concat({guess: guess, text: text, id: this.state.moves.length + 1})
            })
        }
    }

    render() {
        return (
            <div className="app">
                <h1>Game Lobby</h1>
                <h2>Number Guess Game</h2>
                <GuessForm onSubmit={this.handleGuessSubmit.bind(this)}/>
                <h3>Previous moves:</h3>
                <Moves moves={this.state.moves}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("wrapper")
);
