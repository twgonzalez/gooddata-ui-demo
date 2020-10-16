import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Home
            </NavLink>
            <NavLink to={"/my-dashboard"} className={styles.Link} activeClassName={styles.LinkActive} exact>
               My Dashboard
            </NavLink>
        </>
    );
};

export default Links;
