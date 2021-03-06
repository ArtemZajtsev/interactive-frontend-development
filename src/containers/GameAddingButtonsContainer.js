import GameAddingButtons from '../components/GameAddingButtons';
import {connect} from 'react-redux';
import {gameAdditionRequested} from '../actions/gameActions';
import {NUMBER_GAME, WORD_GAME} from '../constants';

const mapDispatchToProps = (dispatch) => ({
    onNumberClick: () => dispatch(gameAdditionRequested(NUMBER_GAME)),
    onWordClick: () => dispatch(gameAdditionRequested(WORD_GAME))
});

const mapStateToProps = (state) => {
    return {
        fetchState: {
            inFlight: state.games.fetchState.inFlight,
            error: state.games.fetchState.error
        },
        status: state.connection.status
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameAddingButtons);
