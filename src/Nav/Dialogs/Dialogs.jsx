import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {name: 'Polina', id: 1},
        {name: 'Oksana', id: 2},
        {name: 'Misha', id: 3},
        {name: 'Fedya', id: 4}
    ];
    let messages = [
        {message: 'Hi'},
        {message: 'How r u?'},
        {message: 'Ayayay'},
        {message: 'Yoyoyo'}
    ]
    let dialogItem = dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messageItem = messages.map(message => (<Message message={message.message}/>));

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