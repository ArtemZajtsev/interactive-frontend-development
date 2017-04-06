import GameAddingButtons from '../components/GameAddingButtons';
import {connect} from 'react-redux';
import {gameAdded} from '../actions';


const mapDispatchToProps = (dispatch) => ({
    onNumberClick: () => dispatch(gameAdded('number')),
    onWordClick: () => dispatch(gameAdded('word')),
});

export default connect(undefined,mapDispatchToProps)(GameAddingButtons);