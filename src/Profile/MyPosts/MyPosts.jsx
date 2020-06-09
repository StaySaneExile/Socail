import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post01"

const MyPosts = (props) => {

    let messDrow = props.posts.map(post => (<Post message={post.message}
                                                           likesCount={post.likesCount}
                                                           id={post.id}/>));
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };
    return (
        <div className={classes.myPost}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                {messDrow}
            </div>
            < /div>

                );
                }

                export default MyPosts;