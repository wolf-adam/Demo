import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import words from '../../data/hangman_words.json'
import LetterButton from "../common/LetterButton/LetterButton";
import './WordChooser.css';

const WordChooser = () => {
    const wordsLength = [...new Set(words.map(word => word.length))];
    const { setWord, setStatus } = useContext(GlobalContext);

    return (
        <div className='letter-button-group'>
            {wordsLength.map(length => (
                <LetterButton
                    key={length}
                    text={length}
                    onClick={() => {
                        // TODO: Randomly select a word
                        setWord(words.find(word => word.length === length));
                        setStatus(Status.NEW_GAME);
                    }}
                />
            ))}
        </div>
    );
};

export default WordChooser;
