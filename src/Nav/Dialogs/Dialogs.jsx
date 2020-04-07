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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Polina" id="1"/>
                <DialogItem name="Oksana" id="2"/>
                <DialogItem name="Misha" id="3"/>
                <DialogItem name="Fedya" id="4"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How r u?" />
                <Message message="Ayayaya" />
            </div>
        </div>
    );
           }

  export default Dialogs;