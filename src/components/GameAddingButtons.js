import React from 'react';
import PropTypes from 'prop-types';
import {CONNECTED} from '../constants';

const GameAddingButtons = (props) => {
    if (props.status == CONNECTED) {
        if (props.fetchState.inFlight && props.fetchState.error == undefined) {
            return (
                <div className="game-buttons">
                    <span>Loading game...</span>
                </div>
            );
        } else if (props.fetchState.error) {
            return (
                <div className="game-buttons">
                <span>Last Game Downloading faced a problem {`${props.fetchState.error.error}`}. Please Try Again.
                </span>
                    <div className="center">
                        <button className="number-button" onClick={props.onNumberClick}>Create Number Game
                        </button>
                        <button className="word-button" onClick={props.onWordClick}>Create Word Game
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="game-buttons">
                    <h1>Create a Game!</h1>
                    <button className="number-button" onClick={props.onNumberClick}>Create Number Game
                    </button>
                    <button className="word-button" onClick={props.onWordClick}>Create Word Game
                    </button>
                </div>
            );
        }
    } else {
        return (
            <div></div>
        );
    }
};

export default GameAddingButtons;

GameAddingButtons.propTypes = {
    onNumberClick: PropTypes.func.isRequired,
    onWordClick: PropTypes.func.isRequired,
    fetchState: PropTypes.shape({
        inFlight: PropTypes.bool,
        error: PropTypes.object
    }).isRequired
};
