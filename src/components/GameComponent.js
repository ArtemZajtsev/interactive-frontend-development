import React from 'react';
import PropTypes from 'prop-types';
import NumberGameApp from './NumberGameApp';
import WordGameApp from './WordGameApp';

const GameOrNotFound = ({game, gameId, onNumberGuessSubmit, onWordGuessSubmit}) => {
    if(game) {
        if(game.type === 'guess_number') {
            return (
                <NumberGameApp game={game} onSubmit={onNumberGuessSubmit}/>
            );
        } else if(game.type === 'guess_word') {
            return (
                <WordGameApp game={game} onSubmit={onWordGuessSubmit}/>
            );
        }
    } else {
        return (
            <p>Game {gameId} not found</p>
        );
    }
};

GameOrNotFound.propTypes = {
    game: PropTypes.object.isRequired,
    gameId: PropTypes.string.isRequired,
    onWordGuessSubmit: PropTypes.func.isRequired,
    onNumberGuessSubmit: PropTypes.func.isRequired
};

export default GameOrNotFound;
