import reducer from '../../src/reducers/WebSocketReducer';
import {
    connectionRequested,
    connectionSucceeded,
    disconnectSucceeded,
    playerListReceived,
    currentPlayerSuccesfullyAdded
}from '../../src/actions/connectionActions';

import {
    CONNECTED,
    CONNECTING,
    DISONNECTED
} from '../../src/constants';


describe('web socket reducer ', () => {
    it('is disconnected initially and without any players', () => {
        expect(reducer(undefined, {})).to.eql({
            status: DISONNECTED,
            disconnectReason: null,
            players: [],
            currentPlayerId: ''
        });
    });
    it('sets status to connecting when connection is requested', () => {
        expect(reducer(undefined, connectionRequested())).to.eql({
            currentPlayerId: '',
            disconnectReason: null,
            players: [],
            status: CONNECTING
        });
    });
    it('sets status to connected when connection is established', () => {
        expect(reducer(undefined, connectionSucceeded())).to.eql({
            currentPlayerId: '',
            disconnectReason: null,
            players: [],
            status: CONNECTED
        });
    });
    it('sets status to disconnected and sets disconnect reason if disconnection was with a reason', () => {
        const initialState = reducer(undefined, connectionSucceeded());
        expect(reducer(initialState, disconnectSucceeded({reason: 'test'}))).to.eql({
            currentPlayerId: '',
            disconnectReason: 'test',
            players: [],
            status: DISONNECTED
        });
    });
    it('resets state to initial when player disconnects with no reason', () => {
       const initialState = reducer(undefined, connectionSucceeded());
       expect(reducer(initialState, disconnectSucceeded({}))).to.eql({
           currentPlayerId: '',
           disconnectReason: null,
           players: [],
           status: DISONNECTED
       });
    });
    it('sets players when player list received', () => {
       expect(reducer(undefined, playerListReceived([{name: 'yo', id: 'ololo'}]))).to.eql({
           currentPlayerId: '',
           disconnectReason: null,
           players: [{
               id: 'ololo',
               name: 'yo'
           }],
           status: CONNECTED
       });
    });
    it('sets current player id when current player succesfully added', () => {
       expect(reducer(undefined, currentPlayerSuccesfullyAdded({playerId: 'meow'}))).to.eql({
           currentPlayerId: 'meow',
           disconnectReason: null,
           players: [],
           status: DISONNECTED
       });
    });
});
