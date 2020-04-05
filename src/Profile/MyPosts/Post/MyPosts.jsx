import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post01/Post01"

const MyPosts = () => {
    return (
      <div> mypost
          <div>
              <textarea></textarea>
              <button>Add post</button>
              <button>Remove</button>
          </div>
          <Post/>
          <Post/>
      < /div>



  );
                  }

export default MyPosts;