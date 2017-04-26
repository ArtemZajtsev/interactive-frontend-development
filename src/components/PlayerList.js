import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
    const players = props.players.map((player, idx) => {
        return (
            <Player key={idx} player={player}/>
        );
    });

    return (
        <div>
            {players}
        </div>
    );
};

export default PlayerList;
