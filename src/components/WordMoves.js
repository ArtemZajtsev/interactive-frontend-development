import React from 'react';

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
    moves: React.PropTypes.array.isRequired
};


export default WordMove;
