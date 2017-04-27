import GameList from '../components/GameList';
import {connect} from 'react-redux';
import {moveAdditionRequested} from '../actions/gameActions';

const mapDispatchToProps = (dispatch) => ({
    onNumberGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id)),
    onWordGuessSubmit: (guess, id) => dispatch(moveAdditionRequested(guess, id))
});

const mapStateToProps = (state) => {
  return {
      games: state.games.games
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
