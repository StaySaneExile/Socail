import React from "react";
import classes from "./Friends.module.css"
import Friend from "./Friend";


const Friends = (props) => {

    let friends = props.friend.map( f => <Friend name={f.name} image={f.image} /> )

    return (
        <div className={classes.main}>
            <h2 className={classes.zag}>Friends</h2>
            {friends}
        </div>
    )
}

export default Friends;