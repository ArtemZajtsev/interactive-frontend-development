let nextId = 0;

export const GAME_ADDED = 'GAME_ADDED';

export const gameAdded = (type) => {
    return {
        type: GAME_ADDED,
        newGame: {
            gameType: type,
            id: nextId++
        }
    };
};
