import React from 'react';
import {shallow} from 'enzyme';

import WordGameApp from '../../src/containers/WordGameApp';
import WordMoves from '../../src/components/WordMoves';
import WordGuessForm from '../../src/components/WordGuessForm';
import {WORDS} from '../../src/WordGame';

describe('WordGameApp', () => {
    it('initially renders empty', () => {
        expect(shallow(<WordGameApp/>)).to.contain(<WordMoves moves={[]}/>);
    });
    it('renders guess form', () => {
        expect(shallow(<WordGameApp/>)).to.contain.descendants(WordGuessForm);
    });
    it('adds new move when submitted', () => {
        const app = shallow(<WordGameApp/>);

        app.find(WordGuessForm).props().onSubmit({guess: 'z'});
        expect(app).to.contain(
            <WordMoves moves={[{
                correct: [],
                id: 1,
                guess: 'z',
            }]}/>
        );
    });
    it('shows win when you guess the right number', ()=>{
       const app = shallow(<WordGameApp/>);
       const input = app.find(WordGuessForm);

        for(let i = 0; i< WORDS.length; i++) {
            input.props().onSubmit({guess: WORDS[i]});
        }

       expect(app.find('p')).to.include.text('You won!');
    });
});
