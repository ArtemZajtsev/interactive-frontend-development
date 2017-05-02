import jsonAjax from '../utils/JSONAjaxRequest';
import {
    gameAdditionSucceeded,
    gameAdditionFailed,
    moveAdditionSucceeded,
    moveAdditionFailed
} from './gameActions';
import {push} from 'connected-react-router';

const SERVER_ADDRESS = 'http://localhost:8081';

export const postGame = ({type}) => (dispatch) => {
    jsonAjax(
        SERVER_ADDRESS + '/games',
        'POST',
        {type},
        ({id, type, status}) => {
            dispatch(push('/ongoingGames'));
            dispatch(gameAdditionSucceeded({id, type, status}));
        },
        ({error} = {}) => dispatch(gameAdditionFailed({error}))
    );
};

export const postMove = ({guess, id}) => (dispatch) => {
    jsonAjax(
        SERVER_ADDRESS + `/games/${id}/moves`,
        'POST',
        {guess},
        ({move, game}) => dispatch(moveAdditionSucceeded({id, move, game})),
        ({error} = {}) => dispatch(moveAdditionFailed({id, error}))
    );
};
