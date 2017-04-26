import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import gameMiddleware from './middleware/gameMiddleware';


// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// http://redux.js.org/docs/api/applyMiddleware.html#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeStoreEnhancers(
        applyMiddleware(
            thunk,
            gameMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('wrapper')
);
