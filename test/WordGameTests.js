import WordGame from '../src/WordGame';

describe('word isWin', () => {
    it('return false when game isn`t won', () => {
        let game = new WordGame('test');
        game.makeGuess('pew');
        expect(game.isWin()).to.eql(false);
    });
    it('return true when game is won', () => {
        let game = new WordGame('test');
        game.makeGuess('test');
        expect(game.isWin()).to.eql(true);
    });
});

describe('word makeGuess', () => {
    it('assign true to win if game is winned', () => {
        let game = new WordGame('test');
        game.makeGuess('test');
        expect(game.isWin()).to.eql(true);
    });
    it('returns matched letters if there was some', () =>{
        let game = new WordGame('test');
        expect(game.makeGuess('t').length).to.eql(1);
    });
});
