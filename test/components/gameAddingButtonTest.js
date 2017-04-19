import React from 'react';
import {shallow} from 'enzyme';
import GameAddingButtons from '../../src/components/GameAddingButtons';

describe('game adding buttons', () => {
    it('shows loading when request is on fly', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: true, error: undefined}}/>);
        expect(buttonsComponent).to.include.text('Loading game...');
    });
    it('shows error when request is finished bad', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: false, error: {error:'super error'}}}/>);
        expect(buttonsComponent).to.include.text('Last Game Downloading faced a problem')
    });
    it('shows buttons when request is not on fly and previous didn`t faced problems', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: false, error: {error:'super error'}}}/>);
        expect(buttonsComponent).to.have.exactly(2).descendants('button');
    });
});