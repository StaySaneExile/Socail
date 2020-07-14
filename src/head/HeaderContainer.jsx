import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserData, logout} from "../Redux/auth-reducer";
import {authAPI} from "../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect (mapStateToProps, {getUserData, logout}) (HeaderContainer);