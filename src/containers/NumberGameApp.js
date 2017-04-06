import React from 'react';
import GuessForm from '../components/NumberGuessForm';
import Moves from '../components/NumberMoves';

const NumberGameApp = (props) => {

        if (props.game.win) {
            return (
                <div className="number-game-win">
                    <h2>Number Guess Game</h2>
                    <p>You won!</p>
                    <h3>Previous moves:</h3>
                    <Moves moves={props.game.moves}/>
                </div>
            );
        } else {
            return (
                <div className="number-game">
                    <h2>Number Guess Game</h2>
                    <p>Guess number from 0 to 9</p>
                    <GuessForm onSubmit={(guess) => (props.onSubmit(guess, props.game.id))}/>
                    <h3>Previous moves:</h3>
                    <Moves moves={props.game.moves}/>
                </div>
            );
        }
};

export default NumberGameApp;
