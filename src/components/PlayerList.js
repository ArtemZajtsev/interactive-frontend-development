import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
    console.log(props);
    const players = props.players.map((player, idx) => {
        return (
            <Player key={idx} player={player} currentPlayerId={props.currentPlayerId}/>
        );
    });

    return (
        <div>
            {players}
        </div>
    );
};

export default PlayerList;
