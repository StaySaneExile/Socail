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

const App = () => {
    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Nav/>
            <div className={classes.wrapperContent}>
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />

            </div>
        </div>
        </BrowserRouter>

    );
}

export default App;
