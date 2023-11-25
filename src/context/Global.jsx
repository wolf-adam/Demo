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
            tries: [
                ...state.tries,
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
            tries: state.tries,
        };
    }
    if (action.type === 'reset') {
        const resetedLetters = state.letters.map(element => ({
            value: element.value,
            clicked: false
        }))

        return {
            letters: resetedLetters,
            tries: []
        };
    }
    throw Error('Unknown action.');
}

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const letters = alphabet;
    const enhancedLetters = letters.map(letter => ({ value: letter, clicked: false }))
    // TODO: Change tries to guesses
    const [state, dispatch] = useReducer(reducer, {
        letters: enhancedLetters,
        tries: [],
    })
    // TODO: Get default status from localStorage
    const [status, setStatus] = useState(Status.START)
    const [word, setWord] = useState('')

    // Calculate if there is more guessing available
    const hasChance = state.tries.length < MAX_TRIES;

    // Check if every letter is guesssed
    const wordArray = word.split('');
    const uniqueWordArray = makeUniqueArray(wordArray)
    const boolWordArray = uniqueWordArray.map(letter => state.tries.includes(letter))
    const allLettersAreGuessed = boolWordArray.every(boolValue => boolValue === true)

    useEffect(() => {
        if (word.length !== 0 && (!hasChance || allLettersAreGuessed)) dispatch({ type: 'end_game' })
    }, [state.tries]);

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
