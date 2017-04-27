import React from 'react';
import {shallow} from 'enzyme';
import ConnectionComponent from '../../src/components/ConnectionComponent';
import {DISONNECTED, CONNECTED, CONNECTING} from '../../src/constants';

describe('ConnectionComponent ', () => {
    it('renders', () => {
        expect(shallow(
            <ConnectionComponent onDisconnectClick="" onConnectClick="" status=""/>
        )).to.exist;
    });
    it('calls onConnectClick when connect button pressed', () => {
        const onConnect = sinon.spy();
        const component = shallow(<ConnectionComponent onDisconnectClick=""
                                                       onConnectClick={onConnect}
                                                       status={DISONNECTED}
                                                       disconnectReason={null}/>);
        component.find('button').simulate('click');
        expect(onConnect).to.have.property('callCount', 1);
    });
    it('calls onDisconnectClick when connect button pressed', () => {
        const onDisconnect = sinon.spy();
        const component = shallow(<ConnectionComponent onDisconnectClick={onDisconnect}
                                                       onConnectClick=""
                                                       status={CONNECTED}
                                                       disconnectReason={null}/>);
        component.find('button').simulate('click');
        expect(onDisconnect).to.have.property('callCount', 1);
    });
    it('renders loading when status is connecting', () => {
        expect(shallow(
            <ConnectionComponent onDisconnectClick=""
                                 onConnectClick=""
                                 status={CONNECTING}/>
        )).to.include.text('Connecting...');
    });
    it('renders disconnect button when status is connected', () => {
        expect(shallow(
            <ConnectionComponent onDisconnectClick=""
                                 onConnectClick=""
                                 status={CONNECTED}/>
        )).to.include.text('Disconnect');
    });
    it('renders error when disconnected with a reason', () => {
        expect(shallow(
            <ConnectionComponent onDisconnectClick=""
                                 onConnectClick=""
                                 status=""
                                 disconnectReason={'problemos'}/>
        )).to.include.text('Something went wrong. Error: problemos');
    });
    it('renders connect button and input in the very beggining', () => {
        const component = shallow(
            <ConnectionComponent onDisconnectClick=""
                                 onConnectClick=""
                                 status=""/>
        );
        expect(component).to.have.exactly(1).descendants('input');
        expect(component).to.have.exactly(1).descendants('button');
        expect(component).to.include.text('Connect');
    });
    it('sets connection component state to initial when connect presed', () => {
        const component = shallow(<ConnectionComponent onDisconnectClick=""
                                                       onConnectClick={sinon.stub()}
                                                       status=""/>);
        component.find('button').simulate('click');
        expect(component.state().name).to.eql('');
    });
    it('sets connection component state to initial when disconnect pressed', () => {
        const component = shallow(<ConnectionComponent onDisconnectClick={sinon.stub()}
                                                       onConnectClick=""
                                                       status={CONNECTED}/>);
        component.find('button').simulate('click');
        expect(component.state().name).to.eql('');
    });
});
