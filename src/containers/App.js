import React, {Component} from 'react';
import GameListContainer from './GameListContainer';
import GameAddingButtonsContainer from './GameAddingButtonsContainer';

const App = () => {

        return (
            <div className="app">
                <h1>Game Lobby</h1>
                <GameAddingButtonsContainer/>
                <GameListContainer/>
            </div>
        );
    };

export default App;
