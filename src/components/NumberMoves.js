import React from 'react';
import {EQ, GT, LT, EQT, GTT, LTT} from '../constants';

const Moves = (props) => {
    const guessElements = props.moves.map((move, idx) => {
        return (
            <p className={move.comparedToAnswer === EQ ? 'green' : 'red'} key={idx}>
                {move.guess} {(move.comparedToAnswer === GT) ? GTT : (move.comparedToAnswer === LT) ? LTT : EQT}</p>
        );
    });
    return (
        <div className='guess-list reverse-list'>
            {guessElements}
        </div>
    );
};

Moves.propTypes = {
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        guess: React.PropTypes.number,
        text: React.PropTypes.string
    })).isRequired
};

export default Moves;
