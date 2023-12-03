import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import "./Navbar.css"

const NavBar = () => {
    const { status, setStatus } = useContext(GlobalContext)

    return (
        <div className="navbar">
            <div className="navbar-item" onClick={() => setStatus(Status.INSTRUCTIONS)}>
                <p>
                    {status === Status.NEW && "instructions ->".toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default NavBar;
