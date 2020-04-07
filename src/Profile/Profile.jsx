import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo"

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>




    );
}

export default Profile;