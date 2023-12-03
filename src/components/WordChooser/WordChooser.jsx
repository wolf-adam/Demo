import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { makeUniqueArray } from "../../utils";
import wordsFromFile from '../../data/hangman_words.json'
import LetterButton from "../common/LetterButton/LetterButton";
import './WordChooser.css';

const WordChooser = () => {
    const { word, setWord } = useContext(GlobalContext);
    const wordsLength = makeUniqueArray(wordsFromFile.map(word => word.length));

    const setRandomWordByLength = length => {
        const filteredWordsArray = wordsFromFile.filter(word => word.length === length)
        const randomIndex = Math.floor(Math.random() * filteredWordsArray.length)

        setWord(filteredWordsArray[randomIndex]);
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
