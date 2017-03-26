class WordGame {

    constructor() {
        this.wordsArray = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
        this.targetWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.win = false;
    }

    makeGuess(guessString) {
        let matches = [];
        if (guessString === this.targetWord) {
            this.win = true;
        }
        for (let i = 0; i < guessString.length; i++) {
            if (guessString[i] === this.targetWord[i]) {
                matches.push(i);
            }
        }


        return matches;
    }

    isWin() {
        return this.win;
    }
}

export default WordGame;
