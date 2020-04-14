import React, {Profiler} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./head/Header"
import Nav from "./Nav/Nav"
import Profile from "./Profile/Profile"
import Dialogs from "./Nav/Dialogs/Dialogs";
import classes from "./Nav/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Nav/News/News"
import Music from "./Nav/Music/Music";
import Settings from "./Nav/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Nav navData={props.state.nav.navData} friends={props.state.nav.friend}/>
            <div className={classes.wrapperContent}>
                <Route path='/dialogs' render={ () => <Dialogs messages={props.state.dialogsPage.messages}
                                                               dialogs={props.state.dialogsPage.dialogs}/> } />

                <Route path='/profile' render={ () => <Profile post={props.state.profilePage.postData} /> } />
                <Route path='/news' render={ () => <News /> } />
                <Route path='/music' render={ () => <Music /> } />
                <Route path='/settings' render={ () => <Settings /> } />

            </div>
        </div>
        </BrowserRouter>

    );
}

export default App;
