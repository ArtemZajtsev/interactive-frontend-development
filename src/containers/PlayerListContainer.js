import {connect} from 'react-redux';
import PlayerList from '../components/PlayerList';

const mapStateToProps = (state) => {
    return {
        players: state.connection.players,
        currentPlayerId: state.connection.currentPlayerId,
        status: state.connection.status
    };
};

export default connect(mapStateToProps, undefined)(PlayerList);
