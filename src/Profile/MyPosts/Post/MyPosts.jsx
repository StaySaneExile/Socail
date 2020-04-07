import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post01/Post01"

const MyPosts = () => {
    return (
        <div className={classes.myPost}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message="hi how are u?" likesCount='23'/>
                <Post message="Its my first post" likesCount='5'/>
                <Post message="u bull shit" likesCount='14'/>
            </div>
            < /div>


                );
                }

                export default MyPosts;