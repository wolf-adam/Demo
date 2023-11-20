import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import './WordGuesserContainer.css';

const WordGuesserContainer = () => {
    const { state, word, hasChance, allLettersAreGuessed } = useContext(GlobalContext);

    // Create an array of the word
    const wordArray = word.split('');

    let result;
    if (hasChance && allLettersAreGuessed) result = 'You win!'
    else if (!hasChance && !allLettersAreGuessed) result = "You lost! :'("

    return (
        <div className='letter-button-group'>
            <p>{result}</p>
            {wordArray.map((letter, index) => {
                const letterIsGuessed = state.tries.find(triedLetter => triedLetter === letter)
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
    );
};

export default WordGuesserContainer;
