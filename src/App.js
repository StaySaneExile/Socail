import React, {Profiler} from 'react';
import './App.css';
import Nav from "./Nav/Nav"
import classes from "./Nav/Dialogs/Dialogs.module.css";
import {Route} from "react-router-dom";
import News from "./Nav/News/News"
import Music from "./Nav/Music/Music";
import Settings from "./Nav/Settings/Settings";
import DialogsContainer from "./Nav/Dialogs/DialogsContainer";
import UsersContainer from "./Nav/Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./head/HeaderContainer";

const App = (props) => {

    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Nav />
            <div className={classes.wrapperContent}>
                <Route path='/dialogs' render={()=> <DialogsContainer /> } />
                <Route path='/profile/:userId?' render={()=> <ProfileContainer /> } />
                <Route path='/users' render={()=> <UsersContainer /> } />
                <Route path='/news' render={()=> <News /> } />
                <Route path='/music' render={()=> <Music /> } />
                <Route path='/settings' render={()=> <Settings /> } />

            </div>
        </div>


    );
}

export default App;
