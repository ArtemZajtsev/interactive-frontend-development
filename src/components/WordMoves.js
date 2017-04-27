import React from 'react';
import PropTypes from 'prop-types';


const WordMove = (props) => {
    const letterRender = (move) => {
        return move.guess.split('').map((letter, idx) => {
            return (
                <span key={idx} className={move.letterMatches[idx] ? 'green' : 'red'}>{letter}</span>
            );
        });
    };

    const guessElements = props.moves.map((move, index) => {
        return (
            <div key={index}>
                {letterRender(move)}
            </div>
        );
    });
    return (
        <div className="reverse-list">
            {guessElements}
        </div>
    );
};

WordMove.propTypes = {
    moves: PropTypes.array.isRequired
};


export default WordMove;
