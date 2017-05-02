import React from 'react';
import {Link} from 'react-router-dom';
import {CONNECTED} from '../constants';
import PropTypes from 'prop-types';

const RoutingComponent = (props) => {
    if(props.status === CONNECTED) {
        return (
            <div>
                <ul>
                    <li><Link to="/createGame"> Create Game</Link></li>
                    <li><Link to="/players"> Online Players</Link></li>
                    <li><Link to="/ongoingGames"> Ongoing Games</Link></li>
                    <li><Link to="/finishedGames"> Finished Games</Link></li>
                </ul>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default RoutingComponent;

RoutingComponent.propTypes = {
    status: PropTypes.string.isRequired
};
