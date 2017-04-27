import React from 'react';
import {shallow} from 'enzyme';
import GameAddingButtons from '../../src/components/GameAddingButtons';
import {CONNECTED, CONNECTING, DISONNECTED} from '../../src/constants';

describe('game adding buttons', () => {
    it('shows loading when request is on fly', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: true, error: undefined}}
                               status={CONNECTED}/>);
        expect(buttonsComponent).to.include.text('Loading game...');
    });
    it('shows error when request is finished bad', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: false, error: {error: 'super error'}}}
                               status={CONNECTED}/>);
        expect(buttonsComponent).to.include.text('Last Game Downloading faced a problem');
    });
    it('shows buttons when request is not on fly and previous didn`t faced problems', () => {
        const buttonsComponent = shallow(
            <GameAddingButtons onNumberClick={sinon.stub()}
                               onWordClick={sinon.stub()}
                               fetchState={{inFlight: false, error: {error: 'super error'}}}
                               status={CONNECTED}/>);
        expect(buttonsComponent).to.have.exactly(2).descendants('button');
    });
    it('renders empty div when status is connecting', () =>{
        const component = shallow(
            <GameAddingButtons onNumberClick=""
                               onWordClick=""
                               status={CONNECTING}
                               fetchState=""/>
        );
        expect(component).to.have.exactly(1).descendants('div');
    });
    it('renders empty div when status is disconnected', () =>{
        const component = shallow(
            <GameAddingButtons onNumberClick=""
                               onWordClick=""
                               status={DISONNECTED}
                               fetchState=""/>
        );
        expect(component).to.have.exactly(1).descendants('div');
    });
});
