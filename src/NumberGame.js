/**
 * Created by minhi_000 on 23.03.2017.
 */
class Game {

    constructor(number) {
        this.targetNumber = number;
        this.win = false;
    }

    makeGuess(guessNumber) {
        if (guessNumber > this.targetNumber) {
            return 'was greater than target';
        } else if (guessNumber < this.targetNumber) {
            return 'was lower than target';
        } else {
            this.win = true;
            return 'was correct';
        }
    }

    isWin() {
        return this.win;
    }
}

export default Game;
