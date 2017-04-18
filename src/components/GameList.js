import React from 'react';
import NumberGameApp from './NumberGameApp';
import WordGameApp from './WordGameApp';

const GameList = (props) => {
    const gameElements = props.games.map((game) => {
        console.log(props);
        if (game.type === 'guess_number') {
            return(
                <NumberGameApp key={game.id} game={game} onSubmit={props.onNumberGuessSubmit} />
            );
        } else if (game.type === 'guess_word') {
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
