let nextId = 0;
const WORDS = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

export const GAME_ADDED = 'GAME_ADDED';

export const gameAdded = (type) => {
    if(type === 'number') {
        return {
            type: GAME_ADDED,
            payload: {
                gameType: type,
                id: nextId++,
                win: false,
                targetNumber: Math.floor(Math.random() * 10),
                moves: []
            }
        };
    }
    else if (type === 'word'){
        return {
            type: GAME_ADDED,
            payload: {
                gameType: type,
                id: nextId++,
                win: false,
                targetWord: WORDS[Math.floor(Math.random() * WORDS.length)],
                moves: []
            }
        };
    }
};

export const NUMBER_GAME_GUESS = 'NUMBER_GAME_GUESS';

export const numberGameGuess = (guess,id) => {
  return {
      type: NUMBER_GAME_GUESS,
      payload: {
          guess,
          id
      }
  }
};

export const WORD_GAME_GUESS = 'WORD_GAME_GUESS';

export const wordGameGuess = (guess,id) => {
    return {
        type: WORD_GAME_GUESS,
        payload: {
            guess,
            id
        }
    }
};
