import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import './LetterBox.css';

const LetterBox = ({ index, letter }) => {
    const { state } = useContext(GlobalContext);

    const foundGuessedLetter = () =>
        state.guesses.find(guessedLetter => guessedLetter === letter) || '';

    return (
        <div
            className="hidden-letter-box"
            key={`hidden-letter-${index}`}
        >
            {foundGuessedLetter()}
        </div>
    );
};

export default LetterBox;
