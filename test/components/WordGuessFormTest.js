import React from 'react';
import {shallow} from 'enzyme';
import WordGuessForm from '../../src/components/WordGuessForm';

describe('WordGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <WordGuessForm onSubmit={sinon.stub()}/>
        )).to.exist;
    });
    it('has a div and input field', () => {
        const form = shallow(<WordGuessForm onSubmit={sinon.stub()}/>);

        expect(form).to.have.exactly(1).descendants('input');
        expect(form).to.have.exactly(1).descendants('div');
    });
    it('calls submit when enter is pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<WordGuessForm onSubmit={onSubmit}/>);
        form.setState({guess: 'p'});
        form.find('input').simulate('keyUp', {key: 'Enter'});
        expect(onSubmit).to.have.been.calledWith('p');
    });
    it('clears state when submited', ()=> {
        const form = shallow(<WordGuessForm onSubmit={sinon.stub()}/>);
        form.setState({guess: 'p'});
        form.find('input').simulate('keyUp', {key: 'Enter'});
        expect(form.state().guess).to.equal('');
    });
});
