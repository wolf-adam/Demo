import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import { Status } from "../../../constants/constant";
import styles from './ResultPanel.module.css';
import Confetti from "./Confetti";

const ResultPanel = () => {
    const { hasGameEnded, state, status } = useContext(GlobalContext);

    if (status === Status.START) return null;

    return (
        <>
            <Confetti />
            <h2 className={state.result ? styles.win : styles.lose}>
                {hasGameEnded && state.result && (
                    state.result ? "You won!" : "You lost!"
                )}
            </h2>
        </>
    )
};

export default ResultPanel;
