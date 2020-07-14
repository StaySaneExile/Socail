import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
            < header
                className = {classes.header} >
                < img src = "https://cdnb.artstation.com/p/assets/images/images/021/280/227/large/wladimir-kovalenko-screenshot000.jpg?1571080099" />
                <div className={classes.login_block}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        :<NavLink to={'/login'}>Login</NavLink>
                    }
                </div>

            </header>
    );
}


export default Header;