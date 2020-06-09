import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div >
                <img src="https://www.exler.ru/films/images/10-03-2011/big/screen00002.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src ={props.profile.photos.large} />
                Ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;