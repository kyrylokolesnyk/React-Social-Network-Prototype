import React from "react";
import styles from './Header.module.css';
import logo_color from "../../logo_color.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo_color} alt="logo"/>
        </header>
    );
}

export default Header;