import GameList from '../components/GameList';
import {connect} from 'react-redux';
import {numberGameGuess, wordGameGuess} from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onNumberGuessSubmit: (guess, id) => dispatch(numberGameGuess(guess, id)),
    onWordGuessSubmit: (guess, id) => dispatch(wordGameGuess(guess, id))
});

const mapStateToProps = (state) => {
  return {
      games: state.games
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
