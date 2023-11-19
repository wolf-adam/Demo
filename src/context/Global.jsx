import { createContext, useReducer, useState } from "react";
import { Status } from "../constants/constant";
import alphabet from '../data/alphabet.json'

export const GlobalContext = createContext();

const reducer = (state, action) => {
    if (action.type === 'clicked') {
        const index = state.letters.findIndex(element => element.value === action.value)

        // Modify state
        state.letters[index].clicked = true;

        return {
            letters: [
                ...state.letters,
            ]
        };
    }
    throw Error('Unknown action.');
}

const GlobalProvider = ({ children }) => {
    const letters = alphabet;
    const enhancedLetters = letters.map(letter => ({ value: letter, clicked: false }))
    const [state, dispatch] = useReducer(reducer, {
        letters: enhancedLetters
    })
    // TODO: Get default status from localStorage
    const [status, setStatus] = useState(Status.START)

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch,
            status,
            setStatus,
        }} >
            {children}
        </GlobalContext.Provider >
    )
}

export default GlobalProvider;
