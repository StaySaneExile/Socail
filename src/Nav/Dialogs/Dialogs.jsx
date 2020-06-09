import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBody} from "../../Redux/Dialog-reducer";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogItem = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messageItem = state.messages.map(message => (<Message message={message.message}/>));
    let newMessageText = state.newTextMessage;


    let onClickMessage = () => {
        props.onClickMessage()
    }
    let newMessageChange = (e) => {
       let body = e.currentTarget.value;
       props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>


            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
                <div>
                    <div> <textarea value={newMessageText}
                                    onChange={newMessageChange}
                                    placeholder='Enter your message'> </textarea> </div>
                    <div> <button onClick={onClickMessage}>Send</button> </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;