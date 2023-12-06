import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import LetterBox from "./LetterBox";
import styles from './WordGuesserContainer.module.css';

const WordGuesserContainer = () => {
    const { wordLetters } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            {wordLetters.map((letter, index) =>
                <LetterBox
                    key={`${letter}-${index}`}
                    index={index}
                    letter={letter}
                />
            )}
        </div>
    );
};

export default WordGuesserContainer;
