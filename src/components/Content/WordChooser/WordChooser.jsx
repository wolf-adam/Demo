import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import { WORD_ITEM_NAME } from "../../../constants/constant";
import { makeUniqueArray } from "../../../utils";
import wordsFromFile from '../../../data/hangman_words.json'
import LetterButton from "../../common/LetterButton/LetterButton";
import './WordChooser.css';

const WordChooser = () => {
    const { word, setWord } = useContext(GlobalContext);
    const wordsLength = makeUniqueArray(wordsFromFile.map(word => word.length));

    // This should happen on the BE, so user's won't be able to know the selected word
    const setRandomWordByLength = length => {
        const filteredWordsArray = wordsFromFile.filter(word => word.length === length)
        const randomIndex = Math.floor(Math.random() * filteredWordsArray.length)

        const selectedWord = filteredWordsArray[randomIndex]
        localStorage.setItem(WORD_ITEM_NAME, selectedWord)
        setWord(selectedWord);
    }

    return (
        <div className='letter-button-group'>
            {wordsLength.map(length => (
                <LetterButton
                    key={length}
                    selected={word.length === length}
                    text={length}
                    onClick={() => setRandomWordByLength(length)}
                />
            ))}
        </div>
    );
};

export default WordChooser;
