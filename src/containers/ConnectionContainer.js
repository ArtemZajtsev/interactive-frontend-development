import {connect} from 'react-redux';
import {
    connectionRequested,
    disconnectRequested
} from '../actions/connectionActions';
import ConnectionComponent from '../components/ConnectionComponent';

const mapDispatchToProps = (dispatch) => ({
    onConnectClick: (name) => dispatch(connectionRequested(name)),
    onDisconnectClick: () => dispatch(disconnectRequested())
});

const mapStateToProps = (state) => {
    return {
        status: state.connection.status,
        disconnectReason: state.connection.disconnectReason
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionComponent);
