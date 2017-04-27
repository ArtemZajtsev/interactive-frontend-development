import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
    return (
        <div>
            <p>{props.player.id === props.currentPlayerId ? '(you)' : ''} {`${props.player.name}`}</p>
        </div>
    );
};

export default Player;

Player.propTypes = {
    currentPlayerId: PropTypes.string.isRequired,
    player: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }).isRequired
};
