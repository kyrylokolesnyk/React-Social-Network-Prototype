import React from "react";
import styles from "./../FriendsBox.module.css";

const FriendsBoxIcon = (props) => {

    return (
        <div className={styles.friendItem}>
            <div className={styles.friendImgWrapper}>
                <img className={styles.friendImg}
                     src={props.pfpLink}/>
            </div>
            <div>{props.name}</div>
        </div>
    );
}

export default FriendsBoxIcon;