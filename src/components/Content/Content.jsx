import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import WordGuesserContainer from "./WordGuesserContainer/WordGuesserContainer";
import LetterButtonGroup from "./LetterButtonGroup/LetterButtonGroup";
import WordChooser from "./WordChooser/WordChooser";
import styles from './Content.module.css';

const Content = () => {
    const { status, word, shouldGameStart } = useContext(GlobalContext)

    if ((word && shouldGameStart) || status === Status.END) {
        return (
            <div className={styles.container}>
                <WordGuesserContainer />
                <LetterButtonGroup />
            </div>
        )

    };

    return <WordChooser />
}

export default Content;
