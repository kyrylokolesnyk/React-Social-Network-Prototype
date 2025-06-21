import React from "react";
import styles from './../Messages.module.css'
import {NavLink} from "react-router-dom";

const ChatItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chatImgWrapper}>
                <img className={styles.chatImg} src="https://chcclynden.org/wp-content/uploads/2014/03/placeholder-person.png" alt="" />
            </div>
            <NavLink to={path} className={linkData => linkData.isActive ? styles.chatLink + " " + styles.active : styles.chatLink}>{props.name}</NavLink>
            <div className={styles.chatMsgPreview}>
                Previous message...
            </div>
        </div>
    );
}

export default ChatItem;