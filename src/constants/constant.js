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
    "SET": "set",
    "RESET": "reset",
    "END_GAME": "end_game",
}

const MAX_TRIES = 10;

export {
    Status,
    Result,
    ActionType,
    MAX_TRIES,
};
