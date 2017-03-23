/**
 * Created by minhi_000 on 12.03.2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Guess = (props) => {
    return (
        <div className='text'>
            {props.guess}
        </div>
    );
};

Guess.propTypes = {
    guess: React.PropTypes.string.isRequired,
};


const GuessList = (props) => {
    const guessElements = props.guesses.map((guess) => {
        return (
            <Guess guess={guess.guess} key={guess.id}>
                {guess.guess}
            </Guess>
        )
    });
    return (
        <div className="guess-list">
            {guessElements}
        </div>
    );
};

GuessList.propTypes = {
    guesses: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
        id: React.PropTypes.number
    })).isRequired
};

class GuessForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            guess:''
        };
    }

    static handleEnterPress(e) {
        if(e.key === "Enter"){
            console.log("enter pressed");
            return true;
        }
        else return false;
    };

    onSubmit(event) {
        if(this.handleEnterPress(event)){
            this.props.onSubmit({guess: this.state.guess});
            this.setState({guess:''})
        }
    }

    onChange(event){
        this.setState({guess: event.target.value})
    }

    render() {
        return (
            <div className="guessInput">
                <input
                    type="number"
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

    constructor(props){
        super(props);
        this.state={
            guesses:[
            {guess:'',id:0}
        ]};
    }

    handleGuessSubmit({guess}){
        const lastGuess = this.state.guesses[this.state.guesses.length-1];
        this.setState({
            guesses: this.state.guesses.concat({guess,id:lastGuess.id+1})
        })
    }

    render() {
        return (
            <div className="app">
                <h1>Game Lobby</h1>
                <h2>Number Guess Game</h2>
                <GuessForm onSubmit={this.handleGuessSubmit.bind(this)}/>
                <h3>Previous moves:</h3>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("wrapper")
);
