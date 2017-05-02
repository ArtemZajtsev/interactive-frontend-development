import {connect} from 'react-redux';
import {moveAdditionRequested} from '../actions/gameActions';
import GameComponent from '../components/GameComponent';

const mapDispatchToProps = (dispatch) => ({
    onNumberGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id)),
    onWordGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id))
});

const mapStateToProps = (state, ownProps) => {
    const gameId = ownProps.match.params.gameId;
    const game = state.games.games.find((game) => game.id === gameId);
    return {game, gameId};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);

