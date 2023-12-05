import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import WordGuesserContainer from "./WordGuesserContainer/WordGuesserContainer";
import LetterButtonGroup from "./LetterButtonGroup/LetterButtonGroup";
import WordChooser from "./WordChooser/WordChooser";
import ResultPanel from "./ResultPanel/ResultPanel";

const Content = () => {
    const { status, word, shouldGameStart } = useContext(GlobalContext)

    if ((word && shouldGameStart) || status === Status.END) {
        return (
            <>
                <ResultPanel />
                <WordGuesserContainer />
                <LetterButtonGroup />
            </>
        )
    } else if (status === Status.START) {
        return <WordChooser />
    }

    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </>
    )
};

export default Content;
