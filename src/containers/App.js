import React from 'react';
import GameListContainer from './GameListContainer';
import GameAddingButtonsContainer from './GameAddingButtonsContainer';

const App = () => {
        return (
            <div className="app">
                <h1 className="center">Game Lobby</h1>
                <GameAddingButtonsContainer/>
                <GameListContainer/>
            </div>
        );
    };

export default App;
