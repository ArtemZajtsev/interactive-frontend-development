import React from 'react';
import {EQ, GT, LT, EQT, GTT, LTT} from '../constants';
import PropTypes from 'prop-types';


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
    moves: PropTypes.array.isRequired
};

export default Moves;
