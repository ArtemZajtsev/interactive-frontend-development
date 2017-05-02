import React from 'react';
import {shallow} from 'enzyme';
import PlayerList from '../../src/components/PlayerList';
import {CONNECTED, DISCONNECTED, CONNECTING} from '../../src/constants';

describe('Player List ', () => {
   it('renders', () => {
      expect(shallow(
          <PlayerList currentPlayerId="" status="" players={[]}/>
      )).to.exist;
   });
   it('renders player list when player connected', () => {
      expect(shallow(
          <PlayerList currentPlayerId="" status={CONNECTED} players={[]}/>
      )).to.have.exactly(1).descendants('h1');
   });
   it('renders empty div if player is disconnected', () =>{
       expect(shallow(
           <PlayerList currentPlayerId="" status={DISCONNECTED} players={[]}/>
       )).to.have.exactly(1).descendants('div');
   });
    it('renders empty div if player is connecting', () =>{
        expect(shallow(
            <PlayerList currentPlayerId="" status={CONNECTING} players={[]}/>
        )).to.have.exactly(1).descendants('div');
    });
});
