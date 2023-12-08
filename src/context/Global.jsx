import { createContext, useEffect, useReducer, useState } from "react";
import {
    ActionType,
    Result,
    Status,
    MAX_TRIES,
    CONTENT_ITEM_NAME,
    WORD_ITEM_NAME,
} from "../constants/constant";
import { makeUniqueArray } from "../utils";
import alphabet from '../data/alphabet.json'

const reducer = (state, action) => {
    const setAllButtonClicked = (clicked) => state.letters.map(element => ({
        value: element.value,
        clicked
    }));

    if (action.type === ActionType.CLICKED) {
        const index = state.letters.findIndex(element => element.value === action.value.letter)

        // Disable clicked letter's box
        state.letters[index].clicked = true;

        // Check if the letter can be found inside the word
        let guessesLeft;
        if (action.value.wordLetters.includes(action.value.letter)) guessesLeft = state.guessesLeft;
        else guessesLeft = state.guessesLeft - 1;

        const setObject = {
            letters: [
                ...state.letters,
            ],
            guesses: [
                ...state.guesses,
                action.value.letter
            ],
            guessesLeft,
            result: state.result
        }

        // Update local storage also
        localStorage.setItem(CONTENT_ITEM_NAME, JSON.stringify(setObject))

        return setObject;
    }
    if (action.type === ActionType.END_GAME) {
        // Clear local storage
        localStorage.clear()

        return {
            letters: setAllButtonClicked(true),
            guesses: action.value.uniqueLetters,
            guessesLeft: state.guessesLeft,
            result: action.value.result
        };
    }
    if (action.type === ActionType.RESET) {
        // Clear local storage
        localStorage.clear()

        return {
            letters: setAllButtonClicked(false),
            guesses: [],
            guessesLeft: MAX_TRIES,
            result: Result.LOSE,
        };
    }
    throw Error('Unknown action.');
}

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // Get word and state from local storage and set them (if they exist)
    const storageWord = localStorage.getItem(WORD_ITEM_NAME);
    const storageState = JSON.parse(localStorage.getItem(CONTENT_ITEM_NAME));

    const enhancedLetters = alphabet.map(letter => ({ value: letter, clicked: false }))
    const defaultState = {
        letters: enhancedLetters,
        guesses: [],
        guessesLeft: MAX_TRIES,
        result: Result.LOSE,
    };

    const [state, dispatch] = useReducer(reducer, storageState || defaultState)
    const [status, setStatus] = useState(storageWord ? Status.RESUME : Status.START)
    const [word, setWord] = useState(storageWord || '')

    // Check if every letter is guesssed
    const wordLetters = word.split('');
    const uniqueLetters = makeUniqueArray(wordLetters)

    useEffect(() => {
        // User gave up game
        if (status === Status.END)
            dispatch({
                type: ActionType.END_GAME, value: {
                    result: Result.LOSE,
                    uniqueLetters
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    const haveAllLettersBeenGuessed = () => {
        if (!uniqueLetters.length) return false;

        // Check unique word letters if they are already guessed or not
        const boolLettersArray = uniqueLetters.map(letter => state.guesses.includes(letter))

        return boolLettersArray.every(boolValue => boolValue === true);
    }

    const guessedWordCorrectly = !!state.guessesLeft && haveAllLettersBeenGuessed();
    const hasGameEnded = !state.guessesLeft || guessedWordCorrectly;

    // Check if there are any guess opportunities left or the game should end
    useEffect(() => {
        // Check if word was selected
        // AND user did not give up
        if (word.length !== 0 && status !== Status.END && hasGameEnded) {
            dispatch({
                type: ActionType.END_GAME, value: {
                    result: guessedWordCorrectly,
                    uniqueLetters
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasGameEnded]);

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch,
            status,
            setStatus,
            shouldGameStart: status === Status.NEW || status === Status.RESUME,
            word,
            setWord,
            wordLetters,
            hasGameEnded,
        }} >
            {children}
        </GlobalContext.Provider >
    )
}

export default GlobalProvider;
