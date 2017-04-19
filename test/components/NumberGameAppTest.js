import React from 'react';
import {shallow} from 'enzyme';
import NumberGameApp from '../../src/components/NumberGameApp';
import {FINISHED_GAME} from '../../src/constants';

describe('Number Game App', () => {
    it('shows you won when you won and everything is ok', () => {
        const numberGameAppComponent = shallow(
            <NumberGameApp game={{status: FINISHED_GAME, fetchState: {inFlight: false, error: undefined}, moves: []}}/>
        );
        expect(numberGameAppComponent).to.include.text('You won!');
    });
    it('shows loading when request is on fly', () => {
        const numberGameAppComponent = shallow(
            <NumberGameApp game={{status: 'pewpew', fetchState: {inFlight: true, error: undefined}, moves: []}}/>
        );
        expect(numberGameAppComponent).to.include.text('Loading...');
    });
    it('shows error when request failed', () => {
        const numberGameAppComponent = shallow(
            <NumberGameApp game={{status: 'pewpew', fetchState: {inFlight: false, error: 'super error'}, moves: []}}/>
        );
        expect(numberGameAppComponent).to.include.text('Please Try Again');
    });
    it('shows the game when everything is ok', () => {
        const numberGameAppComponent = shallow(
            <NumberGameApp game={{status: 'pewpew', fetchState: {inFlight: false, error: undefined}, moves: []}}/>
        );
        expect(numberGameAppComponent).to.have.exactly(1).descendants('div');
    });
});
