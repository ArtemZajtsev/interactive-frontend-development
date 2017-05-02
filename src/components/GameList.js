import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const GameList = (props) => {
    const gameElements = props.games.map((game) => {
        if (props.location.pathname === '/ongoingGames' && game.status !== 'finished') {
            return (
                <li key={game.id}>
                    <Link to={`/games/${game.id}`}>{`Type: ${game.type} Status: ${game.status}` } </Link>
                </li>
            );
        } else if (props.location.pathname === '/finishedGames' && game.status === 'finished') {
            return (
                <li key={game.id}>
                    <Link to={`/games/${game.id}`}>{`Type: ${game.type} Status: ${game.status}` } </Link>
                </li>
            );
        }
    });

    return (
        <div className="game-list reverse-list center">
            <ul>
                {gameElements}
            </ul>
        </div>
    );
};

GameList.propTypes = {
    games: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
};

export default GameList;
