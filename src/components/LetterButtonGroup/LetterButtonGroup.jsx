import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import LetterButton from "../common/LetterButton/LetterButton";
import './LetterButtonGroup.css';

const LetterButtonGroup = () => {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className='letter-button-group'>
            {state.letters.map(letter => (
                <LetterButton
                    key={letter.value}
                    text={letter.value}
                    onClick={() => {
                        if (!letter.clicked)
                            dispatch({ type: 'clicked', value: letter.value })
                    }}
                    disabled={letter.clicked}
                    isLetter
                />
            ))}
        </div>
    );
};

export default LetterButtonGroup;
