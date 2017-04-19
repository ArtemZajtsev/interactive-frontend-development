import React from 'react';

const GameAddingButtons = (props) => {
    if (props.fetchState.inFlight && props.fetchState.error == undefined) {
        return (
            <div className="game-buttons">
                <span>Loading game...</span>
            </div>
        )
    } else if (props.fetchState.error) {
        return (
            <div className="game-buttons">
                <span>Last Game Downloading faced a problem {`${props.fetchState.error}`}. Please Try Again.</span>
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
                <button className="number-button" onClick={props.onNumberClick}>Create Number Game
                </button>
                <button className="word-button" onClick={props.onWordClick}>Create Word Game
                </button>
            </div>
        );
    }
};

export default GameAddingButtons;

GameAddingButtons.propTypes = {
    onNumberClick: React.PropTypes.func.isRequired,
    onWordClick: React.PropTypes.func.isRequired
};
