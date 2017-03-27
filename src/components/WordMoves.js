import React from 'react';

const WordMove = (props) => {
    const letterRender = (move) => {
        return move.guess.split('').map((letter, index) => {
            return (
                <span key={index} className={move.correct.indexOf(index)>=0 ? 'green' : 'red'}>{letter}</span>
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
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
        correct: React.PropTypes.array
    }))
};


export default WordMove;