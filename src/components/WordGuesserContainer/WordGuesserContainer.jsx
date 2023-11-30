import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import ResultPanel from "../ResultPanel/ResultPanel";
import './WordGuesserContainer.css';

const WordGuesserContainer = () => {
    const { state, wordArray } = useContext(GlobalContext);

    return (
        <>
            <ResultPanel />
            <div className='word-letter-button-group'>
                {wordArray.map((letter, index) => {
                    const letterIsGuessed = state.guesses.find(triedLetter => triedLetter === letter)
                    const content = letterIsGuessed ? letter : '';

                    return (
                        <div
                            className="hidden-letter-box"
                            key={`hidden-letter-${index}`}
                        >
                            {content}
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default WordGuesserContainer;
