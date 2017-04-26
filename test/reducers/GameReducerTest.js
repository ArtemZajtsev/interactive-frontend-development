import reducer from '../../src/reducers/GamesReducer';
import {
    gameAdditionRequested,
    gameAdditionSucceeded,
    gameAdditionFailed,
    moveAdditionRequested,
    moveAdditionSucceeded,
    moveAdditionFailed
} from '../../src/actions/gameActions';


describe('game addition buttons', () => {
    it('has no games or pending requests initially', () => {
        expect(reducer(undefined, {})).to.eql({fetchState: {inFlight: false}, games: []});
    });
    it('sets request to flight when needed', () => {
        expect(
            reducer(undefined, gameAdditionRequested())
        ).to.eql({fetchState: {inFlight: true}, games: []});
    });
    it('create game when request succeeds', () => {
        const initialState = reducer(undefined, gameAdditionRequested());
        expect(
            reducer(initialState, gameAdditionSucceeded({id: '1', type: 'dnd', status: 'is cool'}))
        ).to.eql(
            {
                fetchState: {
                    inFlight: false
                },
                games: [
                    {
                        fetchState: {},
                        id: '1',
                        moves: [],
                        status: 'is cool',
                        type: 'dnd'
                    }
                ]
            }
        );
    });
    it('sets error when request fails', () => {
        expect(
            reducer(undefined, gameAdditionFailed('awwww'))
        ).to.eql({fetchState: {error: 'awwww', inFlight: false}, games: []});
    });
    it('sets request as not in flight when request succeeds', () => {
        expect(
            reducer(undefined, gameAdditionSucceeded({id: '1', type: 'dnd', status: 'is cool'})).fetchState.inFlight
        ).to.eql(false);
    });
});

describe('moves', () => {
    it('has no moves initially', () => {
        expect(reducer(undefined, {})).to.eql({fetchState: {inFlight: false}, games: []});
    });
    it('sets move request to flight when needed', () => {
        expect(
            reducer(undefined, moveAdditionRequested()).games[0].fetchState.inFlight
        ).to.eql(true);
    });
    it('sets move when move request succeeds', () => {
        const initialState = reducer(undefined, gameAdditionSucceeded({id: '1', type: 'dnd', status: 'is cool'}));
        const previousState = reducer(initialState, moveAdditionRequested('yo', '1'));
        expect(
            reducer(previousState, moveAdditionSucceeded({id: '1', move: 'yo', game: {}})).games[0].moves[0]
        ).to.eql('yo');
    });
    it('sets request as not in flight when request succeeds', () => {
        const initialState = reducer(undefined, gameAdditionSucceeded({id: '1', type: 'dnd', status: 'is cool'}));
        const previousState = reducer(initialState, moveAdditionRequested('yo', '1'));
        expect(
            reducer(previousState, moveAdditionSucceeded({id: '1', move: 'yo', game: {}})).games[0].fetchState.inFlight
        ).to.eql(false);
    });
    it('sets error when request fails', () => {
        const initialState = reducer(undefined, gameAdditionSucceeded({id: '1', type: 'dnd', status: 'is cool'}));
        const previousState = reducer(initialState, moveAdditionRequested('yo', '1'));
        expect(
            reducer(previousState, moveAdditionFailed({error: 'meh'})).games[0].fetchState.error
        ).to.eql('meh');
    });
});
