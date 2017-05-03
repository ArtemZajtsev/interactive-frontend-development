import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import gameMiddleware from './middleware/gameMiddleware';
import connectionServerMiddleware from './middleware/connectionMiddleware';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// http://redux.js.org/docs/api/applyMiddleware.html#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let history = createBrowserHistory();

let store = createStore(
    connectRouter(history)(reducer),
    composeStoreEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
            gameMiddleware,
            connectionServerMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('wrapper')
);
