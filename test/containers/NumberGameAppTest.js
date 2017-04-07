import React from 'react';
import {shallow} from 'enzyme';

import NumberGameApp from '../../src/components/NumberGameApp';
import NumberMoves from '../../src/components/NumberMoves';
import NumberGuessForm from '../../src/components/NumberGuessForm';

describe('NumberGameApp', () => {
    it('initially renders empty', () => {
        expect(shallow(<NumberGameApp/>)).to.contain(<NumberMoves moves={[]}/>);
    });
    it('renders guess form', () => {
        expect(shallow(<NumberGameApp/>)).to.contain.descendants(NumberGuessForm);
    });
    it('adds new move when submitted', () => {
        const app = shallow(<NumberGameApp/>);

        app.find(NumberGuessForm).props().onSubmit({guess: -1});
        expect(app).to.contain(
            <NumberMoves moves={[{
                id: 1,
                guess: -1,
                text: 'was lower than target'
            }]}/>
        );
    });
    it('shows win when you guess the right number', ()=>{
       const app = shallow(<NumberGameApp/>);
       const input = app.find(NumberGuessForm);

       for(let i=0; i<10; i++) {
           input.props().onSubmit({guess: i});
       }
       expect(app.find('p')).to.include.text('You won!');
    });
});
