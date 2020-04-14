import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo"

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.post}/>
        </div>


    );
}

export default Profile;