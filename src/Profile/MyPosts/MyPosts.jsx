import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post01"

const MyPosts = (props) => {


    let messDrow = props.posts.map(post => (<Post message={post.message}
                                               likesCount={post.likesCount}
                                               className={post.class}/>)  );

    return (
        <div className={classes.myPost}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea className={classes.postText}> </textarea>
                </div>
                <div>
                    <button>Add post</button>
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