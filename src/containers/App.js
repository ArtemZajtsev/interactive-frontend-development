import React from 'react';
import GameListContainer from './GameListContainer';
import GameAddingButtonsContainer from './GameAddingButtonsContainer';
import ConnectionContainer from './ConnectionContainer';
import PlayerListContainer from './PlayerListContainer';

const App = () => {
        return (
            <div className="app">
                <h1 className="center">Game Lobby</h1>
                <ConnectionContainer/>
                <PlayerListContainer/>
                <GameAddingButtonsContainer/>
                <GameListContainer/>
            </div>
        );
    };

export default App;
