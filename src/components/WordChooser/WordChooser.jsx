import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import wordsFromFile from '../../data/hangman_words.json'
import LetterButton from "../common/LetterButton/LetterButton";
import './WordChooser.css';

const WordChooser = () => {
    const wordsLength = [...new Set(wordsFromFile.map(word => word.length))];
    const { word, setWord } = useContext(GlobalContext);

    const getRandomWord = length => {
        const filteredWordsArray = wordsFromFile.filter(word => word.length === length)
        const randomIndex = Math.floor(Math.random() * filteredWordsArray.length)

        return filteredWordsArray[randomIndex];
    }

    return (
        <div className='letter-button-group'>
            {wordsLength.map(length => (
                <LetterButton
                    key={length}
                    selected={word.length === length}
                    text={length}
                    onClick={() => setWord(getRandomWord(length))}
                />
            ))}
        </div>
    );
};

export default WordChooser;
