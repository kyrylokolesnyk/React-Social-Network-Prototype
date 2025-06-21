import React from "react";
import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import ChatMessage from "./ChatMessage/ChatMessage";

const Messages = (props) => {

    let chatsElements = props.state.chatsData.map(c => <ChatItem name={c.name} id={c.id}/>);
    let messagesElements = props.state.messagesData.map(m => <ChatMessage message={m.message}
                                                                          isCurrentUser={m.isCurrentUser}/>);

    return (
        <div className={styles.messages}>
            <div className={styles.chatsItems}>
                {chatsElements}
            </div>
            <div className={styles.chatMessages}>
                <div className={styles.messagesContainer}>
                    <div className={styles.messagesScrollWrapper}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;