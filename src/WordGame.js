class WordGame {

    constructor() {
        this.wordsArray = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
        this.targetWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.win = false;
    }

    makeGuess(guessString) {
        let regex = new RegExp(guessString, 'g');
        if (regex.test(this.targetWord)) {
            if (guessString === this.targetWord) {
                this.win = true;
            }
            else {
                let matches = [];
                let match = regex.exec(this.targetWord);
                while (match != null) {
                    matches.push(match);
                    match = regex.exec(this.targetWord);
                }
                return matches;
            }
        } else return false;
    }

    isWin() {
        return this.win;
    }
}

export default WordGame;
// var myString = "pewpewpew";
// var matches = [];
// var myRegexp = /p/g;
// match = myRegexp.exec(myString);
// while (match != null) {
//     // matched text: match[0]
//     // match start: match.index
//     // capturing group n: match[n]
//     matches.push(match);
//     match = myRegexp.exec(myString);
// }
// console.log(matches)