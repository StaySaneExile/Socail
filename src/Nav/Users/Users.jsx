import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
            })}
        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photoUrl}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : '55c7683d-910d-4237-970d-b8f19c995706'
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowing(false, u.id)
                                    });
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : '55c7683d-910d-4237-970d-b8f19c995706'
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowing(false, u.id)
                                    });
                            }}>Follow</button>

                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
    </div>

}

export default Users;