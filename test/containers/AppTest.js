import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/containers/App';
import GameList from '../../src/components/GameList';

describe('App', () => {
    it('renders', () => {
        expect(shallow(
            <App/>
        )).to.exist;
    });
    it('renders game list', () => {
        const app = shallow(<App/>);
        expect(app).contains.descendants(GameList);
    });
    it('adds number game when clicked on corresponding button', ()=>{
        const app = shallow(<App/>);
        app.find('.number-button').simulate('click');
        expect(app.find('.game-list')).to.contain(<GameList games={[{gameType: 'number', id: 1}]}/>);
    });
    it('adds word game when clicked on corresponding button', ()=>{
        const app = shallow(<App/>);
        app.find('.word-button').simulate('click');
        expect(app.find('.game-list')).to.contain(<GameList games={[{gameType: 'word', id: 1}]}/>);
    });
});
