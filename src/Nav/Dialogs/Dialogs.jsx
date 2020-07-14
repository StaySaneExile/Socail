import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import MessageFormRedux from "./MessageForm";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogItem = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messageItem = state.messages.map(message => (<Message message={message.message}/>));
    let newMessageText = state.newTextMessage;

    let addNewMessageText = (values) => {
        props.onClickMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
                <MessageFormRedux onSubmit={addNewMessageText}/>
            </div>
        </div>
    );
}

export default Dialogs;