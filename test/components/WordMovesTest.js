import React from 'react'
import {shallow, render} from 'enzyme';
import WordMoves from '../../src/components/WordMoves'

describe('WordMoves', () => {
    it('renders', () => {
        expect(shallow(
            <WordMoves moves={[{
                guess: 'test',
                id: 1,
                correct: []
            }]}></WordMoves>
        )).to.exist;
    });
    it('renders contained element', () => {
        expect(shallow(
            <WordMoves moves={[{
                guess: 'test',
                id: 1,
                correct: []
            }]}></WordMoves>
        )).to.include.text('test');
    });
    it('renders correct leters in green', () => {
        expect(shallow(
            <WordMoves moves={[{
                guess: 'test',
                id: 1,
                correct: [0]
            }]}></WordMoves>).find('span').first().hasClass('green')).to.equal(true);
    });
    it('renders incorrect leters in red', () => {
        expect(shallow(
            <WordMoves moves={[{
                guess: 'test',
                id: 1,
                correct: [3]
            }]}></WordMoves>).find('span').first().hasClass('red')).to.equal(true);
    });
});