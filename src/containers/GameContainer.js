import React from 'react';
import NumberGameApp from '../components/NumberGameApp';
import WordGameApp from '../components/WordGameApp';
import {connect} from 'react-redux';
import {moveAdditionRequested} from '../actions/gameActions';


const GameOrNotFound = (props) => {
    if(props.game) {
        if(props.game.type === 'guess_number') {
            return (
                <NumberGameApp game={props.game} onSubmit={props.onNumberGuessSubmit}/>
            );
        } else if(props.game.type === 'guess_word') {
            return (
                <WordGameApp game={props.game} onSubmit={props.onWordGuessSubmit}/>
            );
        }
    } else {
        return (
          <p>Game not found</p>
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
