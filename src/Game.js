/**
 * Created by minhi_000 on 23.03.2017.
 */
class Game {

    constructor(number) {
        this.targetNumber = number;
    }

    makeGuess(guessNumber){
        if(guessNumber > this.targetNumber){
            return "was greater than target";
        }
        else if (guessNumber < this.targetNumber){
            return "was lower than target";
        }
        else return "was correct";
    }
}

export default Game;