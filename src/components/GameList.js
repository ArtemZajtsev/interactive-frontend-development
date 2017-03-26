import React from 'react';
import NumberGameApp from '../containers/NumberGameApp';
//import WordGameApp from '../containers/WordGameApp';

const GameList =  (props) => {
    const gameElements = props.games.map((game) => {
        if (game.gameType === 'number'){
            return(
                <NumberGameApp key={game.id}/>
            )
        }
        else if (game.gameType === 'word'){
            // return(
            //     <WordGameApp/>
            // )
        }
    });

    return (
        <div className="game-list">
            {gameElements}
        </div>
    )
};

export default GameList;