import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
    return (
        <div>
            <p>{`${props.player.name}`}</p>
        </div>
    );
};

export default Player;
