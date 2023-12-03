import { createContext, useEffect, useReducer, useState } from "react";
import { MAX_TRIES, Result, Status } from "../constants/constant";
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

        return {
            letters: [
                ...state.letters,
            ],
            guesses: [
                ...state.guesses,
                action.value.letter
            ],
            guessesLeft,
            result: state.result
        };
    }
    if (action.type === ActionType.END_GAME) {
        return {
            letters: setAllButtonClicked(true),
            guesses: action.value.uniqueLetters,
            guessesLeft: state.guessesLeft,
            result: action.value.result
        };
    }
    if (action.type === ActionType.RESET) {
        return {
            letters: setAllButtonClicked(false),
            guesses: [],
            guessesLeft: MAX_TRIES,
            result: Result.LOSE,
        };
    }
    if (action.type === ActionType.SET) {
    }
    throw Error('Unknown action.');
}

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const enhancedLetters = alphabet.map(letter => ({ value: letter, clicked: false }))
    const [state, dispatch] = useReducer(reducer, {
        letters: enhancedLetters,
        guesses: [],
        guessesLeft: MAX_TRIES,
        result: Result.LOSE,
    })
    const [status, setStatus] = useState(Status.START)
    const [word, setWord] = useState('')

    // Set values from localStorage

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

    const areAllLettersGuessed = () => {
        if (!uniqueLetters.length) return false;

        // Check unique word letters if they are already guessed or not
        const boolLettersArray = uniqueLetters.map(letter => state.guesses.includes(letter))

        return boolLettersArray.every(boolValue => boolValue === true);
    }

    const guessedWordCorrectly = state.guessesLeft && areAllLettersGuessed();
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
