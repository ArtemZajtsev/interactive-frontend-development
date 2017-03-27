import React from 'react';
import {shallow, render} from 'enzyme';
import GameList from '../../src/components/GameList';

describe('GameList', () => {
    it('renders', () => {
        expect(shallow(
            <GameList games={['number', 'word']}/>
        )).to.exist;
    });
    it('render contained number game', () => {
        const form = render(<GameList games={[{gameType: 'number'}]}/>);
        expect(form.find('h2')).to.include.text('Number Guess Game');
    });
    it('render contained word game', () => {
        const form = render(<GameList games={[{gameType: 'word'}]}/>);
        expect(form.find('h2')).to.include.text('Word Guess Game');
    });
});