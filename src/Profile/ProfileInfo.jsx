import React from "react";
import s from "./ProfileInfo.module.css";
import MyPosts from './MyPosts/MyPosts'

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div>

            </div>
            <div >
                <img src="https://www.exler.ru/films/images/10-03-2011/big/screen00002.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + discription
            </div>
        </div>
    )
}
export default ProfileInfo;