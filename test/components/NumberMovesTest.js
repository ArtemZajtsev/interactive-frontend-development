import React from 'react';
import {shallow, render} from 'enzyme';
import NumberMoves from '../../src/components/NumberMoves'

describe('NumberMoves', () => {
    it('renders', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                id: 1,
                text: 'was correct'
            }]}></NumberMoves>
        )).to.exist;
    });
    it('renders contained element', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                id: 1,
                text: 'was correct'
            }]}></NumberMoves>
        )).to.include.text('was correct');
    });
    it('has green color if text == was correct', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                id: 1,
                text: 'was correct'
            }]}></NumberMoves>).find('p').hasClass('green')).to.equal(true);
    });
    it('has red color if text != was correct', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                id: 1,
                text: 'test'
            }]}></NumberMoves>).find('p').hasClass('red')).to.equal(true);
    });
});