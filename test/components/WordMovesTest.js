import React from 'react';
import {shallow} from 'enzyme';
import WordMoves from '../../src/components/WordMoves';

describe('WordMoves', () => {
    it('renders', () => {
        expect(shallow(
            <WordMoves moves={[{
                correct: false,
                letterMatches: [],
                guess: 'pew'
            }]}></WordMoves>
        )).to.exist;
    });
    it('renders contained element', () => {
        expect(shallow(
            <WordMoves moves={[{
                correct: false,
                letterMatches: [],
                guess: 'pew'
            }]}></WordMoves>
        )).to.include.text('pew');
    });
    it('renders correct leters in green', () => {
        expect(shallow(
            <WordMoves moves={[{
                correct: false,
                letterMatches: [true],
                guess: 'pew'
            }]}></WordMoves>).find('span').first().hasClass('green')).to.equal(true);
    });
    it('renders incorrect leters in red', () => {
        expect(shallow(
            <WordMoves moves={[{
                guess: 'pew',
                correct: false,
                letterMatches: [false]
            }]}></WordMoves>).find('span').first().hasClass('red')).to.equal(true);
    });
});
