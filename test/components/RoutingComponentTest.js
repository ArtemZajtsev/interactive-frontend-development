import {shallow} from 'enzyme';
import React from 'react';
import RoutingComponent from '../../src/components/RoutingComponent';
import {CONNECTED} from '../../src/constants';

describe('RoutingComponent ', () => {
    it('renders', () => {
        expect(shallow(
            <RoutingComponent status=""/>
        )).to.exist;
    });
    it('renders list when status is connected', () =>{
       expect(shallow(
           <RoutingComponent status={CONNECTED}/>
       )).to.have.exactly(1).descendants('ul');
    });
    it('renders empty div when status is not connected', () => {
        expect(shallow(
            <RoutingComponent status=""/>
        )).to.have.exactly(1).descendants('div');
    });
});
