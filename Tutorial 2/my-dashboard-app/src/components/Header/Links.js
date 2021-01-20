import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/my-dashboard"} className={styles.Link} activeClassName={styles.LinkActive} exact>
               My Dashboard
            </NavLink>
        </>
    );
};

export default Links;