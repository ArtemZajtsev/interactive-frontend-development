import {postGame, postMove} from '../../src/actions/gameServerActions';
import {NUMBER_GAME} from '../../src/constants';
import {
    GAME_ADDITION_FAILED,
    GAME_ADDITION_SUCCEEDED,
    MOVE_ADDITION_FAILED,
    MOVE_ADDITION_SUCCEEDED
} from '../../src/actions/index'

describe('postGame', () => {
    let xhr;
    let requests;
    let dispatch;

    beforeEach(() => {
        global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

        requests = [];
        xhr.onCreate = (xhr) => requests.push(xhr);
        dispatch = sinon.stub();
    });

    afterEach(() => {
        xhr.restore();
    });

    it('dispatches game post failed when xhr fails', () => {
        postGame(NUMBER_GAME)(dispatch);

        requests[0].respond(503, {}, JSON.stringify({error: 'error'}));
        expect(dispatch).to.have.been.calledWith({
            type: GAME_ADDITION_FAILED,
            payload: {error: 'error'}
        });
    });

    it('dispatches game post success when xhr succeeds', () => {
        postGame(NUMBER_GAME)(dispatch);

        requests[0].respond(201, {}, JSON.stringify({id: 'superId', type: NUMBER_GAME, status: 'superStatus'}));
        expect(dispatch).to.have.been.calledWith({
            type: GAME_ADDITION_SUCCEEDED,
            payload: {
                id: 'superId',
                type: NUMBER_GAME,
                status: 'superStatus'
            }
        });
    });
});

describe('postMove', () => {
    let xhr;
    let requests;
    let dispatch;

    beforeEach(() => {
        global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

        requests = [];
        xhr.onCreate = (xhr) => requests.push(xhr);
        dispatch = sinon.stub();
    });

    afterEach(() => {
        xhr.restore();
    });

    it('dispatches move post failed when xhr fails', () => {
        postMove({guess: 'guess', id:'1'})(dispatch);

        requests[0].respond(503, {}, JSON.stringify({error: 'error'}));
        expect(dispatch).to.have.been.calledWith({
            type: MOVE_ADDITION_FAILED,
            payload: {error: 'error', id: '1'}
        });
    });

    it('dispatches game post success when xhr succeeds', () => {
        postMove({guess: 'guess', id:'1'})(dispatch);

        requests[0].respond(201, {}, JSON.stringify({move: 'move',game: 'game'}));
        expect(dispatch).to.have.been.calledWith({
            type: MOVE_ADDITION_SUCCEEDED,
            payload: {
                move: 'move',
                game: 'game',
                id:'1'
            }
        });
    });
});