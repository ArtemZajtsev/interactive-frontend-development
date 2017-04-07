import React from 'react';

const GameAddingButtons = (props) => {
    return (
        <div className="game-buttons">
            <button className="number-button" onClick={props.onNumberClick}>Create Number Game
            </button>
            <button className="word-button" onClick={props.onWordClick}>Create Word Game
            </button>
        </div>
    );
};

export default GameAddingButtons;

GameAddingButtons.propTypes = {
    onNumberClick: React.PropTypes.func.isRequired,
    onWordClick: React.PropTypes.func.isRequired
};
