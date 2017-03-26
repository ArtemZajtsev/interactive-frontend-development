import React from 'react'

const Moves = (props) => {
    const guessElements = props.moves.map((move) => {
        return (
            <p className={move.text === 'was correct' ? 'green' : 'red'} key={move.id}> {move.guess} {move.text}</p>
        );
    });
    return (
        <div className='guess-list reverse-list'>
            {guessElements}
        </div>
    );
};

export default Moves;