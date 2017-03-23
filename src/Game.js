/**
 * Created by minhi_000 on 23.03.2017.
 */
class Game {

    constructor() {
        this.targetNumber = Math.floor(Math.random()*10);
    }

    makeGuess(number){
        if(number > this.targetNumber){
            return "was greater than target";
        }
        else if (number < this.targetNumber){
            return "was lower than target";
        }
        else return "was correct";
    }
}

export default Game;