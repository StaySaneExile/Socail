import React from "react";
import {sendMessageCreator, updateNewMessageBody} from "../../Redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapState = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatch = (dispatch) => {
    return {
        updateNewMessageBody: (body)=> {
            dispatch(updateNewMessageBody(body))},
        onClickMessage: ()=> {
            dispatch(sendMessageCreator())}
    }
}


const DialogsContainer = connect (mapState, mapDispatch) (Dialogs);

export default DialogsContainer;