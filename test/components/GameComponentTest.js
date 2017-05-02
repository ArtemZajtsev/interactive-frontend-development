import React from 'react';
import {shallow, render} from 'enzyme';
import GameComponent from '../../src/components/GameComponent';
import {FINISHED_GAME} from '../../src/constants';

describe('GameComponent ', () => {
    it('renders', () => {
        expect(shallow(
            <GameComponent game=""
                           gameId=""
                           onWordGuessSubmit=""
                           onNumberGuessSubmit=""/>
        )).to.exist;
    });
    it('renders number game app when game type is number game', () => {
        expect(render(
            <GameComponent game={{
                type: 'guess_number',
                status: FINISHED_GAME,
                moves: []
            }}
                           gameId=""
                           onWordGuessSubmit=""
                           onNumberGuessSubmit=""/>
        )).to.include.text('Number Guess Game');
    });
    it('renders word game app when game type is word game', () => {
        expect(render(
            <GameComponent game={{
                type: 'guess_word',
                status: FINISHED_GAME,
                moves: []
            }}
                           gameId=""
                           onWordGuessSubmit=""
                           onNumberGuessSubmit=""/>
        )).to.include.text('Word Guess Game');
    });
    it('renders game not found when there is no game', () => {
       expect(shallow(
            <GameComponent game={null}
                           gameId=""
                           onWordGuessSubmit=""
                           onNumberGuessSubmit=""/>
       )).to.have.exactly(1).descendants('p');
    });
});
