import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import { ActionType } from "../../../constants/constant";
import LetterButton from "../../common/LetterButton/LetterButton";
import styles from './LetterButtonGroup.module.css';

const LetterButtonGroup = () => {
    const { state, wordLetters, dispatch } = useContext(GlobalContext);

    const onClickHandler = letter => {
        if (!letter.clicked)
            dispatch({
                type: ActionType.CLICKED,
                value: {
                    letter: letter.value,
                    wordLetters
                }
            })
    }

    return (
        <div className={styles.container}>
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
