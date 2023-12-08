import { useContext } from 'react';

import { MAX_TRIES, Status } from '../../constants/constant';
import { GlobalContext } from '../../context/Global';
import hangman from '../../data/hangman.json'
import styles from './Animation.module.css'

const Animation = () => {
    const { status, state } = useContext(GlobalContext);

    if (status === Status.START) return null;

    const isVisible = showAfterNthMiss => {
        // On start show the whole figure
        const wrongGuesses = status === Status.START ? MAX_TRIES : MAX_TRIES - state.guessesLeft;

        return showAfterNthMiss <= wrongGuesses;
    };

    return (
        <div className={styles.image}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12">
                {hangman.base.map(path => (
                    <path
                        key={path.d}
                        d={path.d}
                        visibility="visible"
                    />
                ))}
                <circle
                    cx="5" cy="4" r="1"
                    visibility={isVisible(1) ? "visible" : "hidden"}
                />
                {hangman.body.map((path, idx) => (
                    <path
                        key={path.d}
                        d={path.d}
                        visibility={isVisible(idx + 2) ? "visible" : "hidden"}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Animation;
