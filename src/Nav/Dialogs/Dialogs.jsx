import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogItem = props.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messageItem = props.messages.map(message => (<Message message={message.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
        </div>
    );
}

export default Dialogs;