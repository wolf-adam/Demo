import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import WordGuesserContainer from "../WordGuesserContainer/WordGuesserContainer";
import WordChooser from "../WordChooser/WordChooser";
import LetterButtonGroup from "../LetterButtonGroup/LetterButtonGroup";

const Content = () => {
    const { status } = useContext(GlobalContext)

    switch (status) {
        case Status.START:
            return <WordChooser />
        case Status.INSTRUCTIONS:
            return <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </>
        default:
            return (
                <>
                    <WordGuesserContainer />
                    <LetterButtonGroup />
                </>
            );
    }
};

export default Content;
