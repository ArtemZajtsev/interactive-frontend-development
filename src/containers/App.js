import React from 'react';
import GameListContainer from './GameListContainer';
import GameAddingButtonsContainer from './GameAddingButtonsContainer';
import ConnectionContainer from './ConnectionContainer';
import PlayerListContainer from './PlayerListContainer';
import {ConnectedRouter} from 'connected-react-router';
import {Route} from 'react-router-dom';
import RoutingComponentContainer from './RoutingComponentContainer';
import PropTypes from 'prop-types';

const App = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div className="app">
                <RoutingComponentContainer/>
                <h1 className="center">Game Lobby</h1>
                <ConnectionContainer/>
                <Route path="/createGame" component={GameAddingButtonsContainer}/>
                <Route path="/players" component={PlayerListContainer}/>
                <Route path="/ongoingGames" component={GameListContainer}/>
                <Route path="/finishedGames" component={GameListContainer}/>
            </div>
        </ConnectedRouter>
    );
};

export default App;

App.propTypes = {
    history: PropTypes.object.isRequired
};
