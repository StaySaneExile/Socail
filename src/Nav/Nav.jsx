import React from "react";
import classes from "./Nav.module.css"
import NavItem from "./NavItem";
import Friends from "./Friends/Friends";


const Nav = (props) => {
    let navItem = props.navData.map ( n => (<NavItem p={n.p}
                                                     class={n.class}
                                                     text={n.text} />) );
    return (
        <div>
            <nav className={classes.nav}>
            {navItem}
            </nav>
            <Friends className={classes.friends} friend={props.friends} image={props.image} />
        </div>
    )
}

export default Nav;