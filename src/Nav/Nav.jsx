import React from "react";
import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.p} activeClassName={props.class}>
                {props.text}
            </NavLink>
        </div>
    )
};

let NavData = [
    {p: '/profile', class: 'classes.active', text: 'Profile'},
    {p: '/dialogs', class: 'classes.active', text: 'Messages'},
    {p: '/news', class: 'classes.active', text: 'News'},
    {p: '/music', class: 'classes.active', text: 'Music'},
    {p: '/settings', class: 'classes.active', text: 'Settings'}
]
let navItem = NavData.map ( n => (<NavItem p={n.p} class={n.class} text={n.text} />) );



const Nav = () => {
    return (
        <nav className={classes.nav}>
            {navItem}
        </nav>
    )
}

export default Nav;