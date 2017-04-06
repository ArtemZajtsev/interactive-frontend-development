import React from 'react';
import NumberGameApp from '../containers/NumberGameApp';
import WordGameApp from '../containers/WordGameApp';

const GameList = (props) => {
    const gameElements = props.games.map((game) => {
        if (game.gameType === 'number') {
            return(
                <NumberGameApp key={game.id} game={game} onSubmit={props.onNumberGuessSubmit} />
            );
        } else if (game.gameType === 'word') {
            return(
                <WordGameApp key={game.id} game={game} onSubmit={props.onWordGuessSubmit}/>
            );
        }
    });

    return (
        <div className="game-list reverse-list">
            {gameElements}
        </div>
    );
};

GameList.propTypes = {
    games: React.PropTypes.array.isRequired
};

export default GameList;
