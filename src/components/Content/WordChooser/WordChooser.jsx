import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import { MAX_TRIES, WORD_ITEM_NAME } from "../../../constants/constant";
import { makeUniqueArray } from "../../../utils";
import wordsFromFile from '../../../data/hangman_words.json'
import LetterButton from "../../common/LetterButton/LetterButton";
import styles from './WordChooser.module.css';

const WordChooser = () => {
    const { word, setWord } = useContext(GlobalContext);
    const wordsLength = makeUniqueArray(wordsFromFile.map(word => word.length));

    // This should happen on the BE, so player's won't be able to know the selected word
    const setRandomWordByLength = length => {
        const filteredWordsArray = wordsFromFile.filter(word => word.length === length)
        const randomIndex = Math.floor(Math.random() * filteredWordsArray.length)

        const selectedWord = filteredWordsArray[randomIndex]
        localStorage.setItem(WORD_ITEM_NAME, selectedWord)
        setWord(selectedWord);
    }

    return (
        <div className={styles.container}>
            <h2>Choose how long word you would like to guess</h2>
            <div className={styles.letter_group}>
                {wordsLength.map(length => (
                    <LetterButton
                        key={length}
                        selected={word.length === length}
                        text={length}
                        onClick={() => setRandomWordByLength(length)}
                    />
                ))}
            </div>
            {word && (
                <div className={styles.description}>
                    <p>Random word was selected.</p>
                    <p>{`You can have ${MAX_TRIES} wrong gueeses before the game ends.`}</p>
                    <p> Good luck!</p>
                </div>
            )}
        </div>
    );
};

export default WordChooser;
