import React from 'react';
import {shallow} from 'enzyme';
import Player from '../../src/components/Player';

describe('Player component ', () => {
    it('renders', () => {
        expect(shallow(
            <Player currentPlayerId="" player=""/>
        )).to.exist;
    });
    it('adds you when current plaer id is the same with player id', () => {
        expect(shallow(
            <Player currentPlayerId='ayo' player={{name: 'test', id: 'ayo'}}/>
        )).to.include.text('(you)');
    });
    it('renders player name', () => {
       expect(shallow(
           <Player currentPlayerId="pew" player={{name: 'lol', id: 'qwe'}}/>
       )).to.include.text('lol');
    });
});
