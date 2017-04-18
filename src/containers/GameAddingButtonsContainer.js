import GameAddingButtons from '../components/GameAddingButtons';
import {connect} from 'react-redux';
import {gameAdditionRequested} from '../actions';
import {NUMBER_GAME,WORD_GAME} from '../constants'

const mapDispatchToProps = (dispatch) => ({
    onNumberClick: () => dispatch(gameAdditionRequested(NUMBER_GAME)),
    onWordClick: () => dispatch(gameAdditionRequested(WORD_GAME)),
});

export default connect(undefined, mapDispatchToProps)(GameAddingButtons);
