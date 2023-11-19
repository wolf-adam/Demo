import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({
        letters: [],
    })

    return (
        <GlobalContext.Provider value={{
            state,
            setState,
        }} >
            {children}
        </GlobalContext.Provider >
    )
}

export default GlobalProvider;
