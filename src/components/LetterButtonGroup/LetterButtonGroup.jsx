import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import LetterButton from "../common/LetterButton/LetterButton";
import './LetterButtonGroup.css';

const LetterButtonGroup = () => {
    const { state, wordLetters, dispatch } = useContext(GlobalContext);

    const onClickHandler = letter => {
        if (!letter.clicked)
            dispatch({ type: 'clicked', value: { letter: letter.value, wordLetters } })
    }

    return (
        <div className='letter-button-group'>
            {state.letters.map(letter => (
                <LetterButton
                    key={letter.value}
                    text={letter.value}
                    onClick={() => onClickHandler(letter)}
                    disabled={letter.clicked}
                    isLetter
                />
            ))}
        </div>
    );
};

export default LetterButtonGroup;
