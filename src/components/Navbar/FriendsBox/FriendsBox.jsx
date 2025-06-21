import React from "react";
import styles from "./FriendsBox.module.css";
import FriendsBoxIcon from "./FriendsBoxIcon/FriendsBoxIcon";

const FriendsBox = (props) => {
    let iconElements = props.state.friendsData.map(f => <FriendsBoxIcon name={f.name} pfpLink={f.pfpLink}/>);

    return (
        <div className={styles.friendsBoxContainer}>
            <h3>Friends</h3>
            <div className={styles.friendsBoxItems}>
                {iconElements}
            </div>
        </div>
    );
}

export default FriendsBox;