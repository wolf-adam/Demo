import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import styles from './ResultPanel.module.css';

const ResultPanel = () => {
    const { hasGameEnded, state } = useContext(GlobalContext);

    if (!hasGameEnded) return null;

    return (
        <p className={state.result ? styles.win : styles.lose}>
            {state.result ? "You won!" : "You lost!"}
        </p>
    );
};

export default ResultPanel;
