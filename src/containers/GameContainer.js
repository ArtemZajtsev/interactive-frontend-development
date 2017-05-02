import React from 'react';
import NumberGameApp from '../components/NumberGameApp';
import WordGameApp from '../components/WordGameApp';
import {connect} from 'react-redux';
import {moveAdditionRequested} from '../actions/gameActions';

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

const mapDispatchToProps = (dispatch) => ({
    onNumberGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id)),
    onWordGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id))
});

const mapStateToProps = (state, ownProps) => {
    const gameId = ownProps.match.params.gameId;
    const game = state.games.games.find((game) => game.id === gameId);
    return {game, gameId};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOrNotFound);
