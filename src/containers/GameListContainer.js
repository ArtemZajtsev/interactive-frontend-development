import GameList from '../components/GameList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
      games: state.games.games
  };
};

export default connect(mapStateToProps, undefined)(GameList);
