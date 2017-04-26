import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.player.id === props.currentPlayerId ? '(you)': ''} {`${props.player.name}`}</p>
        </div>
    );
};

export default Player;
