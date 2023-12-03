import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import ResultPanel from "../ResultPanel/ResultPanel";
import LetterBox from "./LetterBox";
import './WordGuesserContainer.css';

const WordGuesserContainer = () => {
    const { wordLetters } = useContext(GlobalContext);

    return (
        <>
            <ResultPanel />
            <div className='word-letter-button-group'>
                {wordLetters.map((letter, index) =>
                    <LetterBox
                        key={`${letter}-${index}`}
                        index={index}
                        letter={letter}
                    />
                )}
            </div>
        </>
    );
};

export default WordGuesserContainer;
