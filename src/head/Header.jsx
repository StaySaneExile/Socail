import React from "react";
import classes from "./Header.module.css";


const Header = () => {
    return (
            < header
                className = {classes.header} >
                < img src = "https://png.pngtree.com/template/20190809/ourlarge/pngtree-golden-building-real-estate-logo-icon-concept-template-on-dark-background-image_290695.jpg" />
            </header>
    );
}


export default Header;