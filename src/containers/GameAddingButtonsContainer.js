import GameAddingButtons from '../components/GameAddingButtons';
import {connect} from 'react-redux';
import {gameAdditionRequested} from '../actions';


const mapDispatchToProps = (dispatch) => ({
    onNumberClick: () => dispatch(gameAdditionRequested('guess_number')),
    onWordClick: () => dispatch(gameAdditionRequested('guess_word')),
});

export default connect(undefined, mapDispatchToProps)(GameAddingButtons);
