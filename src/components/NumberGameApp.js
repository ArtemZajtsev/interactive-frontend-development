import React from 'react';
import GuessForm from './NumberGuessForm';
import Moves from './NumberMoves';
import {FINISHED_GAME} from '../constants';
import PropTypes from 'prop-types';


const NumberGameApp = (props) => {
    if (props.game.status == FINISHED_GAME) {
        return (
            <div className="number-game-win">
                <h2>Number Guess Game</h2>
                <p>You won!</p>
                <h3>Previous moves:</h3>
                <Moves moves={props.game.moves}/>
            </div>
        );
    } else if (props.game.fetchState.inFlight && props.game.fetchState.error == undefined) {
        return (
            <div className="number-game">
                <h2>Number Guess Game</h2>
                <p>Guess number from 0 to 9</p>
                <span>Loading...</span>
                <h3>Previous moves:</h3>
                <Moves moves={props.game.moves}/>
            </div>
        );
    } else if (props.game.fetchState.error) {
        return (
            <div className="number-game">
                <h2>Number Guess Game</h2>
                <p>Guess number from 0 to 9</p>
                <span>{`${props.game.fetchState.error}`}. Please Try Again</span>
                <GuessForm onSubmit={(guess) => (props.onSubmit(guess, props.game.id))}/>
                <h3>Previous moves:</h3>
                <Moves moves={props.game.moves}/>
            </div>
        );
    } else {
        return (
            <div className="number-game">
                <h2>Number Guess Game</h2>
                <p>Guess number from 0 to 9</p>
                <GuessForm onSubmit={(guess) => (props.onSubmit(guess, props.game.id))}/>
                <h3>Previous moves:</h3>
                <Moves moves={props.game.moves}/>
            </div>
        );
    }
};

export default NumberGameApp;

NumberGameApp.propTypes = {
    game: PropTypes.shape({
        status: PropTypes.string,
        moves: PropTypes.array,
        id: PropTypes.string,
        type: PropTypes.string,
        fetchState: PropTypes.shape({
            inFlight: PropTypes.bool,
            error: PropTypes.string
        }).isRequired
    }).isRequired,
    onSubmit: PropTypes.func
};
