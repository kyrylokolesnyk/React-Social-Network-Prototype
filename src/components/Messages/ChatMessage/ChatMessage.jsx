import React from "react";
import styles from './../Messages.module.css'

const ChatMessage = (props) => {
    return (
        <div className={props.isCurrentUser ? styles.myMessageBubble : styles.otherMessageBubble}>
            <div className={styles.messageBubbleContent}>
                <div className={styles.messageBubbleText}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;