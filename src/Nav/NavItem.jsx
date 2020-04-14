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



export default NavItem;