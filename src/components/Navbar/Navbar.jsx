import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBox from "./FriendsBox/FriendsBox";

const Navbar = (props) => {
    return (
        <div className={styles.navDiv}>
            <div className={styles.stickyWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navbarElements}>
                        <div>
                            <NavLink to="/profile"
                                     className={(navProps) => navProps.isActive ? styles.navbarItemActive : styles.navbarItem}>Profile</NavLink>
                        </div>
                        <div>
                            <NavLink to="/messages"
                                     className={(navProps) => navProps.isActive ? styles.navbarItemActive : styles.navbarItem}>Messages</NavLink>
                        </div>
                        <div>
                            <NavLink to="/feed"
                                     className={(navProps) => navProps.isActive ? styles.navbarItemActive : styles.navbarItem}>Feed</NavLink>
                        </div>
                        <div>
                            <NavLink to="/music"
                                     className={(navProps) => navProps.isActive ? styles.navbarItemActive : styles.navbarItem}>Music</NavLink>
                        </div>
                        <div>
                            <NavLink to="/settings"
                                     className={(navProps) => navProps.isActive ? styles.navbarItemActive : styles.navbarItem}>Settings</NavLink>
                        </div>
                    </div>
                </nav>
                <FriendsBox state={props.state}/>
            </div>
        </div>
    );
}

export default Navbar;