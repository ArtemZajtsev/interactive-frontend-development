import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import {CONNECTED} from '../constants';

const PlayerList = (props) => {
    const players = props.players.map((player, idx) => {
        return (
            <Player key={idx} player={player} currentPlayerId={props.currentPlayerId}/>
        );
    });
    if (props.status === CONNECTED) {
        return (
            <div>
                <h1>Online Players</h1>
                {players}
            </div>
        );
    } else {
        return (
            <div>
            </div>
        );
    }
};

export default PlayerList;

PlayerList.propTypes = {
    currentPlayerId: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }).isRequired).isRequired
};
