import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import './ResultPanel.css';

const ResultPanel = () => {
    const { hasChance, allLettersAreGuessed } = useContext(GlobalContext);

    // TODO: Outsource logic here
    let result;
    let className = "win";
    if (hasChance && allLettersAreGuessed) result = "You won!"
    else if (!hasChance && !allLettersAreGuessed) {
        result = "You lost!"
        className = "lose";
    }

    if (!result) return null;

    return <p className={className}>{result}</p>;
};

export default ResultPanel;
