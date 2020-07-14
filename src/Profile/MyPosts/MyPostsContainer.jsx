import React from "react";
import {addPostActionCreator} from "../../Redux/Profile-reducer";
import MyPosts from './MyPosts'
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText)=> {
            dispatch(addPostActionCreator(postText))
        }
    }
}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;