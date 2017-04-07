import React from 'react';
import {WC} from '../reducers/GamesReducer';

const Moves = (props) => {
    const guessElements = props.moves.map((move) => {
        return (
            <p className={move.text === WC ? 'green' : 'red'} key={move.id}> {move.guess} {move.text}</p>
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
