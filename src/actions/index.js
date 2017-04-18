const createPayloadForwardingAction = (type) => (payload) =>
    ({type: type, payload: payload});

export const GAME_ADDITION_REQUESTED = 'GAME_ADDITION_REQUESTED';
export const gameAdditionRequested = (type) => ({
    type: GAME_ADDITION_REQUESTED,
    payload: {type: type}
});

export const GAME_ADDITION_SUCCEEDED = 'GAME_ADDITION_SUCCEEDED';
export const gameAdditionSucceeded = createPayloadForwardingAction(GAME_ADDITION_SUCCEEDED);

export const GAME_ADDITION_FAILED = 'GAME_ADDITION_FAILED';
export const gameAdditionFailed = createPayloadForwardingAction(GAME_ADDITION_FAILED);

export const MOVE_ADDITION_REQUESTED = 'MOVE_ADDITION_REQUESTED';
export const moveAdditionRequested = (guess, id) => ({
    type: MOVE_ADDITION_REQUESTED,
    payload: {
        guess: guess
    }
});

export const MOVE_ADDITION_SUCCEEDED = 'MOVE_ADDITION_SUCCEEDED';
export const moveAdditionSucceeded = createPayloadForwardingAction(MOVE_ADDITION_SUCCEEDED);

export const MOVE_ADDITION_FAILED = 'MOVE_ADDITION_FAILED';
export const moveAdditionFailed = createPayloadForwardingAction(MOVE_ADDITION_FAILED);
//
// export const gameAdded = (type) => {
//     if(type === 'number') {
//         return {
//             type: GAME_ADDED,
//             payload: {
//                 gameType: type,
//                 id: nextId++,
//                 win: false,
//                 targetNumber: Math.floor(Math.random() * 10),
//                 moves: []
//             }
//         };
//     } else if (type === 'word') {
//         return {
//             type: GAME_ADDED,
//             payload: {
//                 gameType: type,
//                 id: nextId++,
//                 win: false,
//                 targetWord: WORDS[Math.floor(Math.random() * WORDS.length)],
//                 moves: []
//             }
//         };
//     }
// };
//
// export const NUMBER_GAME_GUESS = 'NUMBER_GAME_GUESS';
//
// export const numberGameGuess = (guess, id) => {
//   return {
//       type: NUMBER_GAME_GUESS,
//       payload: {
//           guess,
//           id
//       }
//   };
// };
//
// export const WORD_GAME_GUESS = 'WORD_GAME_GUESS';
//
// export const wordGameGuess = (guess, id) => {
//     return {
//         type: WORD_GAME_GUESS,
//         payload: {
//             guess,
//             id
//         }
//     };
// };
