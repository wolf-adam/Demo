import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import styles from "./Navbar.module.css"

const NavBar = () => {
    const { setStatus, shouldGameStart: showNavbar } = useContext(GlobalContext)

    return (
        <div className={styles.container}>
            <div className={styles.item} onClick={() => setStatus(Status.INSTRUCTIONS)}>
                <p>
                    {showNavbar && "instructions ->".toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default NavBar;
