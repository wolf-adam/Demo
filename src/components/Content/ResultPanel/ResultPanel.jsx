import { useContext } from "react";

import { GlobalContext } from "../../../context/Global";
import './ResultPanel.css';

const ResultPanel = () => {
    const { hasGameEnded, state } = useContext(GlobalContext);

    if (!hasGameEnded) return null;

    return <p className={state.result ? 'win' : 'lose'}>{state.result ? "You won!" : "You lost!"}</p>;
};

export default ResultPanel;
