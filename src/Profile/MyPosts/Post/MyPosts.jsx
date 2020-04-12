import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post01/Post01"

const MyPosts = () => {
    let postData =[
        {message: 'Hello',likesCount: '12'},
        {message: 'asdasfgds',likesCount: '456'},
        {message: 'asdasfg',likesCount: '87'}
        ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />

            </div>
            < /div>


                );
                }

                export default MyPosts;