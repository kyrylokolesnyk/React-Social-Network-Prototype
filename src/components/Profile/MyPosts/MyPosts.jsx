import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likes={p.likes}/>);

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={styles.postInput}>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.postItems}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;