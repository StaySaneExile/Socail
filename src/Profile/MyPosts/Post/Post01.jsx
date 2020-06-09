import React from "react";
import classes from "./Post01.module.css"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.nicepng.com/png/detail/306-3061316_the-new-vp-logofluff-virtus-pro-dota-2.png"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
            < /div>


                );
                }

                export default Post;