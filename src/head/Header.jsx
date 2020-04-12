import React from "react";
import classes from "./Header.module.css";


const Header = () => {
    return (
            < header
                className = {classes.header} >
                < img src = "https://cdnb.artstation.com/p/assets/images/images/021/280/227/large/wladimir-kovalenko-screenshot000.jpg?1571080099" />
            </header>
    );
}


export default Header;