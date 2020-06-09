import React from "react";
import classes from "./Nav.module.css"
import NavItem from "./NavItem";
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";


const Nav = (props) => {

    return (

            <nav className={classes.nav}>
                <div className={classes.item}>
                    <div>
                        <NavLink to='/profile' activeClassName={classes.active}>profile</NavLink>
                    </div>
                    <div>
                        <NavLink to='/dialogs' activeClassName={classes.active}>dialogs</NavLink>
                    </div>
                    <div>
                        <NavLink to='/users' activeClassName={classes.active}>users</NavLink>
                    </div>
                    <div>
                        <NavLink to='/news' activeClassName={classes.active}>news</NavLink>
                    </div>
                    <div>
                        <NavLink to='/music' activeClassName={classes.active}>music</NavLink>
                    </div>
                    <div>
                        <NavLink to='/settings' activeClassName={classes.active}>settings</NavLink>
                    </div>
                </div>
            </nav>

    )
}

export default Nav;