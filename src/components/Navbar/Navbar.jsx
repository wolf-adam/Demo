import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import "./Navbar.css"

const NavBar = () => {
    const { status, setStatus } = useContext(GlobalContext)

    const text = "instructions ->"

    if (status !== Status.NEW_GAME) return null;
    return (
        <div className="navbar">
            <div className="navbar-item" onClick={() => setStatus(Status.INSTRUCTIONS)}>
                {text.toUpperCase()}
            </div>
        </div>
    );
};

export default NavBar;
