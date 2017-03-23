/**
 * Created by minhi_000 on 23.03.2017.
 */

import Game from '../src/Game';

describe("makeGuess", ()=>{
    it('return `was greater then target` if guessed > than randomed', () =>{
        let game = new Game(5);
        expect(game.makeGuess(9)).to.eql("was greater than target");
    });
    it('return `was lower then target` if guessed < than randomed', () =>{
        let game = new Game(5);
        expect(game.makeGuess(4)).to.eql("was lower than target");
    });
    it('return `was correct` if guessed === randomed', () =>{
        let game = new Game(5);
        expect(game.makeGuess(5)).to.eql("was correct");
    });
});
describe("isWin", ()=>{
   it('return false when game isn`t won', ()=>{
       let game = new Game(5);
       game.makeGuess(4);
       expect(game.isWin()).to.eql(false);
   });
   it('return true when game is won', ()=>{
       let game = new Game(5);
       game.makeGuess(5);
       expect(game.isWin()).to.eql(true);
   })
});