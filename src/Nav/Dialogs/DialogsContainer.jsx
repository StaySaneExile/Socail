import React from "react";
import {sendMessageCreator} from "../../Redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

let mapState = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatch = (dispatch) => {
    return {
        onClickMessage: (newMessageText)=> {
            dispatch(sendMessageCreator(newMessageText))}
    }
}


export default compose(
    connect (mapState, mapDispatch),
    withAuthRedirect
) (Dialogs)