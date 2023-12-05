const Status = {
    'START': 'start',
    'INSTRUCTIONS': 'instructions',
    'NEW': 'new',
    'RESUME': 'resume',
    'END': 'end'
}

const Result = {
    "LOSE": false,
    "WIN": true,
}

const ActionType = {
    "CLICKED": "clicked",
    "RESET": "reset",
    "END_GAME": "end_game",
}

const MAX_TRIES = 6;
const CONTENT_ITEM_NAME = 'hang_game.content';
const WORD_ITEM_NAME = 'hang_game.word';

export {
    Status,
    Result,
    ActionType,
    MAX_TRIES,
    CONTENT_ITEM_NAME,
    WORD_ITEM_NAME,
};
