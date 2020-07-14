import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post01"
import PostFormRedux from "./MyPostsFormRedux";

const MyPosts = (props) => {

    let messDrow = props.posts.map(post => (<Post message={post.message}
                                                  likesCount={post.likesCount}
                                                  id={post.id}/>));

    let onAddPost = (values) => {
        props.addPost(values.postText)
    };


    return (
        <div className={classes.myPost}>
            <h3>My post</h3>
            <PostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                {messDrow}
            </div>
        </div>

    );
}

export default MyPosts;