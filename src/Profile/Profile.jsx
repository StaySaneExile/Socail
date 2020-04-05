import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/MyPosts";

const Profile = () => {
    return (
  < div className={classes.content}>

      < div className={classes.image}>
   < img src="https://www.exler.ru/films/images/10-03-2011/big/screen00002.jpg" / >
       < /div>

       <div> ava + description
           < /div>
               <MyPosts />
       </div>



  );
           }

  export default Profile;