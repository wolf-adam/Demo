import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import "./Navbar.css"

const NavBar = () => {
    const { status, setStatus } = useContext(GlobalContext)

    const showNavbar = status === Status.NEW || status === Status.RESUME;

    return (
        <div className="navbar">
            <div className="navbar-item" onClick={() => setStatus(Status.INSTRUCTIONS)}>
                <p>
                    {showNavbar && "instructions ->".toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default NavBar;
