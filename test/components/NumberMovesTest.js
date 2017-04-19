import React from 'react';
import {shallow} from 'enzyme';
import NumberMoves from '../../src/components/NumberMoves';
import {EQ, EQT, GT, GTT, LT, LTT} from '../../src/constants'

describe('NumberMoves', () => {
    it('renders', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: EQ
            }]}></NumberMoves>
        )).to.exist;
    });
    it('renders contained element', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: EQ
            }]}></NumberMoves>
        )).to.include.text(EQT);
    });
    it('has green color if EQ', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: EQ
            }]}></NumberMoves>).find('p').hasClass('green')).to.equal(true);
    });
    it('has red color if text != was correct', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: GT
            }]}></NumberMoves>).find('p').hasClass('red')).to.equal(true);
    });
    it('shows was correct is guess was correct', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: EQ
            }]}></NumberMoves>
        )).to.include.text(EQT);
    });
    it('shows was greater then if guess was greater then actual', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: GT
            }]}></NumberMoves>
        )).to.include.text(GTT);
    });
    it('shows was lower then if guess was lower then actual', () => {
        expect(shallow(
            <NumberMoves moves={[{
                guess: 'test',
                comparedToAnswer: LT
            }]}></NumberMoves>
        )).to.include.text(LTT);
    });
});
