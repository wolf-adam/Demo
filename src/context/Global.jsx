import { createContext, useEffect, useReducer, useState } from "react";
import { MAX_TRIES, Status } from "../constants/constant";
import { makeUniqueArray } from "../utils";
import alphabet from '../data/alphabet.json'

const reducer = (state, action) => {
    if (action.type === 'clicked') {
        const index = state.letters.findIndex(element => element.value === action.value)

        // Modify state
        state.letters[index].clicked = true;

        return {
            letters: [
                ...state.letters,
            ],
            guesses: [
                ...state.guesses,
                action.value
            ]
        };
    }
    if (action.type === 'end_game') {
        const resetedLetters = state.letters.map(element => ({
            value: element.value,
            clicked: true
        }))

        return {
            letters: resetedLetters,
            guesses: action.value,
        };
    }
    if (action.type === 'reset') {
        const resetedLetters = state.letters.map(element => ({
            value: element.value,
            clicked: false
        }))

        return {
            letters: resetedLetters,
            guesses: []
        };
    }
    throw Error('Unknown action.');
}

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const letters = alphabet;
    const enhancedLetters = letters.map(letter => ({ value: letter, clicked: false }))
    /** 
     * TODO: 
     *  - add 'gaveUp' boolean to better UX(?)
     * */
    const [state, dispatch] = useReducer(reducer, {
        letters: enhancedLetters,
        guesses: [],
    })
    // TODO: Get default status from localStorage
    const [status, setStatus] = useState(Status.START)
    const [word, setWord] = useState('')

    // Calculate if there is more guessing available
    const hasChance = state.guesses.length < MAX_TRIES;

    // Check if every letter is guesssed
    const wordArray = word.split('');
    const uniqueWordArray = makeUniqueArray(wordArray)
    const boolWordArray = uniqueWordArray.map(letter => state.guesses.includes(letter))
    const allLettersAreGuessed = boolWordArray.every(boolValue => boolValue === true)

    useEffect(() => {
        if (word.length !== 0 && (!hasChance || allLettersAreGuessed)) {
            dispatch({ type: 'end_game', value: uniqueWordArray })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasChance]);

    useEffect(() => {
        if (status === Status.END) dispatch({ type: 'end_game', value: uniqueWordArray })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch,
            status,
            setStatus,
            word,
            wordArray,
            setWord,
            hasChance,
            allLettersAreGuessed
        }} >
            {children}
        </GlobalContext.Provider >
    )
}

export default GlobalProvider;
