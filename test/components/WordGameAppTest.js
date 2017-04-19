import React from 'react';
import {shallow} from 'enzyme';
import WordGameApp from '../../src/components/WordGameApp';
import {FINISHED_GAME} from '../../src/constants';

describe('Word Game App', () => {
    it('shows you won when you won and everything is ok', () => {
        const wordGameAppComponent = shallow(
            <WordGameApp game={{status: FINISHED_GAME, fetchState: {inFlight: false, error: undefined}, moves: []}}/>
        );
        expect(wordGameAppComponent).to.include.text('You won!');
    });
    it('shows loading when request is on fly', () => {
        const wordGameAppComponent = shallow(
            <WordGameApp game={{status: 'pewpew', fetchState: {inFlight: true, error: undefined}, moves: []}}/>
        );
        expect(wordGameAppComponent).to.include.text('Loading...');
    });
    it('shows error when request failed', () => {
        const wordGameAppComponent = shallow(
            <WordGameApp game={{status: 'pewpew', fetchState: {inFlight: false, error: 'super error'}, moves: []}}/>
        );
        expect(wordGameAppComponent).to.include.text('Please Try Again');
    });
    it('shows the game when everything is ok', () => {
        const wordGameAppComponent = shallow(
            <WordGameApp game={{status: 'pewpew', fetchState: {inFlight: false, error: undefined}, moves: []}}/>
        );
        expect(wordGameAppComponent).to.have.exactly(1).descendants('div');
    });
});
