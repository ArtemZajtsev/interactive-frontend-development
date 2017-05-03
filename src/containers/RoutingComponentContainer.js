import RoutingComponent from '../components/RoutingComponent';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        status: state.connection.status
    };
};

export default connect(mapStateToProps, undefined)(RoutingComponent);
