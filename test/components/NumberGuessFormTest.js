import React from 'react';
import {shallow} from 'enzyme';
import NumberGuessForm from '../../src/components/NumberGuessForm';

describe('NumberGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <NumberGuessForm onSubmit={sinon.stub()}/>
        )).to.exist;
    });
    it('has a div and input field', () => {
        const form = shallow(<NumberGuessForm onSubmit={sinon.stub()}/>);

        expect(form).to.have.exactly(1).descendants('input');
        expect(form).to.have.exactly(1).descendants('div');
    });
    it('calls submit when enter is pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<NumberGuessForm onSubmit={onSubmit}/>);
        form.setState({guess: '2'});
        form.find('input').simulate('keyUp', {key: 'Enter'});
        expect(onSubmit).to.have.been.calledWith(2);
    });
    it('clears state when submited', ()=> {
        const form = shallow(<NumberGuessForm onSubmit={sinon.stub()}/>);
        form.setState({guess: '3'});
        form.find('input').simulate('keyUp', {key: 'Enter'});
        expect(form.state().guess).to.equal('');
    });
});
