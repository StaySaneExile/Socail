import React, {Profiler} from 'react';
import './App.css';
import Nav from "./Nav/Nav"
import classes from "./Nav/Dialogs/Dialogs.module.css";
import {Route, withRouter} from "react-router-dom";
import News from "./Nav/News/News"
import Music from "./Nav/Music/Music";
import Settings from "./Nav/Settings/Settings";
import DialogsContainer from "./Nav/Dialogs/DialogsContainer";
import UsersContainer from "./Nav/Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./head/HeaderContainer";
import Login from "./Nav/Login/Login";
import {connect} from "react-redux";
import {getUserData, logout} from "./Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {

        if (!this.props.initialized) {
           return <Preloader />
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className={classes.wrapperContent}>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect (mapStateToProps, {initializeApp}))
(App);
