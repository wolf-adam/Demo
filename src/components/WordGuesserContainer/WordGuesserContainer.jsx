import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import ResultPanel from "../ResultPanel/ResultPanel";
import './WordGuesserContainer.css';

const WordGuesserContainer = () => {
    const { wordLetters } = useContext(GlobalContext);

    return (
        <>
            <ResultPanel />
            <div className='word-letter-button-group'>
                {wordLetters.map((letter, index) =>
                )}
            </div>
        </>
    );
};

export default WordGuesserContainer;
