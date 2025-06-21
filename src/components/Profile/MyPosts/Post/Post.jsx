import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.postItem}>
            <img
                src={'https://images.pexels.com/photos/3498989/pexels-photo-3498989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
            {props.message}
            <div>
                <span> {props.likes} LIKES</span>
            </div>
        </div>
    );
}

export default Post;