import {gameAdded} from '../../src/actions/index';

describe('gameAdded', () => {
    it('has inceasing game id', () => {
        const actions = [
            gameAdded('number'),
            gameAdded('number')
        ];
        expect(actions[1].payload.id).to.eq(actions[0].payload.id+1);
    });
});
