import React from 'react'

const WordMove = (props) => {
    const guessElements = props.moves.map((move) => {
        return (
            <p key={move.id}>{move.guess}</p>
        );
    });
    return (
        <div>
            {guessElements}
        </div>
    )
};

export default WordMove;