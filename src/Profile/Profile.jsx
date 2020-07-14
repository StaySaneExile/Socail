import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus}
                         status={props.status}
                         profile={props.profile}/>
            <MyPostsContainer store={props.store}  />
        </div>


    );
}

export default Profile;