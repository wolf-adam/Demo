import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import wordsFromFile from '../../data/hangman_words.json'
import LetterButton from "../common/LetterButton/LetterButton";
import './WordChooser.css';

const WordChooser = () => {
    const wordsLength = [...new Set(wordsFromFile.map(word => word.length))];
    const { setWord } = useContext(GlobalContext);

    return (
        <div className='letter-button-group'>
            {wordsLength.map(length => (
                <LetterButton
                    key={length}
                    text={length}
                    onClick={() => {
                        // TODO: Randomly select a word
                        setWord(wordsFromFile.find(word => word.length === length));
                    }}
                />
            ))}
        </div>
    );
};

export default WordChooser;
