import React from "react";
import classes from "./Friend.module.css"


const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.img}>
                <img src={props.image} />
            </div>
            <div className={classes.name}>
                {props.name}
            </div>

        </div>
    )
}

export default Friend;